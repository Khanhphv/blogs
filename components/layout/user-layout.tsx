import { Navbar, Sidebar } from '../organism/navbar'
import Logo from '../atoms/logo'
import dynamic from 'next/dynamic'

const LeftAdComponent = dynamic(() => import('../LeftAdComponent'), {
  ssr: false,
})

interface Props {
  children: React.ReactNode
  direction?: 'horizontal' | 'vertical'
}

export const UserLayout = (props: Props) => {
  return (
    <div className="mx-auto h-full w-full">
      <Navbar className="z-10 border-b p-2">
        <Logo />
        <Sidebar></Sidebar>
      </Navbar>
      <div
        className={`mt-[60px] flex w-full justify-center max-sm:mb-[50px] sm:min-h-full sm:px-4`}
      >
        {/* Left Ad Column */}
        <div className="hidden min-w-[160px] max-w-[200px] lg:block lg:w-1/6">
          <div className="sticky top-[80px] p-4"></div>
        </div>

        {/* Main Content Column */}
        <div className="container mx-4 max-w-4xl flex-1 pb-[60px]">
          {props.children}
        </div>

        {/* Right Ad Column */}
        <div className="hidden min-w-[160px] max-w-[200px] lg:block lg:w-1/6">
          <div className="sticky top-[80px] p-4">
            <LeftAdComponent />
          </div>
        </div>
      </div>
    </div>
  )
}
