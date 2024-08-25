import { useEffect, useState } from "react";

export const useGetData = (path) => {
   const [data, setData] = useState([]);
   useEffect(() => {
      fetch(path)
         .then(res => res.json())
         .then(data => setData(data))
         .catch(err => console.error("Error fetching data:", err));
   }, []);
   return { data, setData }
};
