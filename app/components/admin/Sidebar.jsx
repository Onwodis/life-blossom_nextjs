"use client"

import Link from "next/link";
import {useState,useEffect} from "react";
import { useAppContext } from "../../components/home/myContext";
import { FaSpinner } from "react-icons/fa";


const Sidebar = () => {
  const [first ,setFirst] = useState(true)
  const { api,profile,setData,data ,user,setUser} = useAppContext();
  

  return (
    <div className="d-none d-lg-block">
    
      {user &&user.name ?<aside className="w-64 bg-blue-900 text-white h-full p-6">
      <h2 className="text-2xl font-bold mb-6">Admin account </h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/admindb" className={`${data.db?`bg-blue-700`:``} block ott p-2 text-light hover:bg-blue-900 rounded`}>Dashboard</Link>
          </li>
          <li>
            <Link href="/patients" className={`${data.patient?`bg-blue-700`:``} block ott p-2 text-light hover:bg-blue-900 rounded`}>Patients</Link>
          </li>
          <li>
            <Link href="/nurses" className={`${data.nurses?`bg-blue-700`:``} block ott p-2 text-light hover:bg-blue-900 rounded`}>Nurses</Link>
          </li>
          <li>
            <Link href="/doctors" className={`${data.doctors?`bg-blue-700`:``} block ott p-2 text-light hover:bg-blue-900 rounded`}>Doctors</Link>
          </li>
          <li>
            <Link href="/payments" className={`${data.payments?`bg-blue-700`:``} block ott p-2 text-light hover:bg-blue-900 rounded`}>Payments</Link>
          </li>
        </ul>
      </nav>
    </aside>:""}
    </div>
  );
};

export default Sidebar;
