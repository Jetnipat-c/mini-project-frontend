import { Input, DatePicker, Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import moment from "moment-timezone";

const { TextArea } = Input;

const CreateTransaction = () => {
  const [tranNote,setTranNote] = useState<string>("")
  const [tranDate, setTranDate] = useState<string>("");
  const [tranAmount, setTranAmount] = useState<number>();
  const [tranType, setTranType] = useState<boolean>();
  
  function onChange(date, dateString) {
    console.log(date, dateString);
    setTranDate(dateString)
  }

  const handleClickBtn = async (e: boolean) => {
    console.log(e);
 
  }

  moment.tz.setDefault("America/Los_Angeles");
  return (
    <div className="p-5">
      <div className="grid grid-cols-3  max-w-screen-sm bg-white text-primary dark:bg-bgnav dark:text-primary rounded-t-lg">
        <div className="col-start-1 col-span-3 m-3 text-4xl font-bold ">
          Create <br />
          Transaction
        </div>
        <div className="col-start-1 m-3 text-base ">วันที่</div>

        <div className="col-start-2 m-3 text-base">รายการ</div>
        <div className="col-start-3 m-3 text-base">จำนวน</div>
      </div>

      <div className="grid grid-cols-3 border-b-2 border-fuchsia-600 max-w-screen-sm bg-white text-title dark:bg-bgnav dark:text-primary ">
        <div className="col-start-1 col-end-2 m-3 ">
          <DatePicker format="YYYY-MM-D" onChange={onChange} />
        </div>
        <div className="col-start-2 col-end-3 m-3">
          <TextArea rows={4} onChange={(e) => setTranNote(e.target.value)}/>
        </div>
        <div className="col-start-3 col-end-4 m-3">
          <Input type="number" placeholder="60" onChange={(e) => setTranAmount(parseFloat(e.target.value))}/>
        </div>
      </div>
      <div className="grid grid-cols-2 max-w-screen-sm bg-white text-title dark:bg-bgnav dark:text-primary pt-2 text-center pb-2 rounded-b-lg">
        <div className="">
          <Button type="primary" icon={<ArrowRightOutlined />}  onClick={()=>handleClickBtn(true)} >
            รายรับ
          </Button>
        </div>
        <div className="">
          <Button type="primary" danger icon={<ArrowLeftOutlined />}  onClick={()=>handleClickBtn(false)} >
            รายจ่าย
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CreateTransaction;
