import { DataTable } from '@/components/DataTable'
import AddMaterial from './AddMaterial'
import { TitleText } from '@/components/Typo'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import MapComponent from '@/components/Map'

const Materials = () => {
  const [isMapView, setIsMapView]=  useState(false)
  const pageData = [
    {
      material: "Cement",
      weight: 50,
    },
    {
      material: "Sand",
      weight: 30,
    },
    {
      material: "Gravel",
      weight: 20,
    },
    {
      material: "Steel",
      weight: 100,
    },
    {
      material: "Bricks",
      weight: 10,
    }
  ]

  const dataColumn = [
      {
        accessorKey: "Material",
        header: "Materias",
        cell: ({ row }:{row:any}) => <p>{row.original.material}</p>,
      },

      {
        accessorKey: "price",
        header: "Price Per KG",
        cell: ({ row }:{row:any}) => <p>{row.original.weight}</p>,
      },
      {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }:{row:any}) => (
          <AddMaterial
            data={row.original}
            type='edit'
          />
        ),
      },
    ]

  return (
    <div className='flex justify-start w-full flex-col gap-6'>
      <div className='flex justify-between items-center w-full'>
        <TitleText text="Materials" />
        <Button onClick={() => setIsMapView(!isMapView)} variant="secondary">{isMapView ? 'Back to Table' : 'Open Map View'}</Button>
      </div>

      {isMapView ? <MapComponent/> : (
      
        <DataTable
          columns={dataColumn}
          data={pageData}
        />
      )}

      {!isMapView && (  
        <div>
          <AddMaterial
            type='create'
            />          
        </div>
      )}

    </div>
  )
}

export default Materials