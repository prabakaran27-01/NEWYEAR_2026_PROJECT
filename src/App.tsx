import { useState } from 'react';
import Header from './components/layout/Header';
import WelcomeScreen from './components/features/WelcomeScreen';
import RejectionScreen from './components/features/RejectionScreen';
import NextScreen from './components/features/NextScreen';
import GiftScreen from './components/features/GiftScreen';
import PhotoScreen from './components/features/PhotoScreen';
import FinalScreen from './components/features/FinalScreen';

type Screen = 'welcome' | 'rejection' | 'next' | 'gift' | 'photo' | 'final';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  const handleYes = () => {
    setCurrentScreen('next');
  };

  const handleNo = () => {
    setCurrentScreen('rejection');
  };

  const handleBack = () => {
    setCurrentScreen('welcome');
  };

  const handleNext = () => {
    setCurrentScreen('gift');
  };

  const handleGiftClick = () => {
    setCurrentScreen('photo');
  };

  const handleCameraClick = () => {
    setCurrentScreen('final');
  };

  const handleRestart = () => {
    setCurrentScreen('welcome');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {currentScreen === 'welcome' && (
            <WelcomeScreen onYes={handleYes} onNo={handleNo} />
          )}
          {currentScreen === 'rejection' && (
            <RejectionScreen onBack={handleBack} />
          )}
          {currentScreen === 'next' && (
            <NextScreen onNext={handleNext} />
          )}
          {currentScreen === 'gift' && (
            <GiftScreen onGiftClick={handleGiftClick} />
          )}
          {currentScreen === 'photo' && (
            <PhotoScreen onCameraClick={handleCameraClick} />
          )}
          {currentScreen === 'final' && (
            <FinalScreen onRestart={handleRestart} />
          )}
        </div>
      </main>

      <footer className="py-8 text-center text-foreground/50 text-sm">
        <p>Made with love for New Year 2026 💕</p>
      </footer>
    </div>
  );
}

export default App;
