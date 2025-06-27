"use client"

import { TrendingUp } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis } from "recharts"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import type { ChartConfig } from "@/components/ui/chart"
import {
  ChartContainer,
  ChartTooltip,
  // ChartLegend,
} from "@/components/ui/chart"


export const description = "A mixed bar chart"

const chartData = [
  { browser: "Household", visitors: 275, fill: "var(--color-household)" },
  { browser: "Businesses", visitors: 200, fill: "var(--color-businesses)" },
]

const chartConfig = {
  household: { label: "Household", color: "hsl(210, 100%, 70%)" },
  businesses: { label: "Businesses", color: "hsl(160, 100%, 70%)" },
} satisfies ChartConfig

export function ChartBarMixed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Mixed</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              // tickFormatter={(key) =>
              //   chartConfig[key.toLowerCase() as keyof typeof chartConfig]?.label || key
              // }
            />
            <XAxis type="number" hide />
            <ChartTooltip
              cursor={false}
              // content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium">
          Trending up by 5.2% this month
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground">
          Showing total schedules for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
