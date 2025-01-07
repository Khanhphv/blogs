import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.png'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'

const Header = () => {
  let headerClass = 'flex items-center w-full  justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Image src={'/logo.png'} width={120} height={120} alt="logo" />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="h-6 text-2xl font-semibold sm:block">
              {siteMetadata.title}
            </div>
          ) : (
            siteMetadata.title
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar max-w-40 hidden items-center space-x-4 overflow-x-auto sm:space-x-6 lg:flex lg:max-w-full">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 block font-medium text-gray-900 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
        </div>
        {/* <ThemeSwitch /> */}
        {/* <LoginButton></LoginButton> */}
      </div>
      <div>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
