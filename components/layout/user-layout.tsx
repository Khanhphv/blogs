import { Navbar, Sidebar } from '../organism/navbar'
import LoginButton from '../molecules/login-button'
import Logo from '../atoms/logo'
import { Cart } from '../organism/cart'

interface Props {
  children: React.ReactNode
  direction?: 'horizontal' | 'vertical'
}
export const UserLayout = (props: Props) => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col">
        <Navbar className="border-b-2 p-2">
          <Logo />
          <Sidebar>
            <>
              {/* <Cart></Cart> */}
              <div style={{ minWidth: '50px' }}>
                <LoginButton>Login</LoginButton>
              </div>
            </>
          </Sidebar>
        </Navbar>
        <div
          className={`mt-[60px] flex w-full justify-center sm:container max-sm:mb-[50px] sm:min-h-full sm:pl-[70px]`}
        >
          <div className="container w-full pb-[60px]">{props.children}</div>
        </div>
      </div>
    </div>
  )
}
