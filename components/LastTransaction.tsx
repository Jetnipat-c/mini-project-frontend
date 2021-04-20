const LastTransaction = () => {
    return (<div className="p-5">
        <div className="grid grid-cols-3 gap-4 max-w-screen-sm bg-white text-title dark:bg-bgnav dark:text-primary ">
            <div className="col-start-1 col-span-3 m-3 text-4xl font-bold ">Lastes <br />Transaction</div>
            <div className="col-start-1 m-3">วันที่</div>
            <div className="col-start-2 m-3">รายการ</div>
            <div className="col-start-3 m-3">จำนวน</div>
            <div></div>
        </div>
    </div>)
}
export default LastTransaction