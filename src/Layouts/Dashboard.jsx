import {
  Accordion,
  AccordionItem,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react'
import { useState, useEffect } from 'react'
import { CgWebsite } from 'react-icons/cg'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation() // Get the current location

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  // Close the sidebar when the route changes on mobile devices
  useEffect(() => {
    if (window.innerWidth <= 768) {
      // Only apply this logic on mobile devices
      setIsSidebarOpen(false)
    }
  }, [location]) // Runs whenever the route changes

  return (
    <div>
      <nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        <div className='px-3  lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start rtl:justify-end'>
              <button
                onClick={toggleSidebar}
                aria-controls='logo-sidebar'
                type='button'
                className='inline-flex items-center p-2 text-sm text-success rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              >
                <span className='sr-only'>Open sidebar</span>
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    clipRule='evenodd'
                    fillRule='evenodd'
                    d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
                  ></path>
                </svg>
              </button>
              <Link
                to='/'
                className='text-3xl md:text-4xl font-bold text-success py-5'
              >
                Logo
                {/* <img src={logo} className="w-36 md:w-56" alt="" /> */}
              </Link>
            </div>
            <div className='flex items-center'>
              <div className='flex items-center ms-3'>
                <Dropdown>
                  <DropdownTrigger>
                    <Avatar src='' />
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem as={Link} to={`/dashboard/a`}>
                      My Profile
                    </DropdownItem>
                    <DropdownItem>Setting</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id='logo-sidebar'
        className={`fixed top-5 left-0 z-40 w-72 h-screen bg-primary pt-20 transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-primary border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 overflow-auto`}
        aria-label='Sidebar'
      >
        <div className='h-full px-3 pb-4 overflow-y-auto bg-primary dark:bg-gray-800'>
          <ul className='font-medium'>
            <li>
              <Link
                to='/dashboard'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <MdOutlineSpaceDashboard className='text-white' />
                <span className='ms-3 text-[16px] text-white group-hover:text-gray-900'>
                  Dashboard
                </span>
              </Link>
            </li>
            <Accordion
              itemClasses={{
                title: 'text-[15px] text-white'
              }}
              defaultExpandedKeys={['1']}
            >
              <AccordionItem
                key='1'
                aria-label='User Management'
                title='User Management'
                startContent={<CgWebsite className='text-white' />}
              >
                <NavLink
                  to='/dashboard/all-users'
                  className={({ isActive }) =>
                    `flex items-center mt-2 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                      isActive ? 'bg-success text-white' : ''
                    }`
                  }
                >
                  <span className='text-[16px] text-white group-hover:text-gray-900 flex-1 ms-3 whitespace-nowrap'>
                    All Users
                  </span>
                </NavLink>
              </AccordionItem>
            </Accordion>
            <Accordion
              itemClasses={{
                title: 'text-[15px] text-white'
              }}
              defaultExpandedKeys={['1']}
            >
              <AccordionItem
                key='1'
                aria-label='Content Management'
                title='Content Management'
                startContent={<CgWebsite className='text-white' />}
              >
                <NavLink
                  to='/dashboard/lessons'
                  className={({ isActive }) =>
                    `flex items-center mt-2 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                      isActive ? 'bg-success text-white' : ''
                    }`
                  }
                >
                  <span className='text-[16px] text-white group-hover:text-gray-900 flex-1 ms-3 whitespace-nowrap'>
                    Lessons
                  </span>
                </NavLink>
                <NavLink
                  to='/dashboard/add-lessons'
                  className={({ isActive }) =>
                    `flex items-center mt-2 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                      isActive ? 'bg-success text-white' : ''
                    }`
                  }
                >
                  <span className='text-[16px] text-white group-hover:text-gray-900 flex-1 ms-3 whitespace-nowrap'>
                    Add Lessons
                  </span>
                </NavLink>
                <NavLink
                  to='/dashboard/vocabularies'
                  className={({ isActive }) =>
                    `flex items-center mt-2 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                      isActive ? 'bg-success text-white' : ''
                    }`
                  }
                >
                  <span className='text-[16px] text-white group-hover:text-gray-900 flex-1 ms-3 whitespace-nowrap'>
                    Vocabularies
                  </span>
                </NavLink>
                <NavLink
                  to='/dashboard/add-vocabularies'
                  className={({ isActive }) =>
                    `flex items-center mt-2 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                      isActive ? 'bg-success text-white' : ''
                    }`
                  }
                >
                  <span className='text-[16px] text-white group-hover:text-gray-900 flex-1 ms-3 whitespace-nowrap'>
                    Add Vocabularies
                  </span>
                </NavLink>
              </AccordionItem>
            </Accordion>
            <Accordion
              itemClasses={{
                title: 'text-[15px] text-white'
              }}
              defaultExpandedKeys={['1']}
            >
              <AccordionItem
                key='1'
                aria-label='Tutorial Management'
                title='Tutorial Management'
                startContent={<CgWebsite className='text-white' />}
              >
                <NavLink
                  to='/dashboard/tutorial'
                  className={({ isActive }) =>
                    `flex items-center mt-2 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                      isActive ? 'bg-success text-white' : ''
                    }`
                  }
                >
                  <span className='text-[16px] text-white group-hover:text-gray-900 flex-1 ms-3 whitespace-nowrap'>
                    Tutorial
                  </span>
                </NavLink>
              </AccordionItem>
            </Accordion>
          </ul>
        </div>
      </aside>

      <div className='p-4 sm:ml-72'>
        <div className='p-4  border-2 border-gray-200  rounded-lg dark:border-gray-700 mt-20 overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
