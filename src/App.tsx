import { Toaster } from 'sonner'
import { BrowserRouter, Route, Routes } from 'react-router'
import SignUpPage from '@/pages/SignUpPage'
import SignInPage from '@/pages/SignInPage'
import ProtectedRoute from '@/components/protectedRoute'
import ChatAppPage from '@/pages/ChatAppPage'
import NotFound from '@/pages/NotFound'
import TaskPage from '@/pages/TaskPage'
import LandingPage from '@/pages/LandingPage'
import LandingPage_1 from '@/pages/LandingPage_1'

function App() {
  return (
    <>
      <Toaster richColors />
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/signin' element={<SignInPage />} />

          {/* protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<LandingPage />} />
            <Route path='/1' element={<LandingPage_1 />} />
            <Route path='/nchat' element={<ChatAppPage />} />
            <Route path='/ntodo' element={<TaskPage />} />
          </Route>
          <Route path='*' element={<NotFound />} />

          {/* private routes */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
