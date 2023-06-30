import React from "react";
import { Checkbox } from "@material-tailwind/react";

const RollCallCountry = () => {
  const tableData = [
    { imageUrl: "india.png", label: "INDIA", id: "ripple-on" },
    { imageUrl: "usa.png", label: "USA", id: "ripple-on" },
    { imageUrl: "russia.png", label: "RUSSIA", id: "ripple-on" },
    { imageUrl: "australlia.png", label: "AUSTRALLIA", id: "ripple-on" },
    { imageUrl: "france.png", label: "FRANCE", id: "ripple-on" },
    { imageUrl: "germany.png", label: "GERMANY", id: "ripple-on" },
    { imageUrl: "russia.png", label: "RUSSIA", id: "ripple-on" },
    { imageUrl: "australlia.png", label: "AUSTRALLIA", id: "ripple-on" },
    { imageUrl: "france.png", label: "FRANCE", id: "ripple-on" },
    { imageUrl: "germany.png", label: "GERMANY", id: "ripple-on" },




  ];

  return (
    <div style={{ overflowX: "auto", overflowY: "hidden" }}>
      <div className="relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-xl">
          <thead className="text-sm text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 text-gray-400 py-3">Country</th> {/* Empty th */}
              <th scope="col" className="px-6 text-gray-400 py-3">
                Present
              </th>
              <th scope="col" className="px-6 text-gray-400 py-3">
                Present & Voting
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                className=" border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-1">
                  <div className="flex items-center">
                    <img
                      src={item.imageUrl}
                      alt={item.label}
                      className="w-8 h-8 border border-gray-300 rounded-full"
                    />
                    <span className="ml-3 text-[#6F6F6F] font-bold text-lg">{item.label}</span>
                  </div>
                </td>
                <td className="px-6 py-1">
                  <Checkbox
                    id={item.id}
                    className="border-[#ECECEC] bg-[#FFFFFF]"
                    style={{ transform: "scale(1.3)" }}
                  />
                </td>
                <td className="px-6 py-1">
                  <Checkbox
                    id={item.id}
                    className="border-[#ECECEC] bg-[#FFFFFF]"
                    color="cyan"
                    style={{ transform: "scale(1.3)" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RollCallCountry;
