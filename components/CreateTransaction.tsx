import { Input, DatePicker, Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import moment from "moment-timezone";
import axios from "axios";
import { UserStore } from "../store";
import { useRouter } from "next/router";

const { TextArea } = Input;

const CreateTransaction = () => {
  const router = useRouter();
  const { id } = UserStore();
  const [tranNote, setTranNote] = useState<string>("");
  const [tranDate, setTranDate] = useState<string>("");
  const [tranAmount, setTranAmount] = useState<number>();
  const [tranType, setTranType] = useState<boolean>();

  function onChange(date, dateString) {
    //console.log(date,dateString);
    setTranDate(dateString);
  }

  const handleClickBtn = async (choice: boolean) => {
    console.log(choice);
    //setTranType(e);
    let userID = id;
    //console.log("Data : ", userID, tranDate, tranNote, tranAmount, tranType);
    if (!tranDate || !tranNote || !tranAmount || !choice || !id) {
      alert("กรุณากรอกข้อมูลให้ครบ");
    } else {
      try {
        let result = await axios.post(
          "http://localhost:6969/api/transaction/create",
          {
            tranDate,
            tranNote,
            tranAmount,
            tranType: choice,
            userID,
          }
        );
        console.log(result.data);
        router.reload();
      } catch (e) {
        console.log(e);
      }
    }
  };

  moment.tz.setDefault("America/Los_Angeles");
  return (
    <div className="p-5 ">
      <div className="grid grid-cols-3 px-2 gap-3 max-w-screen-sm bg-white text-primary dark:bg-bgnav dark:text-primary rounded-t-lg">
        <div className="col-start-1 col-span-3  text-4xl font-bold text-yellow-500">
          Create <br />
          Transaction
        </div>
        <div className=" text-base ">วันที่</div>

        <div className="  text-base">รายการ</div>
        <div className="  text-base">จำนวน</div>
      </div>

      <div className="grid grid-cols-3 gap-3 pb-2 px-2 border-b-2 border-fuchsia-600 max-w-screen-sm bg-white text-title dark:bg-bgnav dark:text-primary ">
        <div className="">
          <DatePicker format="YYYY-MM-D" onChange={onChange} style={{width: "100%"}} />
        </div>
        <div className="">
          <Input
            type="text"
            placeholder="กับข้าว"
            onChange={(e) => setTranNote(e.target.value)}
          />
        </div>
        <div className="">
          <Input
            type="number"
            placeholder="60"
            onChange={(e) => setTranAmount(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 max-w-screen-sm bg-white text-title dark:bg-bgnav dark:text-primary pt-2 text-center pb-2 rounded-b-lg">
        <div className="">
          <Button
            type="primary"
            icon={<ArrowRightOutlined />}
            onClick={() => handleClickBtn(true)}
          >
            รายรับ
          </Button>
        </div>
        <div className="">
          <Button
            type="primary"
            danger
            icon={<ArrowLeftOutlined />}
            onClick={() => handleClickBtn(false)}
          >
            รายจ่าย
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CreateTransaction;
