import { Button } from '@/components/ui/button'
import LoginButton from '../login-button'

const Header = () => {
  return (
    <div className="fixed top-0 z-20 h-[60px] w-full bg-background">
      <div className="flex h-full w-full flex-row items-center justify-center p-2">
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
