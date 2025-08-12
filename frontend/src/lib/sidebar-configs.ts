import {
    Home,
    Users,
    BarChart3,
    ShoppingCart,
    DollarSign,
    Banknote,
    Settings,
    Package,
    Tags,
    Ticket,
    Award,
    UserCheck,
    Crown,
    Layers,
    UserCog,
    List,
    Headphones,
  } from "lucide-react"
  
  interface MenuItem {
    title: string
    icon: any
    url: string
    children?: MenuItem[]
  }
  
  export const tradeMenuItems: MenuItem[] = [
    {
      title: "Transaction Management", // Corresponds to "Trade" in header
      icon: BarChart3,
      url: "/admin/trade", // Parent URL for Trade section
      children: [
        {
          title: "Order List",
          icon: ShoppingCart,
          url: "/admin/trade/order-list",
        },
        {
          title: "Recharge Management",
          icon: DollarSign,
          url: "/admin/trade/recharge-management",
        },
        {
          title: "Withdrawal Management",
          icon: Banknote,
          url: "/admin/trade/withdrawal-management",
        },
        {
          title: "Transaction Control",
          icon: Settings,
          url: "/admin/trade/transaction-control",
        },
      ],
    },
    {
      title: "Product Management",
      icon: Package,
      url: "/admin/trade/product-management",
      children: [
        {
          title: "Product List",
          icon: List,
          url: "/admin/trade/product-management/product-list",
        },
        {
          title: "Product Categories",
          icon: Tags,
          url: "/admin/trade/product-management/product-categories",
        },
      ],
    },
    {
      title: "Regional lottery pres...",
      icon: Ticket,
      url: "/admin/trade/regional-lottery",
      children: [
        {
          title: "Lottery Configurat...",
          icon: Settings,
          url: "/admin/trade/regional-lottery/lottery-configuration",
        },
        {
          title: "Winning List",
          icon: Award,
          url: "/admin/trade/regional-lottery/winning-list",
        },
      ],
    },
  ]
  
  export const membershipMenuItems: MenuItem[] = [
    {
      title: "Membership Management", // Corresponds to "Membership Management" in header
      icon: Users,
      url: "/admin/membership-management", // Parent URL for Membership section
      children: [
        {
          title: "Member List",
          icon: UserCheck,
          url: "/admin/membership-management/member-list",
        },
        {
          title: "Membership Level",
          icon: Crown,
          url: "/admin/membership-management/membership-level",
        },
        {
          title: "Overlay Group",
          icon: Layers,
          url: "/admin/membership-management/overlay-group",
        },
      ],
    },
    {
      title: "Agent Management",
      icon: UserCog,
      url: "/admin/agent-management",
      children: [
        {
          title: "Proxy List",
          icon: List,
          url: "/admin/agent-management/proxy-list",
        },
      ],
    },
    {
      title: "Customer Service Management",
      icon: Headphones,
      url: "/admin/customer-service",
      children: [
        {
          title: "Customer Service...",
          icon: Headphones,
          url: "/admin/customer-service/1",
        },
        {
          title: "Customer Service...",
          icon: Headphones,
          url: "/admin/customer-service/2",
        },
      ],
    },
  ]
  
  export const defaultAdminMenuItems: MenuItem[] = [
    {
      title: "Dashboard",
      icon: Home,
      url: "/admin/dashboard",
    },
    {
      title: "Help Center",
      icon: Headphones,
      url: "/admin/help-center",
    },
    {
      title: "System Management",
      icon: Settings,
      url: "/admin/system-management",
    },
  ]

  export const helpCenterMenuItems: MenuItem[]=[
    {
        title: "Homepage Text",
        icon: Users,
        url: "/admin/help-center",
        children: [
          {
            title: "Announcement Management",
            icon: UserCheck,
            url: "/admin/help-center/announcement-management",
          },
          {
            title: "Homepage Carousel",
            icon: Crown,
            url: "/admin/help-center/homepage-carousel",
          },
          {
            title: "Rule Text",
            icon: Layers,
            url: "/admin/help-center/rule-text",
          },
        ],
      },
  ]

  export const systemManagementsMenuItems: MenuItem[] = [
    {
      title: "System Configuration",
      icon: Users,
      url: "/admin/system-management",
      children: [
        {
          title: "System parameter configuration",
          icon: UserCheck,
          url: "/admin/system-management/system-parameter",
        },
        {
          title: "System menu management",
          icon: Crown,
          url: "/admin/system-management/system-menu",
        },
        {
          title: "System operation log",
          icon: Layers,
          url: "/admin/system-management/system-operation-log",
        },
      ],
    },
    {
      title: "Permission Management",
      icon: UserCog,
      url: "",
      children: [
        {
          title: "Access rights management",
          icon: List,
          url: "/admin/system-management/access-right",
        },
        {
          title: "System user management",
          icon: List,
          url: "/admin/system-management/system-user",
        },
      ],
    },
  ]
  
  export function getSidebarMenuItems(pathname: string): MenuItem[] {
    if (pathname.startsWith("/admin/trade")) {
      return tradeMenuItems
    }
    if (pathname.startsWith("/admin/help-center")) {
      return helpCenterMenuItems
    }
    if (pathname.startsWith("/admin/system-management")) {
      return systemManagementsMenuItems
    }
    if (
      pathname.startsWith("/admin/membership-management") ||
      pathname.startsWith("/admin/agent-management") ||
      pathname.startsWith("/admin/customer-service")
    ) {
      return membershipMenuItems
    }
    return defaultAdminMenuItems
  }
  