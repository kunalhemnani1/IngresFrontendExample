"use client"

// import { TrendingUp } from "lucide-react"
// import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"
import { graphData } from "@/lib/types/User"
import LineGraph from "./linegraph"
import BarGraph from "./bargraph"

export const description = "A linear line chart"



export function ChartLineLinear({chartdata}:{chartdata:graphData[]}) {
  // console.log(chartdata)
  return (<>
    {
      chartdata.map((val,index)=>{
        // const maindata = val?.graph_data || []
        return <Card key={index}>
      <CardHeader>
        <CardTitle> {val.graph_title || "Ground water data"} </CardTitle>
        <CardDescription> </CardDescription>
      </CardHeader>
      <CardContent className="pl-1">
          
          {val.graph_type === "bar" ? <BarGraph val={val}></BarGraph>:<LineGraph val={val}></LineGraph>  }
          
      </CardContent>
          {/* <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground leading-none">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter> */}
        </Card>
      // return(
      //   <div className="dark:bg-neutral-900 rounded-lg py-4 box-border px-6">
      //      {val.graph_type === "bar" ? <BarGraph val={val}></BarGraph>:<LineGraph val={val}></LineGraph>  }
      //   </div>
      // )
      })
    }
    
</>
  )
}
