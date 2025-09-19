"use client"
import { CartesianGrid, Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { graphData, graphPoint } from "../ChatArea/ChatArea";

export default function BarGraph({val}:{
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
    }}
    const maindata:graphPoint[] = val?.graph_data || [];
    return <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={maindata}>
            <CartesianGrid vertical={false} />
            <YAxis></YAxis>
            <XAxis
              dataKey="x"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="y1" fill="var(--chart-1)" radius={2} />
          </BarChart>
        </ChartContainer>
}