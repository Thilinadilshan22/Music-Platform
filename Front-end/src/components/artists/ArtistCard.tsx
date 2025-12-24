import { motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Play, Music2, Users, CheckCircle } from 'lucide-react';
import { Artist, formatFollowers } from '@/data/artistsData';

interface ArtistCardProps {
    artist: Artist;
    index: number;
}

export function ArtistCard({ artist, index }: ArtistCardProps) {
    const [isFollowing, setIsFollowing] = useState(artist.isFollowing || false);
    const navigate = useNavigate();

    const handleFollowClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsFollowing(!isFollowing);
    };

    const handleTracksClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigate(`/music?artist=${encodeURIComponent(artist.name)}`);
    };

    const getTrendingBadge = () => {
        if (artist.trending) {
            return (
                <div className="absolute top-3 right-3 z-10 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1 animate-pulse">
                    🔥 Trending
                </div>
            );
        }
        if (artist.risingStar) {
            return (
                <div className="absolute top-3 right-3 z-10 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1">
                    ⭐ Rising Star
                </div>
            );
        }
        return null;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-white/60 dark:border-slate-700/60 transition-all cursor-pointer theme-transition"
        >
            {getTrendingBadge()}

            {/* Artist Profile Section */}
            <div className="relative p-6">
                {/* Profile Image */}
                <div className="relative mx-auto w-32 h-32 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                    <img
                        src={artist.profileImage}
                        alt={artist.name}
                        className="relative w-full h-full rounded-full object-cover ring-4 ring-white dark:ring-slate-800 shadow-xl group-hover:ring-purple-300 dark:group-hover:ring-purple-700 transition-all"
                    />
                    {artist.verified && (
                        <div className="absolute bottom-1 right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-slate-800 shadow-lg">
                            <CheckCircle className="w-5 h-5 text-white fill-current" />
                        </div>
                    )}
                </div>

                {/* Artist Info */}
                <div className="text-center mb-4">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1 line-clamp-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all">
                        {artist.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 font-semibold mb-2">{artist.primaryGenre}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">📍 {artist.country}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 text-center theme-transition">
                        <Users className="w-4 h-4 text-purple-600 dark:text-purple-400 mx-auto mb-1" />
                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">Followers</div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                            {formatFollowers(artist.stats.followers)}
                        </div>
                    </div>
                    <div
                        onClick={handleTracksClick}
                        className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 text-center theme-transition cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all hover:scale-105"
                    >
                        <Music2 className="w-4 h-4 text-pink-600 dark:text-pink-400 mx-auto mb-1" />
                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">Tracks</div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                            {artist.stats.totalTracks}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mb-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleFollowClick}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold transition-all shadow-md ${isFollowing
                            ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
                            : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                            }`}
                    >
                        <Heart
                            className={`w-4 h-4 ${isFollowing ? 'fill-current' : ''}`}
                        />
                        {isFollowing ? 'Following' : 'Follow'}
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2.5 bg-white dark:bg-slate-800 border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 rounded-xl font-bold text-purple-600 dark:text-purple-400 transition-all shadow-md"
                    >
                        <Play className="w-4 h-4" />
                    </motion.button>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-2">
                    {artist.socialLinks.spotify && (
                        <a
                            href={artist.socialLinks.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 bg-slate-100 hover:bg-green-500 rounded-full flex items-center justify-center transition-all group/icon"
                        >
                            <svg className="w-4 h-4 text-slate-600 group-hover/icon:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                            </svg>
                        </a>
                    )}
                    {artist.socialLinks.soundcloud && (
                        <a
                            href={artist.socialLinks.soundcloud}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 bg-slate-100 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all group/icon"
                        >
                            <svg className="w-4 h-4 text-slate-600 group-hover/icon:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.104.089.061 0 .096-.04.103-.089l.18-1.308-.201-1.332c0-.055-.044-.094-.104-.094m1.83-.956c-.077 0-.129.055-.138.135l-.167 1.482.167 1.445c.009.08.062.139.138.139.075 0 .127-.056.136-.139l.197-1.445-.197-1.482c-.009-.08-.061-.135-.136-.135m.917-.537c-.061 0-.124.062-.133.127l-.18 2.023.18 1.953c.009.065.072.133.133.133.064 0 .117-.062.127-.133l.211-1.953-.211-2.023c-.01-.059-.063-.127-.127-.127m.993.016c-.088 0-.159.087-.161.171l-.169 1.908.169 1.855c.002.084.073.171.161.171.085 0 .149-.081.156-.171l.196-1.855-.196-1.909c-.007-.084-.071-.17-.156-.17m.984.053c-.097 0-.177.087-.19.177l-.159 1.822.159 1.745c.013.094.093.181.19.181.099 0 .171-.087.185-.181l.184-1.745-.184-1.822c-.014-.09-.086-.177-.185-.177m1.013.036c-.121 0-.212.101-.223.199l-.151 1.706.151 1.643c.011.101.102.2.223.2.123 0 .211-.099.225-.2l.177-1.643-.177-1.706c-.014-.098-.102-.199-.225-.199m1.008.01c-.132 0-.228.111-.235.199l-.09 1.542.09 1.484c.007.088.103.199.235.199.111 0 .213-.086.217-.199l.084-1.484-.084-1.542c-.004-.114-.106-.199-.217-.199m1.027 0c-.143 0-.264.107-.264.199l-.064 1.542.064 1.484c0 .092.121.199.264.199.141 0 .246-.107.246-.199l.074-1.484-.074-1.542c0-.092-.105-.199-.246-.199m1.015 0c-.153 0-.274.107-.278.199l-.049 1.542.049 1.484c.004.092.125.199.278.199.151 0 .253-.107.258-.199l.056-1.484-.056-1.542c-.005-.092-.107-.199-.258-.199m1.03 0c-.169 0-.289.107-.293.199l-.044 1.542.044 1.484c.004.092.124.199.293.199.175 0 .288-.107.293-.199l.051-1.484-.051-1.542c-.005-.092-.118-.199-.293-.199m1.023 0c-.163 0-.298.107-.304.199l-.036 1.542.036 1.484c.006.092.141.199.304.199.176 0 .293-.107.305-.199l.039-1.484-.039-1.542c-.012-.092-.129-.199-.305-.199m1.035 0c-.187 0-.31.107-.315.199l-.029 1.542.029 1.484c.005.092.128.199.315.199.177 0 .29-.107.304-.199l.033-1.484-.033-1.542c-.014-.092-.127-.199-.304-.199m1.052 0c-.193 0-.314.107-.321.199l-.022 1.542.022 1.484c.007.092.128.199.321.199.183 0 .303-.107.315-.199l.027-1.484-.027-1.542c-.012-.092-.132-.199-.315-.199m1.034 0c-.194 0-.318.107-.323.199l-.015 1.542.015 1.484c.005.092.129.199.323.199.181 0 .302-.107.315-.199l.019-1.484-.019-1.542c-.013-.092-.134-.199-.315-.199m1.055 0c-.195 0-.319.107-.324.199l-.009 1.542.009 1.484c.005.092.129.199.324.199.188 0 .315-.107.323-.199l.011-1.484-.011-1.542c-.008-.092-.135-.199-.323-.199M22.9 12.805c-.163 0-.299.107-.306.199l-.005 1.542.005 1.484c.007.092.143.199.306.199.181 0 .304-.107.313-.199l.007-1.484-.007-1.542c-.009-.092-.132-.199-.313-.199" />
                            </svg>
                        </a>
                    )}
                    {artist.socialLinks.instagram && (
                        <a
                            href={artist.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 bg-slate-100 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all group/icon"
                        >
                            <svg className="w-4 h-4 text-slate-600 group-hover/icon:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                            </svg>
                        </a>
                    )}
                    {artist.socialLinks.youtube && (
                        <a
                            href={artist.socialLinks.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 bg-slate-100 hover:bg-red-600 rounded-full flex items-center justify-center transition-all group/icon"
                        >
                            <svg className="w-4 h-4 text-slate-600 group-hover/icon:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                    )}
                    {artist.socialLinks.twitter && (
                        <a
                            href={artist.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 bg-slate-100 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all group/icon"
                        >
                            <svg className="w-4 h-4 text-slate-600 group-hover/icon:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
