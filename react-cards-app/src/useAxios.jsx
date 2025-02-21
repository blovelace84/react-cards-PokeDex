import { useState } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState([]);

  const fetchData = async (endpoint = "") => {
    try{
      const response = await axios.get(`${url}${endpoint}`);
      setData(prevData => [...prevData, response.data]);
    }catch(error){
      console.error("Error fetching data:", error);
    }
  };
  const clearData = () => {
    setData([]);
  }

  return [data, fetchData, clearData];
}

export default useAxios;