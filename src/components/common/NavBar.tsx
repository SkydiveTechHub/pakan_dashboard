
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface NavbarProps {
  toggleSidebar: () => void;
}


const Header: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [state, setState] = useState({ user: {
    name: 'User',
    email: 'user@abc.com'
  } });
  const signOut = () => {}


  // Track scroll position to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  // Generate navigation items based on authentication state
  const getNavItems = () => {
    const baseItems = [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/contact', label: 'Contact Us' }, // Added Contact Us link
    ];
    
    const authItems = [
      { path: '/', label: 'Dashboard' },
      { path: '/user', label: 'User' },
      { path: '/schedules', label: 'Schedules' },
      { path: '/materials', label: 'Materials' },
      { path: '/transactions', label: 'Payout' },
    ];
    
    return isAuthenticated ? authItems : baseItems;
  };

  const navItems = getNavItems();
  const isActive = (path: string) => location.pathname === path;

    return (
    <div className="flex fixed w-full lg:w-[86%] 2xl:w-[90%] items-center justify-between bg-base-100 shadow-sm px-6 py-2 bg-[#FAFAF9] border-[#D6D3D1] border-b">
      <div className='flex justify-between w-full items-center space-x-1'>
        <div className="flex-none ">
            <button onClick={toggleSidebar} className="btn btn-square btn-ghost lg:hidden border border-[#D6D3D1] rounded-full p-[6px]">
              <img
                className=""
                src="/icons/logo.png"
                alt="Menu"
                width={24}
                height={24}
              />
            </button>
        </div>
        <div></div>
        <div className="primary-button-background rounded-full p-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>User Profile</DropdownMenuLabel>
                    {/* <DropdownMenuItem
                      onClick={() => navigator.clipboard.writeText(payment.id)}
                    >
                      Copy payment ID
                    </DropdownMenuItem> */}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Reset Password</DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button variant="ghost" className="w-full text-red-500" onClick={handleSignOut}>
                        <LogOut color='red' className="mr-2 h-4 w-4" />
                        Sign Out    
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

        </div>        
      </div>
    </div>
  ) 
} 

export default Header;