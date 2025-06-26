"use client "

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { DataTable } from "./DataTable"


export function TabTable({data}: { data: { index_key: string; title: string; columns: any[]; data: any[] }[] }) {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue={data[0].index_key} className="w-full">
        <TabsList>
          {data.map((item) => (
            <TabsTrigger key={item.index_key} value={item.index_key}>
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {data.map((item) => (
          <TabsContent key={item.index_key} value={item.index_key}>
            <DataTable
              title={item.title}
              columns={item.columns}
              data={item.data}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}




