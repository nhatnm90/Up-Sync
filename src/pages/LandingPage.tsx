import Header from '@/components/tasks/Header'
import React from 'react'

const LandingPage = () => {
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
      {/* mx-auto: margin trái phải auto để canh giữa màn hình */}
      <div className='container pt-8 mx-auto relative z-10'>
        <div className='w-full max-w-2xl p-6 mx-auto space-y-6'>
          {/* Header */}
          <Header></Header>
          Header
          {/* Statistic and filter */}
          Stats
          {/* List task */}
          Tasks
          {/* Paging + Datetime filter
            justify-between: canh giữa và dàn đều 2 bên
            sm:flex-row: màn hình nhỏ xếp theo hàng dọc
            */}
          <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>Paging</div>
          {/* Footer */}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
