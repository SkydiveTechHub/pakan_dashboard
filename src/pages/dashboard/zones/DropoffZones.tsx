import { DataTable } from '@/components/DataTable'
import AddZone from './AddZone'
import { TitleText } from '@/components/Typo'
import MapComponent from '@/components/Map'

const DropoffZones = () => {
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

      // {
      //   accessorKey: "location",
      //   header: "Geo-Boundaries",
      //   cell: ({ row }:{row:any}) => <p>View Map  {row.original.location}</p>,
      // },
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
    <div className='w-full space-y-6'>
        <div className='flex justify-between items-center w-full'>
          <TitleText text="Dropoff Zones" />
          <AddZone
            type='create'
          />  
        </div>

        <div className='flex gap-3'>
          <div className='w-1/3'>
            <DataTable
              title='Materials'
              columns={dataColumn}
              data={pageData}
            />
          </div>
          <div className='w-2/3'>
            <MapComponent/>
          </div>
        </div>

          
    </div>
  )
}

export default DropoffZones