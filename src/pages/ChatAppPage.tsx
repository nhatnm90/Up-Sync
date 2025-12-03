import { AppSidebar } from '@/components/app-sidebar'
// import SignOut from '@/components/auth/signout.tsx'
import { NavActions } from '@/components/nav-actions'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
// import { useAuthStore } from '@/stores/useAuthStore.ts'

const ChatAppPage = () => {
  // Watching all changes of the store
  //const { user } = useAuthStore()

  // Watching the USER change ONLY
  // const user = useAuthStore((x) => x.user)
  return (
    <div className='min-h-screen w-full relative'>
      {/* Cotton Candy Sky Gradient - Opposite Direction */}
      <div
        className='absolute inset-0 z-0'
        style={{
          // backgroundImage: `radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #10b981 100%)`
          // backgroundSize: '100% 100%'
          background: `linear-gradient(225deg, #FFB3D9 0%, #FFD1DC 20%, #FFF0F5 40%, #E6F3FF 60%, #D1E7FF 80%, #C7E9F1 100%)`
        }}
      />
      {/* Your Content/Components */}
      <div className='flex flex-1 flex-col gap-4 p-4'>
        <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
          <div className='neumorphism aspect-square rounded-2xl flex justify-center items-center p-4 transition-all duration-300 hover:shadow-2xl ring-offset-2'>
          </div>
          <div className='bg-muted/50 aspect-video rounded-xl' />
          <div className='bg-muted/50 aspect-video rounded-xl' />
        </div>
        <div className='bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min' />
      </div>
    </div>
  )
}

export default ChatAppPage
