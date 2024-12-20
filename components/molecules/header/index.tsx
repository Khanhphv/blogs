import { Button } from '@/components/ui/button'
import LoginButton from '../login-button'

const Header = () => {
  return (
    <div className="fixed top-0 w-full h-[60px] z-20 bg-background">
      <div className="flex flex-row w-full p-2 justify-center items-center h-full">
        <div className="absolute right-0">
          <LoginButton>
            <Button variant={'white'}>Login</Button>
          </LoginButton>
        </div>
      </div>
    </div>
  )
}

export default Header
