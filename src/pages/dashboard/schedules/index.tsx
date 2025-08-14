import TabDataTable from '@/components/TabTable'
import { TitleText } from '@/components/Typo'
import { Button } from '@/components/ui/button'

const SchedulePage = () => {
  const pageData =[
    {
        id: "1",
        name: "John Doe",
        type: "Pickup",
        material: "Cement",
        address: "123 Main St, City, Country",
        schedule_date: "2024-01-01",
        payment_method: "Credit Card",
        status: "Scheduled"
        },
        {
        id: "2",
        name: "Jane Smith",
        type: "Dropoff",
        material: "Sand",
        address: "456 Elm St, City, Country",
        schedule_date: "2024-01-02",
        payment_method: "Cash",
        status: "Completed"
        },
        {
        id: "3",
        name: "Alice Johnson",
        type: "Pickup",
        material: "Gravel",
        address: "789 Oak St, City, Country",
        schedule_date: "2024-01-03",
        payment_method: "Bank Transfer",
        status: "Pending"
    }
  ]

      const dataColumn = [
        {
          accessorKey: "name",
          header: "User Name",
          cell: ({ row }:{row:any}) => <p>{row.original.name}</p>,
        },
        {
          accessorKey: "type",
          header: "Schedule Type",
          cell: ({ row }:{row:any}) => <p>{row.original.type}</p>,
        },
        {
          accessorKey: "material",
          header: "Material",
          cell: ({ row }:{row:any}) => <p>{row.original.address}</p>,
        },
        {
          accessorKey: "address",
          header: "Loacation",
          cell: ({ row }:{row:any}) => <p>{row.original.address}</p>,
        },
  
        {
          accessorKey: "schedule_date",
          header: "Schedule Date",
          cell: ({ row }:{row:any}) => <p>{row.original.schedule_date}</p>,
        },
        {
          accessorKey: "payment_method",
          header: "Payment Method",
          cell: ({ row }:{row:any}) => <p>{row.original.payment_method}</p>,
        },
        {
          accessorKey: "status",
          header: "Status",
          cell: ({ row }:{row:any}) => {
            const status = row.original.status;
            return (
            <Button variant={
                status === 'Completed'? 'default': 
                status === 'Pending'? 'secondary': 
                'outline'}>
                    {row.original.status}
                </Button>
            )
          }
          ,
        },

      ]

  const scheduleData = [

      {
        index_key: "pickup",
        title: "Pickup",
        data: pageData, // bodyData,
        totalPages: 1, // paginationData?.totalPages,
        paginationData: {}, // paginationData,
        filterHandler: () => {}, // onFilter,
        searchHandler: () => {}, // onSearch,
        fetch: () => {}, // fetchpending,
        columns: dataColumn,
    },
      {
        index_key: "dropoff",
        title: "Dropoff",
        data: pageData, // bodyData,
        totalPages: 1, // paginationData?.totalPages,
        paginationData: {}, // paginationData,
        filterHandler: () => {}, // onFilter,
        searchHandler: () => {}, // onSearch,
        fetch: () => {}, // fetchpending,
        columns: dataColumn,
    },
  ]


  
  return (
    <div>
      <TitleText text='Schedules' style='text-[28px]'/>
        <TabDataTable TabData={scheduleData}/>
    </div>
  )
}

export default SchedulePage