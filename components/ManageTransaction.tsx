import { Input, DatePicker, Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import moment from "moment-timezone";
import { TransactionStore } from "../store";
const dateFormat = "YYYY-MM-DD";
const ManageTransaction = () => {
  const {
    userID,
    tranID,
    tranDate,
    tranNote,
    tranType,
    tranAmount,
  } = TransactionStore();
  const [date, setDate] = useState("");

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  moment.tz.setDefault("America/Los_Angeles");
  return (
    <div className="p-5 ">
      <div className="grid grid-cols-3 px-2 gap-3 max-w-screen-sm bg-white text-primary dark:bg-bgnav dark:text-primary rounded-t-lg">
        <div className="col-start-1 col-span-4  text-4xl font-bold">
          Create <br />
          Transaction
        </div>
        <div className=" text-base ">วันที่</div>

        <div className="  text-base">รายการ</div>
        <div className="  text-base">จำนวน</div>
      </div>

      <div className="grid grid-cols-3 gap-3 pb-2 px-2 border-b-2 border-fuchsia-600 max-w-screen-sm bg-white text-title dark:bg-bgnav dark:text-primary ">
        <div className="">
          <DatePicker
            format="YYYY-MM-D"
            placeholder={tranDate}
            onChange={onChange}
          />
        </div>
        <div className="">
          <Input type="text" placeholder={tranNote} />
        </div>
        <div className="">
          <Input type="number" placeholder={tranAmount + ""} />
        </div>
      </div>
      <div className="grid grid-cols-2 max-w-screen-sm bg-white text-title dark:bg-bgnav dark:text-primary pt-2 text-center  pb-2 rounded-b-lg">
        <div className="">
          <Button type="primary" icon={<ArrowRightOutlined />}>
            แก้ไข
          </Button>
        </div>
        <div className="">
          <Button type="primary" danger icon={<ArrowLeftOutlined />}>
            ลบ
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ManageTransaction;
