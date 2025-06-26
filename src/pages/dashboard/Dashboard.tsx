import { Grid2Container, Grid4Container } from '@/components/Container'
import { DataTable } from '@/components/DataTable'
import { SectionCards } from '@/components/StatCard'
import { TabTable } from '@/components/TabTable'
import { ChartLineInteractive } from './charts/LineChart'
import { ChartBarMixed } from './charts/ScheduleChart'

const Dashboard = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <Grid4Container>
        <SectionCards
          title="Total Wallet Balance"
          amount="$12,345"
          trendingValue="+12.5%"
          hasDetails={false}
        />
        <SectionCards
          title="Total Paid Out"
          amount="$12,345"
          trendingValue="+12.5%"
          hasDetails={false}
        />
        <SectionCards
          title="Total Material Received"
          amount="12"
          trendingValue="+12.5%"
          hasDetails={false}
        />
        <SectionCards
          title="Total Pending Transactions"
          amount="34"
          trendingValue="+12.5%"
          hasDetails={false}
        />
      </Grid4Container>
      <Grid2Container>
        <ChartBarMixed />
        <ChartLineInteractive />
      </Grid2Container>

      <TabTable data={walletData}/>

      {/* <DataTable/> */}
    </div>
  )
}

export default Dashboard



const walletData = [
  {
    index_key: "household",
    title: "Household ",
    data: [], // bodyData,
    totalPages: 1, // paginationData?.totalPages,
    paginationData: {}, // paginationData,
    filterHandler: () => {}, // onFilter,
    searchHandler: () => {}, // onSearch,
    fetch: () => {}, // fetchpending,
    columns: [
      {
        accessorKey: "name",
        header: "User's Name",
        cell: ({ row }:{row:any}) => <p>{row.original.organization?.location}</p>,
      },
      {
        accessorKey: "wasteCategory",
        header: "Waste Category",
        cell: ({ row }:{row:any}) => <p>{row.original.organization?.location}</p>,
      },
      {
        accessorKey: "totalWeight",
        header: "Total Weight",
        cell: ({ row }:{row:any}) => <p>{row.original.organization?.location}</p>,
      },
      {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }:{row:any}) => <p>{row.original.organization?.location}</p>,
      },
    //   {
    //     accessorKey: "transactions",
    //     header: "Waste Category",
    //     cell: ({ row }:{row:any}) => (
    //       <span>
    //         {(row.original.transactions?.flatMap((item) => item.categories.map((category) => category.name))?.slice(0, 3) || []).map((waste) => (
    //           <Tag key={waste}>
    //             <Popover content={waste}>{truncate(waste, 10)}</Popover>
    //           </Tag>
    //         ))}
    //       </span>
    //     ),
    //   },
      {
        accessorKey: "date",
        header: "Date Transacted",
        cell: ({ row }:{row:any}) => <p>{row.original.phone}</p>,
      },
    ],
  },
  {
    index_key: "budinesses",
    title: "Businesses",
    data: [],
    totalPages: 1,
    paginationData: {},
    filterHandler: () => {},
    searchHandler: () => {},
    fetch: () => {},
    columns: [
      {
        accessorKey: "name",
        header: "User's Name",
        cell: ({ row }:{row:any}) => <p>{row.original.organization?.location}</p>,
      },
      {
        accessorKey: "wasteCategory",
        header: "Waste Category",
        cell: ({ row }:{row:any}) => <p>{row.original.organization?.location}</p>,
      },
      {
        accessorKey: "totalWeight",
        header: "Total Weight",
        cell: ({ row }:{row:any}) => <p>{row.original.organization?.location}</p>,
      },
      {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }:{row:any}) => <p>{row.original.organization?.location}</p>,
      },
    //   {
    //     accessorKey: "transactions",
    //     header: "Waste Category",
    //     cell: ({ row }:{row:any}) => (
    //       <span>
    //         {(row.original.transactions?.flatMap((item) => item.categories.map((category) => category.name))?.slice(0, 3) || []).map((waste) => (
    //           <Tag key={waste}>
    //             <Popover content={waste}>{truncate(waste, 10)}</Popover>
    //           </Tag>
    //         ))}
    //       </span>
    //     ),
    //   },
      {
        accessorKey: "date",
        header: "Date Transacted",
        cell: ({ row }:{row:any}) => <p>{row.original.phone}</p>,
      },
    ],
  },

]