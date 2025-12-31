interface GiftScreenProps {
  onGiftClick: () => void;
}

export default function GiftScreen({ onGiftClick }: GiftScreenProps) {
  return (
    <div className="bg-card rounded-lg p-8 shadow-2xl animate-scale-in">
      <div className="flex flex-col items-center space-y-6">
        <button
          onClick={onGiftClick}
          className="w-64 h-64 relative group cursor-pointer transition-transform hover:scale-105"
        >
          <img
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop"
            alt="Cute kitten with flowers and gift"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 rounded-2xl transition-colors"></div>
        </button>

        <div className="text-center space-y-2">
          <p className="text-card-foreground font-serif text-xl text-accent">
            Happy new year my kuchupuchu!!!
          </p>
          <p className="text-card-foreground/70 font-sans">
            click on the gift box
          </p>
        </div>
      </div>
    </div>
  );
}
