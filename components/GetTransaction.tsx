import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Pagination, Button } from "antd";
import { useEffect,useState } from "react";
import axios from "axios";
import { TransactionStore } from "../store";

const GetTransaction = ({token}) => {
  const [id,setId] = useState()
  const {setTransaction} = TransactionStore();

  const getTransactionforSet = (tranID,tranDate,tranNote,tranType,tranAmount) => {
      //console.log(id,tranID,tranDate,tranNote,tranType,tranAmount)
      setTransaction(id,tranID,tranDate,tranNote,tranType,tranAmount)
  }
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }
  const [data, setData] = useState([]);
  console.log("data : ", data);

  useEffect(() => {
    profileUser();
  }, []);

  const profileUser = async () => {
    try {
      // console.log('token: ', token)
      const users = await axios.get(`http://localhost:6969/api/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (users) {
        console.log(users.data.id);
        setId(users.data.id)
        await getTransactions(users.data.id);
        
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getTransactions = async (id) => {
    try {
      const transaction = await axios.get(
        `http://localhost:6969/api/transaction/byuser/${id}`
      );
      console.log(transaction.data);
      setData(transaction.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="p-5">
       <div className="grid grid-cols-4  max-w-screen-sm bg-white text-primary dark:bg-bgnav dark:text-primary rounded-t-lg">
        <div className="col-start-1 col-span-4 m-3 text-4xl font-bold ">
          Lastes <br />
          Transaction
        </div>
        <div className="col-start-1 m-3 text-base ">วันที่</div>
        <div className="col-start-2 m-3 text-base">รายการ</div>
        <div className="col-start-3 m-3 text-base">จำนวน</div>
      </div>
      <div>
        {data.map((item, index) => {
          return (
            <div
              className="grid grid-cols-4 border-b-2 border-fuchsia-600 max-w-screen-sm bg-white text-title dark:bg-bgnav dark:text-primary "
              key={index}
            >
              <div className="col-start-1 col-end-2 m-3">{item.tranDate}</div>
              <div className="col-start-2 col-end-3 m-3">
                <div className="dark:text-primary text-base">{item.tranNote}</div>
                <div>
                  {item.tranType ? (
                    <div>
                      <ArrowLeftOutlined />
                      <span className="pl-1">expenditure</span>
                    </div>
                  ) : (
                    <div>
                      <ArrowRightOutlined />
                      <span className="pl-1">revenue</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-start-3 col-end-4 m-3">
                {item.tranType ? (
                  <div>
                    <span className="text-green">+ ฿{item.tranAmount}</span>
                  </div>
                ) : (
                  <div>
                    <span className="text-red">- ฿{item.tranAmount}</span>
                  </div>
                )}
              </div>
              <div className="col-start-4 col-end-5 m-3 ">
                  <div><Button onClick={()=>getTransactionforSet(item.tranID,item.tranDate,item.tranNote,item.tranType,item.tranAmount)} size="small" style={{marginTop: "7px", maxWidth: "50px", backgroundColor: "#788C95", color: "#fff", border: "none"}}>เลือก</Button></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 rounded-b-lg  bg-white text-primary dark:bg-bgnav dark:text-primary ">
        <div className="m-3 text-2xl mx-0 md:mx-44">
          <Pagination
            current={1}
            defaultCurrent={1}
            onChange={onShowSizeChange}
            total={40}
            className=""
          />
        </div>
      </div>
    </div>
  );
};
export default GetTransaction;
