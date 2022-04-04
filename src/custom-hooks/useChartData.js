import { useEffect, useState } from "react";


const useChartData = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(()=>{
      fetch('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
      .then(res => res.json())
      .then(data => setChartData(data))
  },[])

  return [chartData, setChartData];

};

export default useChartData;