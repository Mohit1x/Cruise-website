"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/custom-sidebar"
import { ChevronDown, ChevronRight } from "lucide-react"
import { getSidebarMenuItems } from "@/lib/sidebar-configs"

interface MenuItem {
  title: string
  icon: any
  url: string
  children?: MenuItem[]
}

function MenuItem({ item, level = 0 }: { item: MenuItem; level?: number }) {
  const location = useLocation()
  const currentPath = location.pathname

  // Determine if the current item or any of its children are active
  const isActive =
    item.url === currentPath || (item.children && item.children.some((child) => currentPath.startsWith(child.url)))

  // Initialize isExpanded based on whether any child is active
  const [isExpanded, setIsExpanded] = useState(isActive)

  const { isOpen, isMobile } = useSidebar()

  const hasChildren = item.children && item.children.length > 0

  return (
    <div>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link
            to={item.url}
            className={`flex items-center justify-between w-full space-x-3 ${
              isActive
                ? "bg-teal-600 text-white hover:bg-teal-700"
                : (hasChildren && isExpanded)
                  ? "bg-gray-100 text-gray-900"
                  : "" // Highlight parent if expanded
            } ${level > 0 ? "pl-8" : ""}`}
            onClick={(e) => {
              if (hasChildren) {
                e.preventDefault() // Prevent navigation for parent items with children
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
                {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
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
  const location = useLocation()
  const currentPath = location.pathname

  const menuItems = getSidebarMenuItems(currentPath)

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
