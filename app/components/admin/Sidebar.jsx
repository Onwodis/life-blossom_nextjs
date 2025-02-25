import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-900 text-white h-full p-6">
      <h2 className="text-2xl font-bold mb-6">Life Blossom Admin</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="block p-2 hover:bg-blue-700 rounded">Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/users" className="block p-2 hover:bg-blue-700 rounded">Users</Link>
          </li>
          <li>
            <Link href="/dashboard/reports" className="block p-2 hover:bg-blue-700 rounded">Reports</Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className="block p-2 hover:bg-blue-700 rounded">Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
