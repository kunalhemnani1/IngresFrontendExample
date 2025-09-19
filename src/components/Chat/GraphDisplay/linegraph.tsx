"use client"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { graphData, graphPoint } from "../ChatArea/ChatArea";

export default function LineGraph({val}:{
    val:graphData
}){
    const chartConfig = {
    y1: {
      label: "y1",
      color: "var(--chart-1)",
    },
    y2 : {
      label: "y2",
      color: "var(--chart-2)"
    }
  } satisfies ChartConfig
    const maindata:graphPoint[] = val?.graph_data || [];
    // console.log(maindata)
    return <ChartContainer config={chartConfig}>
    <LineChart
            accessibilityLayer
            data={maindata}
            // margin={{
            //   left: 12,
            //   right: 12,
            // }}
            >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="x"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              // tickFormatter={(value) => value.slice(0, 3)}
              />
            <YAxis></YAxis>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent  />}
              />
              {
                  maindata.map((val1,index1)=>{
                    // if(!val1[`y${index1+1}`])
                    //     break;
                    return <Line
                      dataKey={`y${index1+1}`}
                      key={index1}
                      type="linear"
                      stroke="var(--color-y1)"
                      strokeWidth={2}
                      dot={true}
                      />
                })
              }
          </LineChart>
    </ChartContainer>
}