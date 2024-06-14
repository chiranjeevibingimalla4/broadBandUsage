
import React from 'react';
import Usage from "./components/Usage";

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
  return (
    <div className="App">
      <Usage mode={mode} width={"100%"} height={500} gradients={gradients} margin={margin} barCategoryGap={barCategoryGap} />
    </div>
  );
}

export default App;