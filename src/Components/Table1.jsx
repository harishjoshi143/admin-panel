import React from "react";
import { firstTable } from "../Components/Helper";
import bar from "../assets/images/png/bargraph.png";
export default function Table1() {
  return (
    <>
      <div className="flex">
        <div className="bg-white p-4 w-[300px] mt-5">
          <div className="flex justify-between">
            <p className="font-normal text-sm">Recent Transaction</p>
            <p className="text-xl font-bold">:</p>
          </div>
          <table className="w-full">
            <tr>
              <td className="text-[#00000080;] text-start p-[10px]">Name</td>
              <td className="text-[#00000080;] text-end p-[10px]">Amount</td>
            </tr>

            {firstTable.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td className="font-normal text-start text-sm p-2.5">
                      {item.Name}
                    </td>
                    <td className="font-normal text-end text-sm p-2.5">
                      {item.Amount}
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
        <div className="ms-3 mt-5">
          <img className=""  src={bar} alt="" />
        </div>
      </div>
    </>
  );
}
