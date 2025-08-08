import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/custom-sidebar'
import { Home, Users, BarChart3, Settings, HelpCircle, ChevronDown, ChevronRight, UserCheck, Crown, Layers, UserCog, List, Headphones } from 'lucide-react'

interface MenuItem {
  title: string
  icon: any
  url: string
  isActive?: boolean
  children?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: Home,
    url: '/admin/dashboard',
  },
  {
    title: 'Membership Management',
    icon: Users,
    url: '/admin/membership-management',
    children: [
      {
        title: 'Member List',
        icon: UserCheck,
        url: '/admin/membership-management/member-list',
      },
      {
        title: 'Membership Level',
        icon: Crown,
        url: '/admin/membership-management/membership-level',
        isActive: true,
      },
    ]
  },
  {
    title: 'Overlay Group',
    icon: Layers,
    url: '/admin/overlay-group',
  },
  {
    title: 'Agent Management',
    icon: UserCog,
    url: '/admin/agent-management',
    children: [
      {
        title: 'Proxy List',
        icon: List,
        url: '/admin/agent-management/proxy-list',
      },
    ]
  },
  {
    title: 'Customer Service Management',
    icon: Headphones,
    url: '/admin/customer-service',
    children: [
      {
        title: 'Customer Service...',
        icon: Headphones,
        url: '/admin/customer-service/1',
      },
      {
        title: 'Customer Service...',
        icon: Headphones,
        url: '/admin/customer-service/2',
      },
    ]
  },
]

function MenuItem({ item, level = 0 }: { item: MenuItem; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(item.children?.some(child => child.isActive) || false)
  const { isOpen, isMobile } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname;

  const hasChildren = item.children && item.children.length > 0
  const isActive = item.url === currentPath || (hasChildren && item.children?.some(child => currentPath.startsWith(child.url)));

  return (
    <div>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link 
            to={item.url} 
            className={`flex items-center justify-between w-full space-x-3 ${
              isActive ? 'bg-teal-600 text-white hover:bg-teal-700' : 
              (hasChildren && isExpanded) ? 'bg-gray-100 text-gray-900' : '' 
            } ${level > 0 ? 'pl-8' : ''}`}
            onClick={(e) => {
              if (hasChildren) {
                e.preventDefault() 
                setIsExpanded(!isExpanded)
              }
            }}
          >
            <div className="flex items-center space-x-3">
              <item.icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              {(isOpen || isMobile) && <span className="text-sm">{item.title}</span>}
            </div>
            {hasChildren && (isOpen || isMobile) && (
              <div className="flex-shrink-0">
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </div>
            )}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      
      {hasChildren && isExpanded && (
        <div className="ml-4">
          {item.children?.map((child, index) => (
            <MenuItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function AppSidebar() {
  const { isMobile } = useSidebar()
  
  return (
    <Sidebar className={isMobile ? "" : "h-[calc(100vh-73px)]"}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
