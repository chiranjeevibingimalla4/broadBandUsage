import json from "./usageData";

const GraphData = () => {
    const billingPeriods = json?.usageDetailItem?.billingPeriodUsage;
    const month_name = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let graphData = [];
  
    billingPeriods.forEach((item,index) => {
      // const dateString = item?.billingPeriod?.startDate
      const date = new Date(item?.billingPeriod?.startDate);
      const month = date.getMonth();
      const year = date.getFullYear();
      graphData.push({
        id:`${month}${year}`,
        startDate:date,
        month: month_name[month],
        year:year,
        DataUsed: item.productList?.productItem[0]?.accumulatedUsage || 0});
    });
    return graphData;
  }

  const DATA = GraphData();
  export default DATA;