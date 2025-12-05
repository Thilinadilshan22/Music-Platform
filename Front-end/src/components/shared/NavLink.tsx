import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

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
  const route = routes[label] || '/';

  return (
    <Link to={route}>
      <div
        className="relative cursor-pointer px-4 py-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="text-slate-700 font-semibold transition-colors hover:text-purple-700">
          {label}
        </span>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 origin-center rounded-full"
        />
      </div>
    </Link>
  );
}
