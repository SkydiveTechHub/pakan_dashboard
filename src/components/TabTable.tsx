import React, { useState } from 'react'
import { Button } from './ui/button'
import { DataTable, type DataTableProps } from './DataTable';

interface TabDataItemProps<TData, TValue> extends DataTableProps<TData, TValue> {
  title: string;
  showFilter?:boolean
  showSearch?:boolean
  showExport?:boolean
  onSearch?: (key:string)=>void
  onFilter?: (key:string)=>void
  onExport?: ()=>void
}

interface TabDataTableProps<TData, TValue> {
  TabData: TabDataItemProps<TData, TValue>[];
}

const TabDataTable = <TData, TValue>({ TabData }: TabDataTableProps<TData, TValue>) => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='space-y-6'>
        <div className='flex justify-between items-center'>
            <div>
                <div className="flex items-center p-1 gap-2 bg-[#F4F4F5] rounded-[4px]">
                    {TabData.map((tab, index) => (
                    <Button
                        className={`w-[100px] ${activeTab === index ? '!bg-white':'text-[#27272A]'} `}
                        key={index}
                        size={'sm'}
                        variant={activeTab === index ? 'secondary' : 'ghost'}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </Button>
                    ))}
                </div>                
            </div>

            <div>

            </div>
        </div>


      <DataTable
        columns={TabData[activeTab].columns}
        data={TabData[activeTab].data}
        emptyState={TabData[activeTab].emptyState}
      />
    </div>
  )
}

export default TabDataTable
