// import { useInvestment } from "@/context/InvestmentContext";
// import { Navigate } from "react-router-dom";

// export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//   const { isAuthenticated } = useInvestment();
  
//   // Redirect to sign in if not authenticated
//   if (!isAuthenticated()) {
//     return <Navigate to="/signin" replace />;
//   }
  
//   return <>{children}</>;
// };