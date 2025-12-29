import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/features/home/HomePage';
import { LoginPage } from '@/features/auth/LoginPage';
import { MusicPage } from '@/features/music/MusicPage';
import { VideoPage } from '@/features/videos/VideoPage';
import { EventsPage } from '@/features/events/EventsPage';
import { ArtistsPage } from '@/features/artists/ArtistsPage';
import { PrivacyPolicyPage } from '@/features/legal/PrivacyPolicyPage';
import { TermsOfServicePage } from '@/features/legal/TermsOfServicePage';
import { CookiePolicyPage } from '@/features/legal/CookiePolicyPage';
import { MusicProvider } from '@/contexts/MusicContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { MusicPlayer } from '@/components/player/MusicPlayer';
import { MainLayout } from '@/components/shared/MainLayout';
import { ScrollToTop } from '@/components/shared/ScrollToTop';

export default function App() {
    return (
        <ThemeProvider>
            <MusicProvider>
                <BrowserRouter>
                    <ScrollToTop />
                    <MainLayout>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/music" element={<MusicPage />} />
                            <Route path="/videos" element={<VideoPage />} />
                            <Route path="/events" element={<EventsPage />} />
                            <Route path="/artists" element={<ArtistsPage />} />
                            <Route path="/privacy" element={<PrivacyPolicyPage />} />
                            <Route path="/terms" element={<TermsOfServicePage />} />
                            <Route path="/cookies" element={<CookiePolicyPage />} />
                        </Routes>
                        <MusicPlayer />
                    </MainLayout>
                </BrowserRouter>
            </MusicProvider>
        </ThemeProvider>
    );
}
