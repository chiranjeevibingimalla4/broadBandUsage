
import React from 'react';
import Usage from "./components/Usage";
import FormatXaxis from './components/FormatXaxis';
function App() {
  const margin = {top:5,right:0,bottom:30,left:5};
  const barCategoryGap= "20%";
  const mode="light"  // high contrast
  const gradients = [
        {
          offset:"0%",
          stopColor:"#FF00A5"
        },
        {
          offset:"103.13",
          stopColor:"#6E00FF"
        }
      ]
  const xaxisProps = {
    dataKey:"id",
    axisLine:false,
    tickLine:false,
    tick:< FormatXaxis dy={[10,30,50]} />
  }
  return (
    <div className="App">
      <Usage mode={mode} minWidth={700} width={"80%"} minHeight={500} height={"65%"} gradients={gradients} margin={margin} barCategoryGap={barCategoryGap} xaxisProps={xaxisProps} />
    </div>
  );
}

export default App;