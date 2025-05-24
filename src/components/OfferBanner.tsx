
import { Timer, X } from "lucide-react";
import { useState } from "react";

const OfferBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-brand-600 text-white py-2 px-4 text-center relative">
      <div className="container mx-auto flex items-center justify-center gap-2">
        {/* <Timer className="h-4 w-4" /> */}
        {/* <p className="text-sm font-medium">
          <span className="font-bold">48-HOUR FLASH SALE:</span> Get 30% off any annual plan. Offer ends soon!
        </p> */}
        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default OfferBanner;
