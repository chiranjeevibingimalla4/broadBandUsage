import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import DATA from "./GraphData";



console.log(DATA);

const Usage = ({mode,minWidth, width,minHeight, height,gradients,xaxisProps,...otherProps }) => {
  return (
    <ResponsiveContainer minWidth={minWidth} width={width}minHeight={minHeight} height={height}>
      <BarChart className="min-w-[800px]" data={DATA}  {...otherProps} >
        <XAxis {...xaxisProps} />
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
