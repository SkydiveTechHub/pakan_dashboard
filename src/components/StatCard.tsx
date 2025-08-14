import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards({
  title,
  amount,
  type='default',
  hasTrending = true,
  trendingValue = "+12.5%",
  trendingIcon = <IconTrendingUp />,
  hasDetails = true,
  detailsText = "Visitors for the last 6 months",
  detailsIcon = <IconTrendingDown />,
  trendingText = "Trending up this month",
  style
}: {  title?: string;
  type?:'default'|'active'|'pending'|'failed'
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
      <Card className={`@container/card ${style} ${type==='active'?"bg-[#EAFFEA]": type==='pending'?"bg-[#FFF9E1] border-[#FFE5A3]":type==='failed'?"bg-[white] border-[#DA4F14]":''}`}>
        <CardHeader>
          <span className={`${type==='failed'?'text-[#DA4F14]': type==='active'?'text-[#005700]':''} text-sm font-medium`}>{title}</span>
          <CardTitle  className={`${type==='failed'?'text-[#DA4F14]': type==='active'?'text-[#005700]':''} text-xl font-semibold `}>
            {amount}
          </CardTitle>
          {
            hasTrending && (
              <CardAction>
                <Badge variant="outline" className={`${type==='failed'?'text-[#DA4F14]': type==='active'?'text-[#005700]':''}`}>
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
            <div className={`${type==='failed'?'text-[#DA4F14]': type==='active'?'text-[#005700]':''} text-muted-foreground`}>
              {detailsText} 
            </div>
          </CardFooter>            
          )
        }

      </Card>
  )
}
