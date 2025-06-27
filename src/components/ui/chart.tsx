import * as React from "react"
import * as Recharts from "recharts"
import { cn } from "@/lib/utils"

export type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
    color?: string
    theme?: Partial<Record<"light" | "dark", string>>
  }
}

const ChartContext = React.createContext<{ config: ChartConfig } | null>(null)

export function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }
  return context
}

type ChartContainerProps = React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ReactElement
}

function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  nameKey,
  labelFormatter,
}: {
  active?: boolean
  payload?: any[]
  label?: string
  className?: string
  nameKey?: string
  labelFormatter?: (value: string) => React.ReactNode
}) {
  if (!active || !payload || payload.length === 0) return null

  return (
    <div
      className={cn(
        "rounded-md border bg-background p-3 shadow-md",
        className
      )}
    >
      {label && (
        <div className="mb-2 text-sm font-semibold">
          {labelFormatter ? labelFormatter(label) : label}
        </div>
      )}
      <ul className="space-y-1 text-xs">
        {payload.map((entry, index) => (
          <li key={index} className="flex items-center justify-between">
            <span className="text-muted-foreground">
              {entry?.payload?.[nameKey || entry.name] || entry.name}
            </span>
            <span className="font-medium">{entry.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}


export function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: ChartContainerProps) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn(
          "aspect-video flex justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <Recharts.ResponsiveContainer>
          {children}
        </Recharts.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const THEMES = {
    light: "",
    dark: ".dark",
  } as const

  const styles = Object.entries(THEMES)
    .map(([themeKey, prefix]) => {
      const theme = themeKey as keyof typeof THEMES

      const cssVars = Object.entries(config)
        .map(([key, value]) => {
          const color = value.theme?.[theme] || value.color
          return color ? `  --color-${key}: ${color};` : null
        })
        .filter(Boolean)
        .join("\n")

      return cssVars ? `${prefix} [data-chart="${id}"] {\n${cssVars}\n}` : ""
    })
    .filter(Boolean)
    .join("\n")

  return styles ? <style dangerouslySetInnerHTML={{ __html: styles }} /> : null
}

export const ChartTooltip = Recharts.Tooltip
export const ChartLegend = Recharts.Legend
export { ChartStyle, ChartTooltipContent }


