import json from "./usageData";

const calculateGraphStartDate = (no_months)=>{
  const curr_date = new Date();
  console.log(`curr_date: ${curr_date}`);
  const curr_month = curr_date.getMonth();
  const initial_date =new Date( curr_date.setMonth((curr_month - (no_months-1)),1));
  console.log(`initial_date: ${initial_date}`);
  return initial_date
}
const GraphData = (initial_date,dataForNoOfMonths) => {
    const billingPeriods = json?.usageDetailItem?.billingPeriodUsage;
    const month_name = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let graphData = [];
    let arr = [];
    let curr_date = new Date(initial_date);
    console.log(curr_date);
    // console.log(curr_date.getMonth());

    for(let i=0;i<dataForNoOfMonths;i++){
      const curr_month = curr_date.getMonth();
      const curr_year = curr_date.getFullYear();
      arr[i]=
      {
        id:`${curr_month}${curr_year}`,
        month:month_name[curr_month],
        year:curr_year,
        DataUsed:0
      }
      curr_date.setMonth(curr_month+1,1);
    }
    console.log(arr);

    let ite = 0;
    billingPeriods.forEach((item,index) => {
      const date = new Date(item?.billingPeriod?.startDate);
      const month = date.getMonth();
      const year = date.getFullYear();
      if((!(year<initial_date.getFullYear()) && month >= initial_date.getMonth()) || (year>initial_date.getFullYear()))
        {
          graphData.push({
            id:`${month}${year}`,
            // startDate:date,
            month: month_name[month],
            year:year,
            DataUsed: item.productList?.productItem[0]?.accumulatedUsage || 0});
          if(arr[ite].month === month_name[month] && arr[ite].year === year){
            arr[ite].DataUsed = item.productList?.productItem[0]?.accumulatedUsage ;
          }
          else{
            ite++;
          }
          ite++;
        }
           
    });

    // let ite_loop = 0;
    // let ite_arr = 0;
    // while(ite_loop<billingPeriods.length){
    //   const date = new Date(billingPeriods[ite_loop]?.billingPeriod?.startDate);
    //   const month = date.getMonth();
    //   const year = date.getFullYear();
    //   if((!(year<initial_date.getFullYear()) && month >= initial_date.getMonth()) || (year>initial_date.getFullYear()))
    //     {
    //       graphData.push({
    //         id:`${month}${year}`,
    //         // startDate:date,
    //         month: month_name[month],
    //         year:year,
    //         DataUsed: billingPeriods[ite_loop].productList?.productItem[0]?.accumulatedUsage || 0
    //       });

    //       if(arr[ite_arr].month === month_name[month] && arr[ite_loop].year === year){
    //         arr[ite_arr].DataUsed = billingPeriods[ite_loop].productList?.productItem[0]?.accumulatedUsage ;
    //         ite_loop++;
    //       }
    //       // else{
    //       //   ite_arr++;
    //       // }
    //       ite_arr++;
    //     }
    // }
    console.log("arr after modification: ",arr);
    return graphData;
    
  }

  const dataForNoOfMonths = 12
  const graphStartDate = calculateGraphStartDate(dataForNoOfMonths)
  const DATA = GraphData(graphStartDate,dataForNoOfMonths);
  console.log(DATA);
  export default DATA;