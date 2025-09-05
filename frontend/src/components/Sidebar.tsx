"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/custom-sidebar";
import { ChevronDown, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { getSidebarMenuItems } from "@/lib/sidebar-configs";
import { Button } from "./ui/button";

interface MenuItem {
  title: string;
  icon: any;
  url: string;
  children?: MenuItem[];
}

function MenuItem({ item, level = 0 }: { item: MenuItem; level?: number }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive =
    item.url === currentPath ||
    (item.children &&
      item.children.some((child) => currentPath.startsWith(child.url)));

  const [isExpanded, setIsExpanded] = useState(isActive);

  const { isOpen } = useSidebar();

  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link
            to={item.url}
            className={`flex items-center justify-between w-full space-x-3 ${
              isActive
                ? "bg-teal-600 text-white hover:bg-teal-700"
                : hasChildren && isExpanded
                ? "bg-gray-100 text-gray-900"
                : ""
            } ${level > 0 ? "pl-8" : ""}`}
            onClick={(e) => {
              if (hasChildren) {
                e.preventDefault();
                setIsExpanded(!isExpanded);
              }
            }}
          >
            <div className="flex items-center space-x-3 w-full">
              <item.icon className="h-4 w-4 sm:h-5 sm:w-10" />
              {(isOpen) && (
                <span className="text-sm">{item.title}</span>
              )}
            </div>

            {/* Right side: chevron */}
            {hasChildren && (
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
  );
}

export default function AppSidebar() {
  const { isOpen,toggle, isMobile } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const menuItems = getSidebarMenuItems(currentPath);

  return (
    <Sidebar
      className={`collapsible-icon ${isOpen ? "w-64" : isMobile ? "w-14" : "w-fit"}`}
    >
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center justify-between p-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggle()}
            >
              {isOpen && !isMobile ? <ChevronLeft /> : <Menu />}
            </Button>
          </div>
          <SidebarGroupContent>
            <SidebarMenu className={`flex flex-col ${!isOpen ? "items-center" : "items-start"} justify-between`}>
              {menuItems.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
