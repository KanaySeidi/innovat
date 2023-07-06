import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dpg.gg/test/calendar.json");
        console.log(response.data);
        let date = Object.entries(response.data);
        console.log(date);
        console.log(typeof date);
        setData(date);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Вспомогательная функция для определения цвета блока на основе количества контрибуций
  const getColor = (contributions) => {
    if (contributions === 0) {
      return "#ebedf0";
    } else if (contributions <= 9) {
      return "#c6e48b";
    } else if (contributions <= 19) {
      return "#7bc96f";
    } else if (contributions <= 29) {
      return "#239a3b";
    } else {
      return "#196127";
    }
  };

  data.map(([key, value]) => (
    <div key={key} className="contribution-row">
      <div key={key} style={{ backgroundColor: getColor(value) }}></div>
    </div>
  ));

  return (
    <div className="contribution-graph">
      {data.map(([key, value]) => (
        <div key={key} className="contribution-row">
          <div
            key={key}
            className="contribution-block"
            style={{ backgroundColor: getColor(value) }}
          ></div>
        </div>
      ))}
      ;
    </div>
  );
}

export default App;
