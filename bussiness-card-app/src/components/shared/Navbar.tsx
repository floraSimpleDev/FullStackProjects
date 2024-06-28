import { signOut, useSession } from "next-auth/react";
import { FC, Fragment } from "react";
import {
  Disclosure,
  DisclosureButton,
  Menu,
  MenuButton,
  Transition,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import { HiX, HiBookOpen } from "react-icons/hi";

interface NavbarProps {}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: FC<NavbarProps> = ({}) => {
  const { data: sessionData } = useSession();

  return (
    <Disclosure as="nav" className="h-16 bg-gray-800">
      {({ open }) => (
        <>
          <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <section className="relative flex h-16 items-center justify-between">
              <section className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiBookOpen className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </section>

              <section className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <section className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </section>
              </section>

              <section className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {sessionData && (
                  <Menu as="div" className="relative ml-3">
                    <section>
                      <MenuButton>
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={sessionData.user!.image!}
                          alt=""
                        />
                      </MenuButton>
                    </section>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <MenuItem>
                          {({ focus }) => (
                            <a
                              href="#"
                              className={classNames(
                                focus ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ focus }) => (
                            <a
                              href="#"
                              className={classNames(
                                focus ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ focus }) => (
                            <button
                              type="button"
                              className={classNames(
                                focus ? "bg-gray-100" : "",
                                "block w-full px-4 py-2 text-left text-sm text-gray-700"
                              )}
                              onClick={() => signOut()}
                            >
                              Sign out
                            </button>
                          )}
                        </MenuItem>
                      </MenuItems>
                    </Transition>
                  </Menu>
                )}
              </section>
            </section>
          </section>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
