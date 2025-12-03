import { AppSidebar } from '@/components/app-sidebar'
import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { BookCheck, MessageCircle, Home, Settings, CircleQuestionMark } from 'lucide-react'
import { useNavigate } from 'react-router'

const IconMap = {
  BookCheck: BookCheck,
  MessageCircle: MessageCircle,
  Home: Home,
  Settings: Settings,
  CircleQuestionMark: CircleQuestionMark
}
type IconMapKey = keyof typeof IconMap

const data: { mainContain: { id: number; name: string; icon: IconMapKey; url: string; color: string }[] } = {
  mainContain: [
    {
      id: 1,
      name: 'NTodo',
      icon: 'BookCheck',
      url: '/ntodo',
      color: 'bg-purple-700'
    },
    {
      id: 2,
      name: 'NChat',
      icon: 'MessageCircle',
      url: '/nchat',
      color: 'bg-teal-700'
    },
    {
      id: 3,
      name: 'NHome',
      icon: 'Home',
      url: '/1',
      color: 'bg-amber-700'
    },
    // {
    //   id: 4,
    //   name: 'NSetting',
    //   icon: 'Settings',
    //   url: '/nsetting',
    //   color: 'bg-gray-700'
    // },
    {
      id: 5,
      name: 'TBD',
      icon: 'CircleQuestionMark',
      url: '/nsetting',
      color: 'bg-gray-700'
    }
    // {
    //   id: 6,
    //   name: 'TBD',
    //   icon: 'CircleQuestionMark',
    //   url: '/nsetting',
    //   color: 'bg-gray-700'
    // },
    // {
    //   id: 7,
    //   name: 'TBD',
    //   icon: 'CircleQuestionMark',
    //   url: '/nsetting',
    //   color: 'bg-gray-700'
    // },
    // {
    //   id: 8,
    //   name: 'TBD',
    //   icon: 'CircleQuestionMark',
    //   url: '/nsetting',
    //   color: 'bg-gray-700'
    // },
    // {
    //   id: 9,
    //   name: 'TBD',
    //   icon: 'CircleQuestionMark',
    //   url: '/nsetting',
    //   color: 'bg-gray-700'
    // },
    // {
    //   id: 10,
    //   name: 'TBD',
    //   icon: 'CircleQuestionMark',
    //   url: '/nsetting',
    //   color: 'bg-gray-700'
    // },
    // {
    //   id: 11,
    //   name: 'TBD',
    //   icon: 'CircleQuestionMark',
    //   url: '/nsetting',
    //   color: 'bg-gray-700'
    // },
    // {
    //   id: 12,
    //   name: 'TBD',
    //   icon: 'CircleQuestionMark',
    //   url: '/nsetting',
    //   color: 'bg-gray-700'
    // },
    // {
    //   id: 13,
    //   name: 'TBD',
    //   icon: 'CircleQuestionMark',
    //   url: '/nsetting',
    //   color: 'bg-gray-700'
    // }
  ]
}

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4 z-10'>
          <SidebarTrigger className='-ml-1' />
          <Separator orientation='vertical' className='mr-2 data-[orientation=vertical]:h-4' />
          <a href='/' className='mx-auto block w-fit text-center'>
            <img className='h-20 w-auto' src='/Logo.png' alt='logo' />
          </a>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className='text-xl'>Up-Sync</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div
          className='flex flex-1 flex-col gap-4 p-4 inset-0 z-0'
          style={{
            // background: '#c4cedc'
            background: `linear-gradient(225deg, #FFB3D9 0%, #FFD1DC 20%, #FFF0F5 40%, #E6F3FF 60%, #D1E7FF 80%, #C7E9F1 100%)`
          }}
        >
          <Card className='pt-0'>
            <CardHeader className='flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row'>
              <div className='grid flex-1 gap-1'>
                <CardTitle>Apps</CardTitle>
              </div>
            </CardHeader>
            <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
              <div className='grid auto-rows-min gap-10 md:grid-cols-4'>
                {data.mainContain.map((item) => {
                  const IconComponent = IconMap[item.icon as IconMapKey] || Home
                  return (
                    <div
                      key={item.id}
                      className='neumorphism aspect-square rounded-2xl flex justify-center items-center p-4 transition-all duration-300 hover:shadow-2xl ring-offset-2'
                    >
                      <div
                        onClick={() => navigate(item.url)}
                        className='p-4 sm:p-8 cursor-pointer hover:scale-[1.03] transition-transform duration-300 flex flex-col items-center justify-center text-center'
                      >
                        <div className={cn('p-4 rounded-full mb-4 shadow-inner', item.color.replace('text-', 'bg-'))}>
                          <IconComponent className={cn('w-8 h-8 md:w-10 md:h-10 text-white')} />
                        </div>
                        {/* <div className='p-4 rounded-full mb-4'>
                      <IconComponent className='w-8 h-8 md:w-10 md:h-10' />
                    </div>{' '} */}
                        <span
                          // style={{ fontSize: '2em' }}
                          className={cn('text-4xl font-bold text-gray-600 bg-clip-text md:text-2xl', item.color)}
                        >
                          {item.name}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* CHARTs */}
          <div className='grid auto-rows-min gap-10'>
            <ChartAreaInteractive />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default LandingPage
