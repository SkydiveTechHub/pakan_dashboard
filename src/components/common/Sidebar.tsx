import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface SidebarItem {
  title: string;
  link?: string;
  children?: { title: string; url: string }[];
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const location = useLocation();
  const pathname = location.pathname;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const sidebarData: SidebarItem[] = [
    // { title: "Dashboard", link: "/" },
    // { title: "Transactions", link: "/transactions" },
    // { title: "Materials", link: "/materials" },
    // { title: "Location", link: "/zones" },
    // { title: "Settings", link: "/settings" },
    {
      title: "Loan",
      children: [
        { title: "Collector", url: "/loan/collectors" },
        { title: "Providers", url: "/loan/providers" },
      ],
    },
  ];

  const toggleDropdown = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      toggleSidebar();
    }
  };

  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen w-56 bg-[#008300] text-white shadow-md 
        transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static lg:shadow-none
      `}
      role="navigation"
      aria-label="Sidebar Menu"
    >
      {/* Logo */}
      <div className="p-4 font-bold text-lg flex items-center">
        <img
          src="/images/logo.svg"
          alt="Logo"
          width={150}
          height={150}
          className="mr-2"
        />
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-2">
        {sidebarData.map((item, index) =>
          item.children ? (
            <div key={index}>
              <button
                onClick={() => toggleDropdown(item.title)}
                className={`flex justify-between items-center w-full px-2 py-2 rounded-md text-sm font-medium 
                  ${openDropdown === item.title ? "bg-white text-[#008300]" : "text-white"}`}
              >
                {item.title}
                <span className="text-xs">{openDropdown === item.title ? "▲" : "▼"}</span>
              </button>
              {openDropdown === item.title && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.children.map((child, i) => {
                    const isActive = pathname === child.url;
                    return (
                      <Link
                        key={i}
                        to={child.url}
                        onClick={handleLinkClick}
                        className={`block px-2 py-1 rounded-md text-sm ${
                          isActive
                            ? "bg-white text-[#008300] font-semibold"
                            : "text-white hover:bg-white/10"
                        }`}
                      >
                        {child.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={index}
              to={item.link!}
              onClick={handleLinkClick}
              className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm 
                ${pathname === item.link
                  ? "bg-white text-[#008300] font-semibold"
                  : "text-white hover:bg-white/10"}`}
            >
              {item.title}
            </Link>
          )
        )}
      </nav>

      {/* Mobile close button */}
      <button
        className="lg:hidden absolute top-4 right-4 text-white text-lg"
        onClick={toggleSidebar}
        aria-label="Close Sidebar"
      >
        ✕
      </button>
    </aside>
  );
};

export default Sidebar;
