import { Button } from '../ui/button';

interface RejectionScreenProps {
  onBack: () => void;
}

export default function RejectionScreen({ onBack }: RejectionScreenProps) {
  return (
    <div className="bg-card rounded-lg p-8 shadow-2xl animate-scale-in">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-56 h-56 relative">
          <img
            src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&h=400&fit=crop"
            alt="Angry cat with bow and gun"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="text-center space-y-3">
          <h2 className="text-card-foreground font-serif text-2xl font-bold uppercase tracking-wide">
            HOW DARE YOU!!
          </h2>
        </div>

        <Button
          onClick={onBack}
          className="bg-card-foreground text-card hover:bg-card-foreground/90 font-medium h-12 px-12 rounded-full border-2 border-card-foreground uppercase tracking-wider"
        >
          BACK
        </Button>
      </div>
    </div>
  );
}
