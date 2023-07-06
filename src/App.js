import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./components/table/Table";

function App() {
  const [data, setData] = useState([]);
  // const [date, setDate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dpg.gg/test/calendar.json");
        console.log(response.data);
        let dateArr = Object.keys(response.data);
        let date = Object.entries(response.data);
        console.log(date);
        console.log(dateArr);
        setData(date);
        // setDate(dateArr);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Table data={data} />
    </>
  );
}

export default App;
