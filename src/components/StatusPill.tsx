interface StatusPillProps {
  status: string;
  pillText: string;
}

export default function StatusPill({ status, pillText }: StatusPillProps) {
  let pillClass = "";

  switch (status.toLowerCase()) {
    case "active":
      pillClass = "bg-green-100 text-green-700 border border-green-300";
      break;
    case "pending":
      pillClass = "bg-yellow-100 text-yellow-700 border border-yellow-300";
      break;
    case "inactive":
      pillClass = "bg-gray-100 text-gray-700 border border-gray-300";
      break;
    case "suspended":
    case "rejected":
    case "failed":
      pillClass = "bg-red-100 text-red-700 border border-red-300";
      break;
    case "completed":
      pillClass = "bg-blue-100 text-blue-700 border border-blue-300";
      break;
    default:
      pillClass = "bg-gray-100 text-gray-500 border border-gray-300";
      pillText = status;
      break;
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-md capitalize ${pillClass}`}
    >
      {pillText}
    </span>
  );
}
