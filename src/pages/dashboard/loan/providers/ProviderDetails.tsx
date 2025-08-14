import { Grid2Container, Grid3Container, Grid4Container } from '@/components/Container'
import { SectionCards } from '@/components/StatCard'
import { Button } from '@/components/ui/button'
import {  MoreVertical, PlusCircle, Pencil } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import StatusPill from '@/components/StatusPill';
import { formatCustomDate } from '@/lib/helpers';
import type { ColumnDef } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';
import TabDataTable from '@/components/TabTable';
import { TitleText } from '@/components/Typo';
import { Card, CardContent } from '@/components/ui/card';

interface ApplicantDataProps {
  id: string;
  name: string;
  amount: string;
  provider: {
    icon:string,
    name:string,
    address:string
  };
  amount_paid:string,
  application_date: string;
  next_repayment_date:string
  status: string;
}


const ProviderDetails = () => {
   const navigate = useNavigate();
    const columns: ColumnDef<ApplicantDataProps>[] = [
    {
      accessorKey: "name",
      header: "Applicant Name",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "amount",
      header: 'Loan Amount',
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("amount")}</div>
      ),
    },
    {
      accessorKey: "amount_paid",
      header: 'Amount Paid (N)',
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("amount_paid")}</div>
      ),
    },
    {
      accessorKey: "status",
      header: 'Status',
      cell: ({ row }) => {
        const row_status = row.getValue('status');
        return (
          <StatusPill status={row_status as string} pillText={row_status as string}/>
        );
      },
    },
    {
      accessorKey: "application_date",
      header: 'Application Date',
      cell: ({ row }) => (
        <div className="text-sm">
          {formatCustomDate(row.getValue("date"))}
        </div>
      ),
    },
    {
      accessorKey: "next_repayment_date",
      header: 'Next Repayment Date',
      cell: ({ row }) => (
        <div className="text-sm">
          {formatCustomDate(row.getValue("date"))}
        </div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const baseUrl = '/loan/collector';
        const collector = row.original;

        return (
          <div className='flex items-center gap-3'>
            {/* <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Share</span>
              <Share2Icon />
            </Button> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={() => navigate(`${baseUrl}/${collector.id}`)} 
                  className='text-[#71717A] font-semibold'>
                  View
                </DropdownMenuItem>
                {/* <DropdownMenuItem 
                  onClick={() => navigate(`${baseUrl}/${collector.id}`)} 
                  className='text-[#71717A] font-semibold'>
                  Edit
                </DropdownMenuItem> */}

              </DropdownMenuContent>
            </DropdownMenu>            
          </div>
        )
      },
    },
  ];
  const tabledata = [
    {
      title: "Approved",
      columns,
      data: all_data,
      emptyState: <div>No Loans found.</div>
    },
    {
      title: "Pending",
      columns,
      data: [],
      emptyState: <div>No pending Loans found.</div>
    },
    {
      title: "Rejected",
      columns,
      data: [],
      emptyState: <div>No rejected Loans found.</div>
    },
  ];

  return (
    <div className='space-y-6'>
        <div>
            <div className='flex justify-between items-center p-3 rounded-md shadow-md bg-white'>
                <TitleText text='Shark Loan'/>
                <Button variant={'outline'}>Edit Provider <Pencil/></Button>
            </div>
        </div>
      <div className='space-y-3'>
        <Grid3Container>
          {/* <SectionCards
            title="Total Wallet Balance"
            amount="120"
            trendingValue="+12.5%"
            hasDetails={false}
          /> */}
          <SectionCards
          type='active'
            title="Loan Disbursed"
            amount="100"
            trendingValue="+12.5%"
            hasDetails={false}
          />
          <SectionCards
          type='pending'
            title="Loan Recovered"
            amount="12"
            trendingValue="+12.5%"
            hasDetails={false}
          />
          <SectionCards
          type='failed'
            title="Outstanding Amount"
            amount="8"
            trendingValue="+12.5%"
            hasDetails={false}
          />
        </Grid3Container>
      </div>

      <Grid2Container>
        <Card>
            <CardContent>
                <div className='flex justify-between items-center border-b border-gray-300 pb-4'>
                    <TitleText style='text-sm' text='Loan Products'/>
                    <Button size={'sm'}><PlusCircle/> Add Product</Button>
                </div>

                <div className='space-y-3 mt-2'>
                    {
                        [1,2,3].map((i, id)=>(
                            <div key={id}>
                                    <div className='flex items-center justify-between border border-gray-100 shadow-md rounded-2xl py-1 px-2 '>
                                        <div>
                                            <p className='font-medium text-gray-500 text-sm'>Staff Loan {i}</p>
                                        </div>
                                        <div>
                                            <p className='font-semibold text-sm'>Up to #300,000</p>
                                            <span className='text-gray-500 text-xs'>14% per annum</span>
                                        </div>
                                        <Button size={'sm'} variant={'secondary'} className=''>View</Button>
                                    </div>
                            </div>
                        ))
                    }
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <TitleText text='User Interaction'/>

            </CardContent>
        </Card>
      </Grid2Container>

      <div className='space-y-3'>
          <TitleText text='Recent Loan Activities'/>
          <TabDataTable TabData={tabledata} />
      </div>


    </div>
  )
}

export default ProviderDetails




const all_data:ApplicantDataProps[] =[
  {
    id:'1',
    name: 'John Doe',
    amount:'1000',
    provider:{
      name:'Shark Bank',
      icon:'',
      address:'Lekki Phase 1, Lagos.'
    },
    amount_paid:'0',
    status:'active',
    application_date:'4/10/2022',
    next_repayment_date:'4/10/2025'
  },
  {
    id:'4',
    name: 'John Doe',
    amount:'1000',
    provider:{
      name:'Shark Bank',
      icon:'',
      address:'Lekki Phase 1, Lagos.'
    },
    amount_paid:'0',
    status:'active',
    application_date:'4/10/2022',
    next_repayment_date:'4/10/2025'
  },
  {
    id:'2',
    name: 'John Doe',
    amount:'1000',
    provider:{
      name:'Shark Bank',
      icon:'',
      address:'Lekki Phase 1, Lagos.'
    },
    amount_paid:'0',
    status:'pending',
    application_date:'4/10/2022',
    next_repayment_date:'4/10/2025'
  },
  {
    id:'3',
    name: 'John Doe',
    amount:'1000',
    provider:{
      name:'Shark Bank',
      icon:'',
      address:'Lekki Phase 1, Lagos.'
    },
    amount_paid:'0',
    status:'failed',
    application_date:'4/10/2022',
    next_repayment_date:'4/10/2025'
  }
]