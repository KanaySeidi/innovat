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

  const generateCalendar = () => {
    const calendar = [];
    let currentDate = new Date();
    currentDate.setMonth(3); // Устанавливаем месяц на апрель (0-январь, 1-февраль, ..., 11-декабрь)
    currentDate.setDate(1); // Устанавливаем день на 1

    let week = [];
    for (let i = 0; i < entriesArr.length; i++) {
      const item = entriesArr[i];
      const date = item[0];
      const contributions = item[1];

      week.push(
        <div
          className={table.item}
          key={i}
          style={{ backgroundColor: getColor(contributions) }}
          onClick={() => handleClick(date, contributions)}
        >
          <span className={table.day}></span>
        </div>
      );

      if (week.length === 7 || i === entriesArr.length - 1) {
        calendar.push(<div key={i}>{week}</div>);
        week = [];
      }
    }

    return calendar;
  };

  const getContributionsByDate = (date) => {
    const entry = entriesArr.find((item) => item[0] === date);
    return entry ? entry[1] : 0;
  };

  return (
    <>
      <div className={table.section}>
        <div className={table.container}>
          <div className={table.months}>
            {months.map((item) => (
              <div className={table.month}>{item}</div>
            ))}
          </div>
          <div className={table.box}>{generateCalendar()}</div>
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
