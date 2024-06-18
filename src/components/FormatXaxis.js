import DATA from "./GraphData";

const FormatXaxis = ({x, y, payload, dy})=>{
    // const dateValue = new Date(payload.value);
    
    const item = DATA.find(d => d.id === payload.value );
    console.log(payload);
    // transform={`translate(${x},${y})`}
    return (
      <g >
        <text className="font-medium text-sm" x={x} y={y} dy={dy[0]} textAnchor="middle" fill="#000">
          {item ? `${item.DataUsed} GB` : ''}
        </text>
        <text className="text-sm font-normal" x={x} y={y} dy={dy[1]} textAnchor="middle" fill="#000">
          {item?`${item.month}`:""}
        </text>
        <text className="text-sm font-normal" x={x} y={y} dy={dy[2]} textAnchor="middle" fill="#000">
          {item?`${item.year}`:""}
        </text>
      </g>
    );
  }

  export default FormatXaxis;