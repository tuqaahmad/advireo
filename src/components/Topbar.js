import { Disclosure } from "@headlessui/react";
import logo from "../assets/images/transparent.png";

const navigation = [
  { name: "Existing Client", href: "/home", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Topbar() {
  return (
    <Disclosure as="nav" className="bg-gray-50 shadow-2xl shadow-inner  ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20 ">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="hidden lg:block h-12 px-2 w-auto"
                src={logo}
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:my-6 sm:mx-8">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-red-900 text-white"
                        : "text-black hover:bg-red-700 hover:text-white",
                      "px-3 py-2 rounded-md text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
