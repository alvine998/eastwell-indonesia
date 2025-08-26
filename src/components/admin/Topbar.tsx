import { useState, useRef, useEffect } from "react";
import { Bell, User, LogOut } from "lucide-react";

export default function Topbar() {
  const [openNotif, setOpenNotif] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notifRef.current &&
        !notifRef.current.contains(event.target as Node) &&
        userRef.current &&
        !userRef.current.contains(event.target as Node)
      ) {
        setOpenNotif(false);
        setOpenUser(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow flex items-center justify-between px-6 py-3 relative">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <Bell
            className="w-5 h-5 text-gray-600 cursor-pointer"
            onClick={() => setOpenNotif((prev) => !prev)}
          />
          {openNotif && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-100 p-3 z-20">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Notifications
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  New user registered
                </li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  Server maintenance scheduled
                </li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  You have 3 new messages
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* User Dropdown */}
        <div
          className="relative flex items-center gap-2 cursor-pointer"
          ref={userRef}
        >
          <User
            className="w-6 h-6 text-gray-700"
            onClick={() => setOpenUser((prev) => !prev)}
          />
          <span
            className="text-sm text-gray-700"
            onClick={() => setOpenUser((prev) => !prev)}
          >
            Admin
          </span>
          {openUser && (
            <div className="absolute right-0 top-full mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-100 p-2 z-20">
              <button className="w-full flex items-center gap-2 text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded cursor-pointer">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
