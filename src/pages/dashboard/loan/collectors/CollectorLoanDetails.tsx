import { Grid2Container } from '@/components/Container'
import { SectionCards } from '@/components/StatCard'
import { Button } from '@/components/ui/button'
import { MoreVertical } from 'lucide-react';
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


const CollectorLoanDetails = () => {
   const navigate = useNavigate();
    const columns: ColumnDef<ApplicantDataProps>[] = [

    {
      accessorKey: "provider",
      header: 'Loan Provider',
      cell: ({ row }) => {
          const provider = row.original.provider
          return(
            <div className="flex items-center gap-2">
              <div>

              </div>
              <div>
                <p className='font-medium'>{provider.name}</p>
                <span className='text-[12px] text-gray-400'>{provider.address}</span>
              </div>
            </div>
          )
      }
        
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
      header: 'Payment Status',
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
      emptyState: <div>No jobs found.</div>
    },
    {
      title: "Pending",
      columns,
      data: [],
      emptyState: <div>No archived jobs found.</div>
    },
    {
      title: "Rejected",
      columns,
      data: [],
      emptyState: <div>No archived jobs found.</div>
    },
  ];


  return (
    <div className='flex gap-4'>
            <Card className='w-1/3'>
                <CardContent className='space-y-6'>



                    <TitleText text='John Doe' style='text-center'/>

                    <div className='grid grid-cols-2 gap-2'>
                        <span className='font-medium text-sm'>Email:</span>
                        <span className='text-gray-400 text-sm'>johndoe@gmail.com</span>
                        <span className='font-medium text-sm'>Address:</span>
                        <span className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                        <span className='font-medium text-sm'>Phone:</span>
                        <span className='text-gray-400 text-sm'>08012345678</span>
                    </div>

                </CardContent>
            </Card>
        <Card className='space-y-8 w-2/3'>
            <CardContent>
                <div className='space-y-4'>
                    <Grid2Container>
                    <SectionCards
                        title="Wallet Balance"
                        amount="120"
                        trendingValue="+12.5%"
                        hasDetails={false}
                    />
                    <SectionCards
                    type='active'
                        title="Current Loan"
                        amount="100"
                        trendingValue="+12.5%"
                        hasDetails={false}
                    />
                    <SectionCards
                    type='pending'
                        title="Amount Repaid"
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
                    </Grid2Container>
                </div>


                <div className='space-y-3'>
                    <TitleText text='Loan History'/>
                    <TabDataTable TabData={tabledata} />
                </div>

            </CardContent>
        </Card>        
    </div>

  )
}

export default CollectorLoanDetails

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