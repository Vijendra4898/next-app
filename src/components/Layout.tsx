import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { clsx } from 'clsx';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

    return (
        <div className="flex h-screen">
          
            <Sidebar isOpen={isSidebarOpen} />
            <div
                className={clsx(
                    'flex-1 border border-blue-400 border-opacity-25 transition-all duration-300',
                    isSidebarOpen ? 'ml-16 md:ml-64' : 'ml-16'
                )}
            >
                <Navbar toggleSidebar={toggleSidebar} />
                <main className="mt-24 p-4 flex justify-center">{children}</main>
            </div>
        </div>
    );
}
