import React, { createContext, useContext, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { PanelLeft } from 'lucide-react'

// Sidebar Context
interface SidebarContextType {
  isOpen: boolean
  toggle: () => void
  isMobile: boolean
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within SidebarProvider')
  }
  return context
}

// Sidebar Provider
interface SidebarProviderProps {
  children: React.ReactNode
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (mobile) {
        setIsOpen(false) // Close sidebar on mobile by default
      } else {
        setIsOpen(true) // Open sidebar on desktop by default
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const toggle = () => setIsOpen(!isOpen)
  
  return (
    <SidebarContext.Provider value={{ isOpen, toggle, isMobile }}>
      {children}
    </SidebarContext.Provider>
  )
}

// Sidebar Components
interface SidebarProps {
  children: React.ReactNode
  className?: string
}

export function Sidebar({ children, className }: SidebarProps) {
  const { isOpen, isMobile } = useSidebar()
  
  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => {}}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300 relative",
        isMobile 
          ? isOpen 
            ? " w-64 " 
            : " w-0 "
          : isOpen 
            ? "w-64" 
            : "w-16",
        className
      )}>
        {children}
      </div>
    </>
  )
}

export function SidebarContent({ children, className }: SidebarProps) {
  return (
    <div className={cn("p-0 sm:p-0", className)}>
      {children}
    </div>
  )
}

export function SidebarGroup({ children, className }: SidebarProps) {
  return (
    <div className={cn("mb-4 sm:mb-6", className)}>
      {children}
    </div>
  )
}

export function SidebarGroupLabel({ children, className }: SidebarProps) {
  const { isOpen, isMobile } = useSidebar()
  
  return (
    <div className={cn(
      "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2",
      (!isOpen && !isMobile) && "hidden",
      className
    )}>
      {children}
    </div>
  )
}

export function SidebarGroupContent({ children, className }: SidebarProps) {
  return (
    <div className={cn("space-y-1", className)}>
      {children}
    </div>
  )
}

export function SidebarMenu({ children, className }: SidebarProps) {
  return (
    <nav className={cn("space-y-1", className)}>
      {children}
    </nav>
  )
}

export function SidebarMenuItem({ children, className }: SidebarProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

interface SidebarMenuButtonProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export function SidebarMenuButton({ children, asChild, className }: SidebarMenuButtonProps) {
  const { isOpen, isMobile } = useSidebar()
  
  if (asChild) {
    return React.cloneElement(
      children as React.ReactElement<
        React.HTMLAttributes<HTMLElement>
      >,
      {
        className: cn(
          "flex items-center w-full px-2 sm:px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors",
          (!isOpen && !isMobile) && "justify-center px-2",
          className
        ),
      }
    );
  }
  
  return (
    <button className={cn(
      "flex items-center w-full px-2 sm:px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors",
      (!isOpen && !isMobile) && "justify-center px-2",
      className
    )}>
      {children}
    </button>
  )
}

export function SidebarTrigger({ className }: { className?: string }) {
  const { toggle } = useSidebar()
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      className={cn("h-8 w-8 p-0", className)}
    >
      <PanelLeft className="h-4 w-4" />
    </Button>
  )
}
