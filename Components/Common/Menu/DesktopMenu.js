/* eslint-disable @next/next/no-img-element */
import { Fragment , useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { UserIcon, BellIcon } from "@heroicons/react/outline";

import Image from "next/image";

const navigation = [
  { name: "صفحه اصلی", href: "#", current: true },
  { name: "محصولات", href: "#", current: false },
  { name: "دسته بندی ها", href: "#", current: false },
  { name: "درباره ما", href: "#", current: false },
  { name: "تماس با ما", href: "#", current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DesktopMenu() {
  const [sticky , setSticky] = useState(false)
  return (
    <>
      <Disclosure as="nav" className={sticky? "sticky top-0" : ""}>
        {({ open }) => (
          <>
            <div className="mx-auto container ">
              <div className="relative flex items-center justify-between mx-auto h-20">
                <div className="flex items-center justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    {/* <Image
                      width={128}
                      height={96}
                      priority
                      className="block"
                      src={logo}
                      alt="Workflow"
                      wersdfintrgsefdscxi sga g
                    /> */}
                    MENS FASHION
                  </div>
                </div>
                <div className="">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-amber-500 "
                            : "text-gray-600 hover:text-gray-400",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="absolute space-x-2 inset-y-0 flex items-center sm:static sm:inset-auto">
                  <button
                    type="button"
                    className="p-2 ml-2 bg-white rounded-full text-gray-600 hover:bg-gray-100 "
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <div>
                      <Menu.Button className="p-2 bg-white rounded-full text-gray-600 hover:bg-gray-100 ">
                        <span className="sr-only">Open user menu</span>
                        <UserIcon className="h-6 w-6" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-letf z-50 absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              حساب کاربری
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              تنظیمات
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              خروج
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  {/* Login Button */}

                  <button className="py-2 px-4 bg-gray-900 border-transparent text-white hover:bg-gray-600">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
}
