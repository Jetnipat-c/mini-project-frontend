import { Input, DatePicker, Button, Radio } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import moment from "moment-timezone";
import { TransactionStore } from "../store";
import axios from "axios";
import { useRouter } from "next/router";

const dateFormat = "YYYY-MM-DD";

const ManageTransaction = () => {
  const router = useRouter();
  const {
    userID,
    tranID,
    tranDate,
    tranNote,
    tranType,
    tranAmount,
  } = TransactionStore();
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState(false);

  function onChange(date, dateString) {
    //console.log(date,dateString);
    setDate(dateString);
  }
  moment.tz.setDefault("America/Los_Angeles");

  const handleEdit = async () => {
    try {
      let result = await axios.put(
        "http://localhost:6969/api/transaction/update",
        {
          userID,
          tranDate: date,
          tranNote: note,
          tranType: value,
          tranAmount: amount,
          tranID,
        }
      );
      console.log("xx", result.data);
      //router.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async () => {
    try {
      let result = await axios.delete(
        `http://localhost:6969/api/transaction/deletetran/${tranID}`
      );
      console.log("xx", result.data);
      //router.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const selectType = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="p-5 ">
      <div className="grid grid-cols-3 px-2 gap-3 max-w-screen-sm bg-white text-primary dark:bg-bgnav dark:text-primary rounded-t-lg">
        <div className="col-start-1 col-span-4  text-4xl font-bold">
          Manage <br />
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
          <Input
            type="text"
            placeholder={tranNote}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className="">
          <Input
            type="number"
            placeholder={tranAmount + ""}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 max-w-screen-sm bg-white text-title dark:bg-bgnav dark:text-primary pt-2 text-center  pb-2 rounded-b-lg">
        <div className="">
          <Button
            type="primary"
            icon={<ArrowRightOutlined />}
            onClick={handleEdit}
          >
            แก้ไข
          </Button>
        </div>
        <div>
          <Radio.Group onChange={selectType} value={value}>
            <Radio value={true}>
              <div className="text-white">รายรับ</div>
            </Radio>
            <Radio value={false}>
              <div className="text-white">รายจ่าย</div>
            </Radio>
          </Radio.Group>
        </div>
        <div className="">
          <Button
            type="primary"
            danger
            icon={<ArrowLeftOutlined />}
            onClick={handleDelete}
          >
            ลบ
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ManageTransaction;
