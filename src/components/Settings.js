import {useState, Fragment} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'
import {Link} from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Settings({logout, user}) {

    const [darkMode,setDarkMode] = useState(false)

  return (
    <Menu as="div" className="relative inline-block text-left">
        <Menu.Button>
            {user.photoURL ? (
                <img
                    className="inline-block h-12 w-12 rounded-full"
                    src={user.photoURL}
                    alt="profile"
                />
            ) : (
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </span>
            )}
        </Menu.Button>

        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            <div className="px-4 py-4">
                <p className="text-sm">Signed in as</p>
                <p className="text-sm font-medium text-gray-900 truncate">{user.email ? user.email : user.displayName}</p>
            </div>
            {/* Appearence (Light/Day) */}
            <button
                type="button"
                className="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
                <span className="sr-only">Set Theme</span>
                {darkMode ? (
                    <MoonIcon className="h-6 w-6" aria-hidden="true" onClick={() => setDarkMode(false)}/>
                    ) : (
                    <SunIcon className="h-6 w-6" aria-hidden="true" onClick={() => setDarkMode(true)}/>
                )}
            </button>
            <div className="py-1">
                {/* Account Settings */}
                <Menu.Item>
                    {({ active }) => (
                        <Link
                        to="/account-settings"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-3 text-sm'
                        )}
                        >
                            Account Settings
                        </Link>
                    )}
                </Menu.Item>
                {/* Support */}
                <Menu.Item>
                    {({ active }) => (
                        <a
                        href="https://twitter.com/simonsjournal"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-3 text-sm'
                        )}
                        >
                        Support
                        </a>
                    )}
                </Menu.Item>
                {/* Report */}
                <Menu.Item>
                    {({ active }) => (
                        <a
                        href="https://github.com/simoncarriere/firebasetailwind-authboiler/issues"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-3 text-sm'
                        )}
                        >
                        Report Bug
                        </a>
                    )}
                </Menu.Item>
            </div>
            {/* Logout */}
            <div className="py-1">
                <Menu.Item>
                    {({ active }) => (
                    <button
                        type="submit"
                        onClick={logout}
                        className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-3 text-sm'
                        )}
                    >
                        Sign out
                    </button>
                    )}
                </Menu.Item>
            </div>
            </Menu.Items>
        </Transition>
    </Menu>
  )
}













