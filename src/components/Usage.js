
import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import json from "./usageData";

const createGraphData = () => {
  const billingPeriods = json?.usageDetailItem?.billingPeriodUsage;
  const month_name = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  let graphData = [];

  billingPeriods.forEach((item) => {
    const date = new Date(item?.billingPeriod?.startDate);
    const month = date.getMonth();
    graphData.push({ month: month_name[month], DataUsed: item.productList?.productItem[0]?.accumulatedUsage });
  });
  return graphData;
}

const DATA = createGraphData();
console.log(DATA);

const FormatXaxis = ({x, y, payload})=>{
    const item = DATA.find(d => d.month === payload.value );
    return (
      <g transform={`translate(${x},${y})`}>
        <text className="font-medium text-sm" x={0} y={10}  textAnchor="middle" fill="#000">
          {item ? `${item.DataUsed} GB` : ''}
        </text>
        <text className="text-sm font-normal" x={0} y={30}  textAnchor="middle" fill="#000">
          {payload.value}
        </text>
      </g>
    );
  }

const Usage = ({mode, width, height,gradients,axisLine,tickLine,tick,...otherProps }) => {
  return (
    <ResponsiveContainer className={"border"} width={width} height={height}>
      <BarChart data={DATA}  {...otherProps} >
        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={<FormatXaxis />} />
          {
            (mode==="high contrast")?(<Bar dataKey="DataUsed" fill="#FFF504" />):
            (<>
              <defs>
                <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
                  {gradients.map((gradient,index)=><stop offset={gradient.offset} stopColor={gradient.stopColor} key={index} ></stop>)}
                </linearGradient>
              </defs>
              <Bar dataKey="DataUsed" fill="url(#colorFill)" />
            </>)
          }
            
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Usage;
