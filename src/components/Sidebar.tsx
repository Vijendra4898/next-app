import Link from 'next/link';
import { useRouter } from 'next/router';
import { clsx } from 'clsx';
import {  Home, Info, Mail } from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const sidebarItems: SidebarItem[] = [
  { name: 'Home', href: '/', icon: <Home /> },
  { name: 'About', href: '/about', icon: <Info /> },
  { name: 'Contact', href: '/contact', icon: <Mail /> },
];

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const router = useRouter();

  return (
    <div
      className={clsx(
        'fixed h-full   transition-all duration-300',
        isOpen ? 'w-64' : 'w-16'
      )}
    >
      <ul className="mt-24 space-y-4">
        {sidebarItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={clsx(
                'flex items-center px-4 py-3 space-x-2 hover:text-white hover:bg-blue-300 rounded-md',
                router.pathname === item.href && 'bg-gradient-to-r from-blue-400 via-white-500 to-white-700 text-white'
              )}
            >
              <span>{item.icon}</span>
              {isOpen && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
