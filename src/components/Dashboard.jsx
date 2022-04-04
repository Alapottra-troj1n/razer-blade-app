import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useChartData from "../custom-hooks/useChartData";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const data = useChartData();
  const chartData = data[0];
  console.log(chartData);

  return (
    <div>
      <h2 className="dashboard-title">DASHBOARD</h2>

      <div className="container">
        <div className="chartbox">
          <div className="chart-1">
            <h2 className="chart1-title colored">Investment</h2>
            <LineChart width={500} height={300} data={chartData}>
              <Line type="monotone" dataKey="investment" stroke="#44D62C" />
              <CartesianGrid stroke="#f7e7e6" />
              <XAxis dataKey="month" />
              <YAxis stroke="#f7e7e6" width={100} />
              <Tooltip dataKey="investment"></Tooltip>
            </LineChart>
          </div>

          <div className="chart-2">
            <h2 className='colored'>Total Sales</h2>
            
              <AreaChart
                width={500}
                height={300}
                data={chartData}
              
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="sell"
                  stroke="#44D62C"
                  fill="#b8f7ad"
                />
              </AreaChart>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
