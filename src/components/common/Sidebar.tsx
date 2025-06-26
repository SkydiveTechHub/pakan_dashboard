import { Link, useLocation, useParams } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}



const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {

const location = useLocation()
const pathname = location.pathname

const params = useParams()
  const currentLang = params?.locale as string;

const sidebarData = [
  {
    title:"Dashboard",
    link: "/",
  },
  // {
  //   title: "Wallet",
  //   link: "wallet",
  // },
  {
    title: "Transactions",
    link: "/transactions",
  },
  {
    title: "Materials",
    link: "/materials",
  },
  {
    title: "Location",
    link: "/zones",
  },
  {
    title: "Settings",
    link: "/settings",
  },
];
  return (
    <aside className={`
      fixed top-0 left-0 h-full w-48 bg-[#008300] text-white shadow-md 
      transform transition-transform duration-300 z-50
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
      lg:translate-x-0 md:fixed z-[99999]
    `}>
      <div className="p-4 font-bold text-lg flex items-center">
        <img 
          src="/images/logo.svg" 
          alt="Logo" 
          width={150} 
          height={150} 
          className="mr-2"
        />
      </div>

      <nav className="p-4 space-y-2">
        {sidebarData.map((item, index) => {
          // const fullPath = `/${currentLang}/${item.link}`;
          const isActive = pathname === item.link;

          return (
            <Link 
              key={index} 
              to={item.link}
              onClick={toggleSidebar}
              className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm 
                ${isActive ? "rounded-[2rem] text-[#008300] font-semibold bg-white" : "text-white"}`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>

      {/* Mobile close button */}
      <button 
        className="md:hidden absolute top-4 right-4 gradient-text" 
        onClick={toggleSidebar}
      >
        ✕
      </button>
    </aside>
  );
};

export default Sidebar;
