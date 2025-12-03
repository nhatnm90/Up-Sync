import { LogOut, User } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button.tsx'
import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item'
import { useAuthStore } from '@/stores/useAuthStore'
import { useNavigate } from 'react-router'
// import { SidebarProvider } from '@/components/ui/sidebar'
// import { NavActions } from '@/components/nav-actions'
import SlideSection from '@/components/auth/slide-section'

const UserSection = () => {
  const { user } = useAuthStore.getState()

  const { signOut } = useAuthStore()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await signOut()
      navigate('/signin')
    } catch (error) {
      console.error('Error when signout: ', error)
    }
  }

  const secureUrl = user?.avatarUrl ? user?.avatarUrl.replace(/^http:\/\//i, 'https://') : undefined

  return (
    <div className='flex justify-end'>
      {/* <NavActions></NavActions> */}
      <Item variant='outline'>
        <ItemMedia>
          <SlideSection>
            <Avatar className='size-8 cursor-pointer hover:shadow-glow hover:scale-105'>
              <AvatarImage src={secureUrl} alt={user?.username || 'User avatar'} referrerPolicy='no-referrer' />
              <AvatarFallback>
                {user?.username ? user?.username.slice(0, 2).toUpperCase() : <User className='h-4 w-4' />}
              </AvatarFallback>
            </Avatar>
          </SlideSection>
        </ItemMedia>
        <ItemContent className='hidden md:block'>
          <ItemTitle>{`${user?.username}`}</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button onClick={handleSignOut} size='icon-sm' variant='outline' className='rounded-full' aria-label='Invite'>
            <LogOut />
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}

export default UserSection
