import { ChevronDown, Menu } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SidebarTrigger } from '@/components/ui/custom-sidebar'

// interface HeaderProps {
//   activeTab?: string
// }

export default function AdminHeader() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="bg-slate-800 text-white px-3 sm:px-6 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-8">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <SidebarTrigger className="text-white hover:bg-slate-700" />
            <Link to={"/"}><div className="text-lg sm:text-xl font-bold">CRUISE</div></Link>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Button 
              variant="ghost" 
              className={`text-white hover:bg-slate-700 text-xs xl:text-sm px-2 xl:px-4 ${
                currentPath === '/admin/dashboard' ? 'bg-teal-600' : ''
              }`}
              asChild
            >
              <Link to="/admin/dashboard">Backstage Homepage</Link>
            </Button>
            <Button 
              variant="ghost" 
              className={`text-white hover:bg-slate-700 text-xs xl:text-sm px-2 xl:px-4 ${
                currentPath.includes('/admin/membership-management') ? 'bg-teal-600' : ''
              }`}
              asChild
            >
              <Link to="/admin/membership-management/member-list">👥 Membership Management</Link>
            </Button>
            <Button variant="ghost" className="text-white hover:bg-slate-700 text-xs xl:text-sm px-2 xl:px-4" asChild>
              <Link to="/admin/trade">📊 Trade</Link>
            </Button>
            <Button variant="ghost" className="text-white hover:bg-slate-700 text-xs xl:text-sm px-2 xl:px-4" asChild>
              <Link to="/admin/help-center">📋 Help Center</Link>
            </Button>
            <Button variant="ghost" className="text-white hover:bg-slate-700 text-xs xl:text-sm px-2 xl:px-4" asChild>
              <Link to="/admin/system-management">System Management</Link>
            </Button>
          </nav>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700">
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/admin/dashboard">Backstage Homepage</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/admin/membership-management/member-list">👥 Membership Management</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/admin/trade">📊 Trade</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/admin/help-center">📋 Help Center</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/admin/system-management">System Management</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Time and Stats - Hidden on small screens */}
          <div className="hidden md:block text-xs sm:text-sm">
            <div>Local time</div>
            <div>2025-08-08 14:26:56</div>
          </div>
          
          <div className="flex space-x-1 sm:space-x-2">
            <span className="bg-red-500 px-1 sm:px-2 py-1 rounded text-xs">11646</span>
            <span className="bg-orange-500 px-1 sm:px-2 py-1 rounded text-xs">3881</span>
          </div>
          
          <div className="hidden sm:block text-xs">
            <div>top up</div>
            <div>Withdraw</div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:bg-slate-700 text-xs sm:text-sm px-2 sm:px-4">
                🔄 david <ChevronDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
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
  )
}
