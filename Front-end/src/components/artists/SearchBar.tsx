import { motion } from 'motion/react';
import { Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

export function SearchBar({ onSearch, placeholder = 'Search for artists...' }: SearchBarProps) {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        // Debounce search
        const timer = setTimeout(() => {
            onSearch(query);
        }, 300);

        return () => clearTimeout(timer);
    }, [query, onSearch]);

    const handleClear = () => {
        setQuery('');
        onSearch('');
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-2xl mx-auto"
        >
            <div
                className={`
                    relative flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border-2 transition-all
                    ${isFocused
                        ? 'border-purple-400 shadow-xl shadow-purple-200/50'
                        : 'border-white/60 hover:border-purple-200'
                    }
                `}
            >
                <Search className={`w-5 h-5 transition-colors ${isFocused ? 'text-purple-600' : 'text-slate-400'}`} />

                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    className="flex-1 bg-transparent outline-none text-slate-900 placeholder-slate-400 font-medium"
                />

                {query && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleClear}
                        className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
                    >
                        <X className="w-4 h-4 text-slate-600" />
                    </motion.button>
                )}
            </div>

            {/* Search Suggestions Placeholder */}
            {query && isFocused && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/60 overflow-hidden"
                >
                    <div className="p-4 text-sm text-slate-500 text-center">
                        Searching for "{query}"...
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}
