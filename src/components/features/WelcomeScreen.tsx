import { Button } from '../ui/button';

interface WelcomeScreenProps {
  onYes: () => void;
  onNo: () => void;
}

export default function WelcomeScreen({ onYes, onNo }: WelcomeScreenProps) {
  return (
    <div className="bg-card rounded-lg p-8 shadow-2xl animate-scale-in">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-48 h-48 relative">
          <img
            src="https://images.unsplash.com/photo-1573865526739-10c1d3a1f0ed?w=400&h=400&fit=crop"
            alt="Cute cat with pink bow"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <div className="w-16 h-1 bg-accent rotate-12"></div>
            <div className="w-12 h-1 bg-accent rotate-12 mt-2"></div>
            <div className="w-14 h-1 bg-accent rotate-12 mt-2"></div>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <div className="w-16 h-1 bg-accent -rotate-12"></div>
            <div className="w-12 h-1 bg-accent -rotate-12 mt-2"></div>
            <div className="w-14 h-1 bg-accent -rotate-12 mt-2"></div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-card-foreground font-serif text-lg">
            hey! i made something for you
          </p>
          <p className="text-card-foreground/70 font-sans">
            Will you see it?
          </p>
        </div>

        <div className="flex gap-4 w-full max-w-xs">
          <Button
            onClick={onYes}
            className="flex-1 bg-card-foreground text-card hover:bg-card-foreground/90 font-medium h-12 rounded-full border-2 border-card-foreground"
          >
            yes
          </Button>
          <Button
            onClick={onNo}
            variant="outline"
            className="flex-1 bg-transparent text-card-foreground border-2 border-card-foreground hover:bg-card-foreground/10 font-medium h-12 rounded-full"
          >
            no
          </Button>
        </div>
      </div>
    </div>
  );
}
