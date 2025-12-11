import { ReactNode, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';

interface MainLayoutProps {
    children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Check if current page is an auth page (login/signup)
    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation isLoaded={isLoaded} />
            <main className="flex-1">
                {children}
            </main>
            {!isAuthPage && <Footer />}
        </div>
    );
}
