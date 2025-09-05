import { ChartCandlestick, ChevronDown, Home, Menu, MessageCircleQuestionMark, MonitorCog,User,UserCog } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV_LINKS = [
  { path: "/admin/dashboard", label: "Dashboard",icon: Home, },
  {
    path: "/admin/membership-management/member-list",
    label: "Membership Management",
    match: "/admin/membership-management",
    icon: UserCog,
  },
  { path: "/admin/trade", label: "Trade", icon: ChartCandlestick },
  { path: "/admin/help-center", label: "Help Center",icon: MessageCircleQuestionMark },
  { path: "/admin/system-management", label: "System Management", icon: MonitorCog },
];

export default function AdminHeader() {
  const { pathname } = useLocation();

  const isActive = (link: (typeof NAV_LINKS)[number]) =>
    link.match ? pathname.includes(link.match) : pathname === link.path;

  return (
    <header className="bg-slate-800 text-white px-3 sm:px-6 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-2 sm:space-x-8">
          {/* Mobile Nav */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-slate-700"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {NAV_LINKS.map((link) => (
                <DropdownMenuItem key={link.path} asChild>
                  <Link to={link.path}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Logo + Sidebar trigger */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/">
              <div className="text-lg sm:text-xl font-bold">CRUISE</div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {NAV_LINKS.map((link) => {
              const IconComponent = link.icon;
              return (
                <Button
                  key={link.path}
                  variant="ghost"
                  asChild
                  className={`flex items-center gap-2 text-white hover:text-gray-400 hover:bg-slate-700 text-xs xl:text-sm px-2 xl:px-4 ${
                    isActive(link) ? "bg-teal-600" : ""
                  }`}
                >
                  <Link to={link.path}>
                    {IconComponent && <IconComponent className="h-4 w-4" />}
                    {link.label}
                  </Link>
                </Button>
              );
            })}
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-white hover:text-gray-400 hover:bg-slate-700 text-xs sm:text-sm px-2 sm:px-4"
              >
                <User className="h-4 w-4" />
                david
                <ChevronDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
