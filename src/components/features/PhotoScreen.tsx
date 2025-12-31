interface PhotoScreenProps {
  onCameraClick: () => void;
}

export default function PhotoScreen({ onCameraClick }: PhotoScreenProps) {
  return (
    <div className="bg-card rounded-lg p-8 shadow-2xl animate-scale-in">
      <div className="flex flex-col items-center space-y-6">
        <button
          onClick={onCameraClick}
          className="w-64 h-64 relative group cursor-pointer transition-transform hover:scale-105"
        >
          <img
            src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=400&h=400&fit=crop"
            alt="Cat with camera"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 rounded-2xl transition-colors"></div>
        </button>

        <div className="text-center space-y-2">
          <p className="text-card-foreground font-serif text-2xl font-bold uppercase tracking-wide">
            SMILEEEEE
          </p>
          <p className="text-card-foreground/70 font-sans">
            Click on the camera to reveal photo!!
          </p>
        </div>
      </div>
    </div>
  );
}
