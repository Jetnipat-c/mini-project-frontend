const LastTransaction = () => {
  const data = [
    {
      userID: 1,
      tranDate: "4/19/2021",
      tranNote: "ปลาป๋อง",
      tranType: "EXPENDITURE",
      tranAmount: 40,
      tranID: 2,
    },
    {
      userID: 1,
      tranDate: "5/27/2021",
      tranNote: "กับข้าวครับกับข้าว",
      tranType: "REVENUE",
      tranAmount: 90,
      tranID: 2,
    },
  ];
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-4 max-w-screen-sm bg-white text-primary dark:bg-bgnav dark:text-primary ">
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
              className="grid grid-cols-3 gap-4 max-w-screen-sm bg-white text-title dark:bg-bgnav dark:text-primary "
              key={index}
            >
              {/* <div className="col-start-1 col-span-3 m-3 m-3"></div> */}
              <div className="col-start-1 col-end-2 m-3">{item.tranDate}</div>
              <div className="col-start-2 col-end-3 m-3">
                <div>{item.tranNote}</div>
                <div>{item.tranType}</div>
              </div>
              <div className="col-start-3 col-end-4 m-3">{item.tranAmount}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default LastTransaction;
