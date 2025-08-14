import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import {  MoreVertical, PlusCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StatusPill from "@/components/StatusPill";
import { formatCustomDate } from "@/lib/helpers";
import type { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

interface ProviderDataProps {
  id: string;
  name: string;
  hasApi: string;
  userCount: number;
  amountDisbursed: number;
  date: string;
  status: string;
}

const LoanProviders = () => {
  const navigate = useNavigate();

  const columns: ColumnDef<ProviderDataProps>[] = [
    {
      accessorKey: "name",
      header: "Provider Name",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "hasApi",
      header: "Has API",
      cell: ({ row }) => {
        const row_status = row.getValue("hasApi") as string;
        return (
          <StatusPill
            status={row_status}
            pillText={row_status}
          />
        );
      },
    },
    {
      accessorKey: "userCount",
      header: "User Count",
      cell: ({ row }) => <div>{row.getValue("userCount")}</div>,
    },
    {
      accessorKey: "amountDisbursed",
      header: "Amount Disbursed",
      cell: ({ row }) => <div>{row.getValue("amountDisbursed")}</div>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const row_status = row.getValue("status") as string;
        return (
          <StatusPill
            status={row_status}
            pillText={row_status}
          />
        );
      },
    },
    {
      accessorKey: "date",
      header: "Created At",
      cell: ({ row }) => (
        <div className="font-medium">
          {formatCustomDate(row.getValue("date"))}
        </div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const job = row.original;
        return (
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() =>
                    navigate(`/loan/provider/${job.id}`)
                  }
                  className="text-[#71717A] font-semibold"
                >
                  View
                </DropdownMenuItem>
                {/* <DropdownMenuItem
                  onClick={() =>
                    navigate(`/dashboard/admin-post/job/${job.id}`)
                  }
                  className="text-[#71717A] font-semibold"
                >
                  Edit
                </DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
  ];

  const providers: ProviderDataProps[] = [
    {
      id:'1',
      name:'Shark Loan',
      hasApi:'true',
      userCount:10,
      amountDisbursed:10000,
      date:'',
      status:'active'

    }
  ]; 

  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <Button>
          <PlusCircle/>
          Create Provider
        </Button>
      </div>

      <div className="space-y-3">
        <DataTable
          columns={columns}
          data={providers}
          emptyState={<div>No providers found.</div>}
        />
      </div>
    </div>
  );
};

export default LoanProviders;
