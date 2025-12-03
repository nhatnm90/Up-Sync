import * as React from 'react'
import { DatePicker } from '@/components/date-picker'
import { NavUser } from '@/components/nav-user'
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail, SidebarSeparator } from '@/components/ui/sidebar'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      // variant='floating'
      {...props}
    >
      <SidebarHeader className='border-sidebar-border h-16 border-b'>
        <NavUser />
      </SidebarHeader>
      <SidebarContent>
        <DatePicker />
        <SidebarSeparator className='mx-0' />
        {/* <Calendars calendars={data.calendars} /> */}
      </SidebarContent>
      {/* <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>New Calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  )
}
