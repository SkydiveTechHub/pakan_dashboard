import { DataTable } from '@/components/DataTable'
import AddZone from './AddZone'
import { TitleText } from '@/components/Typo'

const Zones = () => {
  const pageData = [
    {
      name: "Zone A",
      location: "Geo-Boundary A",
    },
    {
        name: "Zone B",
        location: "Geo-Boundary B",
        },
        {
        name: "Zone C",
        location: "Geo-Boundary C",
        },
        {
        name: "Zone D",
        location: "Geo-Boundary D",
        },
        {
        name: "Zone E",
        location: "Geo-Boundary E",
        }
  ]

  const dataColumn = [
      {
        accessorKey: "name",
        header: "Zone Name",
        cell: ({ row }:{row:any}) => <p>{row.original.name}</p>,
      },

      {
        accessorKey: "location",
        header: "Geo-Boundaries",
        cell: ({ row }:{row:any}) => <p>View Map  {row.original.location}</p>,
      },
      {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }:{row:any}) => (
          <AddZone
            data={row.original}
            type='edit'
          />
        ),
      },
    ]

  return (
    <div className='flex w-full flex-col gap-6'>
        <TitleText text="Pickup Zones" />
        <DataTable
          title='Materials'
          columns={dataColumn}
          data={pageData}
        />
        <AddZone
          type='create'
          />
    </div>
  )
}

export default Zones