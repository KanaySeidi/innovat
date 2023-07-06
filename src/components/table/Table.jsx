import React, { useState } from "react";
import table from "./Table.module.css";

const Table = (data) => {
  const [clickedDate, setClickedDate] = useState(null);

  console.log(data);
  const entriesArr = data.data;
  console.log(entriesArr);

  let months = [
    "Апр.",
    "Май",
    "Июнь",
    "Июль",
    "Авг.",
    "Сент.",
    "Окт.",
    "Нояб.",
    "Дек.",
    "Янв.",
    "Фев.",
    "Март",
  ];

  const getColor = (contributions) => {
    if (contributions === 0) {
      return "#EDEDED";
    } else if (contributions <= 9) {
      return "#ACD5F2";
    } else if (contributions <= 19) {
      return "#7FA8C9";
    } else if (contributions <= 29) {
      return "#527BA0";
    } else {
      return "#254E77";
    }
  };

  const handleClick = (date, contributions) => {
    if (clickedDate && clickedDate.date === date) {
      setClickedDate(null);
    } else {
      setClickedDate({ date, contributions });
    }
  };

  return (
    <>
      <div className={table.section}>
        <div className={table.container}>
          <div className={table.box}>
            {entriesArr.map((item, index) => {
              const date = item[0];
              const contributions = item[1];
              return (
                <div
                  className={table.item}
                  key={index}
                  style={{ backgroundColor: getColor(contributions) }}
                  onClick={() => handleClick(date, contributions)}
                ></div>
              );
            })}
          </div>
        </div>
        {clickedDate && (
          <div className={table.text}>
            Число котрибуций: {clickedDate.contributions}
            <br />
            Дата: {clickedDate.date}
          </div>
        )}
      </div>
    </>
  );
};

export default Table;
