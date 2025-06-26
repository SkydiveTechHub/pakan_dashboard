import { DataTable } from '@/components/DataTable'
import { TitleText } from '@/components/Typo'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from 'lucide-react'
import React, { useState } from 'react'

const UserPage = () => {
  const [pageData, setPageData] =  useState([{
    id: "1",
    name: "John Doe",
    type: "Admin",
    address: "123 Main St, City, Country",
    wallet_balance: 1000,
  },
  {
    id: "2",
    name: "Jane Smith",
    type: "User",
    address: "456 Elm St, City, Country",
    wallet_balance: 500,
  },
  {
    id: "3",
    name: "Alice Johnson",
    type: "User",
    address: "789 Oak St, City, Country",
    wallet_balance: 750,
  },
  {
    id: "4",
    name: "Bob Brown",
    type: "Admin",
    address: "321 Pine St, City, Country",
    wallet_balance: 1200,
  },
  {
    id: "5",
    name: "Charlie White",
    type: "User",
    address: "654 Maple St, City, Country",
    wallet_balance: 300,
  }])

    const dataColumn = [
        {
          accessorKey: "name",
          header: "Name",
          cell: ({ row }:{row:any}) => <p>{row.original.name}</p>,
        },
        {
          accessorKey: "type",
          header: "Type",
          cell: ({ row }:{row:any}) => <p>{row.original.type}</p>,
        },
        {
          accessorKey: "address",
          header: "Address",
          cell: ({ row }:{row:any}) => <p>{row.original.address}</p>,
        },
  
        {
          accessorKey: "wallet_balance",
          header: "Wallet Balance",
          cell: ({ row }:{row:any}) => <p>{row.original.wallet_balance}</p>,
        },
        {
          accessorKey: "action",
          header: "Action",
          cell: ({ row }:{row:any}) => {
            
              const payment = row.original
              return (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    {/* <DropdownMenuItem
                      onClick={() => navigator.clipboard.writeText(payment.id)}
                    >
                      Copy payment ID
                    </DropdownMenuItem> */}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View customer</DropdownMenuItem>
                    <DropdownMenuItem>View payment details</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            },
          }
      ]
  
  return (
    <div>
      <TitleText text='Users' style='text-[28px]'/>
        <DataTable
          title='Users'
          columns={dataColumn}
          data={pageData}
        />
    </div>
  )
}

export default UserPage