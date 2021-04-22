import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Pagination, Button } from "antd";
import { useState } from "react";

const GetTransaction = () => {
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }
  const data = [
    {
      userID: 1,
      tranDate: "4/19/2021",
      tranNote: "ปลาป๋อง",
      tranType: false,
      tranAmount: 40.0,
      tranID: 2,
    },
    {
      userID: 1,
      tranDate: "5/27/2021",
      tranNote: "ค่ากับข้าวครับกับข้าว",
      tranType: true,
      tranAmount: 90.5,
      tranID: 2,
    },
    {
      userID: 1,
      tranDate: "5/27/2021",
      tranNote: "ค่ากับข้าวครับกับข้าว",
      tranType: true,
      tranAmount: 90.5,
      tranID: 2,
    },
    {
      userID: 1,
      tranDate: "5/27/2021",
      tranNote: "ค่ากับข้าวครับกับข้าว",
      tranType: true,
      tranAmount: 90.5,
      tranID: 2,
    },
    {
      userID: 1,
      tranDate: "4/19/2021",
      tranNote: "ปลาป๋อง",
      tranType: false,
      tranAmount: 40.0,
      tranID: 2,
    },
    {
      userID: 1,
      tranDate: "4/19/2021",
      tranNote: "ปลาป๋อง",
      tranType: false,
      tranAmount: 40.0,
      tranID: 2,
    },
    {
      userID: 1,
      tranDate: "4/19/2021",
      tranNote: "ปลาป๋อง",
      tranType: false,
      tranAmount: 40.0,
      tranID: 2,
    },
    {
      userID: 1,
      tranDate: "5/27/2021",
      tranNote: "ค่ากับข้าวครับกับข้าว",
      tranType: true,
      tranAmount: 90.5,
      tranID: 2,
    },
    {
      userID: 1,
      tranDate: "5/27/2021",
      tranNote: "ค่ากับข้าวครับกับข้าว",
      tranType: true,
      tranAmount: 90.5,
      tranID: 2,
    },
    {
      userID: 1,
      tranDate: "5/27/2021",
      tranNote: "ค่ากับข้าวครับกับข้าว",
      tranType: true,
      tranAmount: 90.5,
      tranID: 2,
    },
  ];
  return (
    <div className="p-5">
      <div className="grid grid-cols-4  max-w-screen-sm bg-white text-primary dark:bg-bgnav dark:text-primary ">
        <div className="col-start-1 col-span-3 m-3 text-4xl font-bold ">
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
              {/* <div className="col-start-1 col-span-3 m-3 m-3"></div> */}
              <div className="col-start-1 col-end-2 m-3 ">{item.tranDate}</div>
              <div className="col-start-2 col-end-3 m-3">
                <div className="text-black">{item.tranNote}</div>
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
              <div className="col-start-4 col-end-5 m-3">
                  <div><Button size="small" style={{marginTop: "7px", width: "60px", backgroundColor: "#788C95", color: "#fff", border: "none"}}>เลือก</Button></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3  max-w-screen-sm bg-white text-primary dark:bg-bgnav dark:text-primary ">
        <div className="col-start-1 col-span-3 m-3 text-4xl font-bold ml-8 md:mx-44">
          <Pagination
            current={1}
            defaultCurrent={1}
            onChange={onShowSizeChange}
            total={50}
            className=""
          />
        </div>
      </div>
    </div>
  );
};
export default GetTransaction;
