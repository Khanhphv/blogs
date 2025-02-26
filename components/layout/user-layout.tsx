import { Navbar, Sidebar } from '../organism/navbar'
import Logo from '../atoms/logo'
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
        className={`mt-[60px] flex w-full justify-center sm:container max-sm:mb-[50px] sm:min-h-full sm:pl-[70px]`}
      >
        <div className="container w-full pb-[60px]">{props.children}</div>
      </div>
      {/* </div> */}
    </div>
  )
}
