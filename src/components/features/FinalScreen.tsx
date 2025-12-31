import { Button } from '../ui/button';
import { Heart, RotateCcw } from 'lucide-react';

interface FinalScreenProps {
  onRestart: () => void;
}

export default function FinalScreen({ onRestart }: FinalScreenProps) {
  return (
    <div className="bg-card rounded-lg p-8 shadow-2xl animate-scale-in">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="w-64 h-64 relative">
            <img
              src="https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=400&h=400&fit=crop"
              alt="Cat with heart-shaped sunglasses"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary px-6 py-3 rounded-lg shadow-lg border-2 border-card-foreground">
            <p className="text-card-foreground font-serif text-lg whitespace-nowrap">
              I Love You
            </p>
          </div>
        </div>

        <div className="text-center space-y-3 pt-6">
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-accent fill-accent animate-bounce-slow" />
            <p className="text-card-foreground font-serif text-xl">
              Happy New Year 2026!
            </p>
            <Heart className="w-5 h-5 text-accent fill-accent animate-bounce-slow" />
          </div>
          <p className="text-card-foreground/70 font-sans max-w-sm">
            May this year bring you endless joy, love, and beautiful moments!
          </p>
        </div>

        <Button
          onClick={onRestart}
          variant="outline"
          className="mt-4 bg-transparent text-card-foreground border-2 border-card-foreground hover:bg-card-foreground/10 font-medium h-12 px-8 rounded-full"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Start Over
        </Button>
      </div>
    </div>
  );
}
