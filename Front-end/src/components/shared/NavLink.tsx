import { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  label: string;
}

const routes: Record<string, string> = {
  'Home': '/',
  'Music': '/music',
  'Videos': '/videos',
  'Events': '/events',
  'Artists': '/artists'
};

export function NavLink({ label }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const route = routes[label] || '/';

  // Check if this link is active (current page)
  const isActive = location.pathname === route;

  return (
    <Link to={route}>
      <div
        className="relative cursor-pointer px-4 py-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className={`font-semibold transition-colors ${isActive
            ? 'text-purple-700'
            : 'text-slate-700 hover:text-purple-700'
          }`}>
          {label}
        </span>

        {/* Animated underline - always visible when active */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: (isHovered || isActive) ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 origin-center rounded-full"
        />
      </div>
    </Link>
  );
}
