// src/components/layout/sidebar-nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calculator,
  BarChart3,
  Settings,
  LifeBuoy,
  Users,
  Bot,
  ShoppingBasket,
  Fuel,
  Zap,
  Droplets,
  Replace
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  subItems?: NavItem[];
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
  {
    href: "/calculators", label: "Calculators", icon: <Calculator />,
    subItems: [
      { href: "/calculators/grocery", label: "Grocery", icon: <ShoppingBasket /> },
      { href: "/calculators/fuel", label: "Fuel", icon: <Fuel /> },
      { href: "/calculators/electricity", label: "Electricity", icon: <Zap /> },
      { href: "/calculators/water", label: "Water", icon: <Droplets /> },
    ]
  },
  { href: "/reports", label: "Reports", icon: <BarChart3 /> },
  { href: "/budget-ai", label: "AI Optimizer", icon: <Bot /> },
  { href: "/settings", label: "Settings", icon: <Settings /> },
];

export function SidebarNav() {
  const pathname = usePathname();
  const { open, isMobile, state } = useSidebar();

  const renderNavItem = (item: NavItem, isSubItem = false) => {
    const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
    const Comp = isSubItem ? SidebarMenuSubButton : SidebarMenuButton;
    const commonProps = {
      asChild: true,
      isActive: isActive,
      tooltip: state === "collapsed" && !isMobile ? item.label : undefined,
    };

    return (
      <SidebarMenuItem key={item.href}>
        <Comp {...commonProps} className={cn(isSubItem && "text-sm")}>
          <Link href={item.href} target={item.isExternal ? "_blank" : undefined}>
            {item.icon}
            <span>{item.label}</span>
          </Link>
        </Comp>
        {item.subItems && (open || state === "expanded") && !isMobile && (
          <SidebarMenuSub>
            {item.subItems.map(subItem => (
              <SidebarMenuSubItem key={subItem.href}>
                {renderNavItem(subItem, true)}
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        )}
      </SidebarMenuItem>
    );
  };


  return (
    <SidebarMenu>
      {navItems.map(item => renderNavItem(item))}
    </SidebarMenu>
  );
}
