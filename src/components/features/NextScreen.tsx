import { Button } from '../ui/button';

interface NextScreenProps {
  onNext: () => void;
}

export default function NextScreen({ onNext }: NextScreenProps) {
  return (
    <div className="bg-card rounded-lg p-8 shadow-2xl animate-scale-in">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-56 h-56 relative">
          <img
            src="https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&h=400&fit=crop"
            alt="Cat laughing with pink bow"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="text-center space-y-2">
          <p className="text-card-foreground font-serif text-lg">
            Hehe!
          </p>
          <p className="text-card-foreground/70 font-sans">
            click below for the surprise!!
          </p>
        </div>

        <Button
          onClick={onNext}
          className="bg-card-foreground text-card hover:bg-card-foreground/90 font-medium h-12 px-12 rounded-full border-2 border-card-foreground"
        >
          next
        </Button>
      </div>
    </div>
  );
}
