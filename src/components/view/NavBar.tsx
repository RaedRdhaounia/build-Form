import { useRouter } from 'next/router'
// -- icons imports 
import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, DocumentTextIcon, AtSymbolIcon } from '@heroicons/react/24/outline'
// ---- util functions imports
import { classNames } from '../utilities/functions'

// static APi


export default function NavBar(props: {children: JSX.Element}) {
  const router = useRouter()
  const {children} = props
// ---- local data 
// -- user based data
  const user = {
    name    : 'Raed Rdhaounia',
    email   : 'raedrdhaounia@gmail.com',
    imageUrl: 'https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/305990127_1765340950498185_6065078766403284064_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MbxVATgBX-AAX8Wnm0u&_nc_ht=scontent.ftun9-1.fna&oh=00_AfA33mJqVTxd8rzklyGi5KjRn8GOmwHqyquPtZmUGAuoag&oe=6402925C'
  }
// -- navigation data
  const navigation = [
    { id: '/'               ,name: 'DASHBOARD'               , href: '/'              , current:(_id: string) => _id === router.asPath  },
    { id: '/documentation'  ,name: 'DOCUMENTATION'           , href: 'documentation'  , current:(_id: string) => _id === router.asPath  },
    { id: '/component'      ,name: 'COMPONENTS'              , href: 'component'      , current:(_id: string) => _id === router.asPath  },
    { id: '/create-template',name: 'CREATE YOUR OWN TEMPLATE', href: 'create-template', current:(_id: string) => _id === router.asPath  },
  ]

  return (
    <>
      <Disclosure as="nav" className="bg-purple-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4  lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://icon-library.com/images/jigsaw-icon/jigsaw-icon-13.jpg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => { return (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current(item.id)?
                            'bg-gray-900 text-white'
                          :
                          'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current(item.id) ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    )})}
                  </div>
                </div>
                <div className="block md:hidden justify-center">
                  <div className="ml-10 flex items-baseline text-center text-white space-x-4">
                    Waves lines
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <AtSymbolIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View Code</span>
                    <DocumentTextIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                      </Menu.Button>
                    </div>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current(item.id) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current(item.id) ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    {user.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View Code</span>
                  <DocumentTextIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
      </Disclosure>
    {children}
   ,</>

  )
};