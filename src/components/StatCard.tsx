import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards({
  title,
  amount,
  hasTrending = true,
  trendingValue = "+12.5%",
  trendingIcon = <IconTrendingUp />,
  hasDetails = true,
  detailsText = "Visitors for the last 6 months",
  detailsIcon = <IconTrendingDown />,
  trendingText = "Trending up this month",
  style
}: {  title?: string;
  amount?: string;  
  hasTrending?: boolean;
  trendingValue?: string;
  trendingIcon?: React.ReactNode;
  hasDetails?: boolean;
  detailsText?: string;
  detailsIcon?: React.ReactNode;
  trendingText?: string;
  className?: string;
  style?: string | React.CSSProperties;

}) {
  return (
      <Card className={`@container/card ${style}`}>
        <CardHeader>
          <CardDescription>{title}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {amount}
          </CardTitle>
          {
            hasTrending && (
              <CardAction>
                <Badge variant="outline">
                  {trendingIcon || <IconTrendingUp />}
                  {trendingValue }
                </Badge>
             </CardAction>
            )
          }

        </CardHeader>
        {
          hasDetails && (
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              {trendingText} { detailsIcon ||<IconTrendingUp className="size-4" />}
            </div>
            <div className="text-muted-foreground">
              {detailsText} 
            </div>
          </CardFooter>            
          )
        }

      </Card>
  )
}
