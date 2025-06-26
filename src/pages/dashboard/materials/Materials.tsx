import { DataTable } from '@/components/DataTable'
import React, { useState } from 'react'
import AddMaterial from './AddMaterial'
import { TitleText } from '@/components/Typo'

const Materials = () => {
  const [pageData, setPageData] =  useState([
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
  ])

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
      <div>
        <TitleText text="Materials" />
      </div>
      
        <DataTable
          title='Materials'
          columns={dataColumn}
          data={pageData}
        />
        <div>
          <AddMaterial
            type='create'
            />          
        </div>

    </div>
  )
}

export default Materials