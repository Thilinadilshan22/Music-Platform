import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/features/home/HomePage';
import { LoginPage } from '@/features/auth/LoginPage';
import { MusicPage } from '@/features/music/MusicPage';
import { MusicProvider } from '@/contexts/MusicContext';
import { MusicPlayer } from '@/components/player/MusicPlayer';

export default function App() {
    return (
        <MusicProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/music" element={<MusicPage />} />
                </Routes>
                <MusicPlayer />
            </BrowserRouter>
        </MusicProvider>
    );
}
