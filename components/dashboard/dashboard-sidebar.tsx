import Link from 'next/link'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from '@/components/ui/sidebar'

import {
  ArrowLeft,
  Flag,
  History,
  Search,
  Settings,
  UserRoundCog
} from 'lucide-react'

// Menu items.
const items = [
  {
    title: 'Search',
    url: '/dashboard/search',
    icon: Search
  },
  {
    title: 'Reports',
    url: '/dashboard/reports',
    icon: Flag
  },
  {
    title: 'History',
    url: '/dashboard/history',
    icon: History
  },
  {
    title: 'Profile',
    url: '/dashboard/profile',
    icon: UserRoundCog
  },
  {
    title: 'Settings',
    url: '/dashboard/settings',
    icon: Settings
  }
]

export default function DashboardSidebar() {
  return (
    <Sidebar collapsible='icon' variant='inset'>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href='/' className='text-sky-700 hover:text-sky-600'>
                <ArrowLeft />
                <span>Back to site</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
