import {
  Input,
  Col,
  Row,
  Select,
  InputNumber,
  DatePicker,
  AutoComplete,
  Cascader,
} from "antd";
import { useState } from "react";
const CreateTransaction = () => {
  const [date, setDate] = useState("");
  const hadeldate = (e) => {
    console.log(e._d);
  };
  return (
    <div className="p-5">
      <div className="grid grid-cols-3  max-w-screen-sm bg-white text-primary dark:bg-bgnav dark:text-primary ">
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
        <DatePicker style={{ width: "50%" }} onChange={hadeldate} />
      </div>
      <div className="col-start-2 col-end-3 m-3">
        <Input placeholder="ซื้อกับข้าว" />
      </div>
      <div className="col-start-3 col-end-4 m-3">
        <Input placeholder="60" />
      </div>
      </div>
    </div>
  );
};
export default CreateTransaction;
