import { useState } from "react";
import axios from "axios";

function useAxios(baseUrl) {
  const [data, setData] = useState([]); //  Initialize with an empty array

  const addData = async (urlSuffix = "") => {
    try {
      const response = await axios.get(`${baseUrl}${urlSuffix}`);
      console.log("Fetched Data:", response.data); // ✅ Debugging log
      setData((prevData) => [...prevData, response.data]); //  Add new data to array
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const clearData = () => {
    setData([]);
  }

  return [data, addData, clearData];
}

export default useAxios;
