import React from "react";
import type { CardI } from "./CardT";

const Card: React.FC<CardI> = ({
  id,
  size,
  hire_period_days,
  price_before_vat,
  allowed_on_road,
  handleSelect,
}) => {
  return (
    <div
      className="group relative rounded-lg border-2 p-4 md:p-6 transition-all
        border-border-color hover:border-primary-blue/50
        bg-dark-bg text-white"
    >
      <div className="relative">
        {!allowed_on_road && (
          <div className="absolute bottom-3 left-2 z-20 space-y-2">
            <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
              <span className="text-xs font-medium text-yellow-500">
                Not Allowed On The Road
              </span>
            </div>
          </div>
        )}

        <img
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${size}-yarder-skip.jpg`}
          alt={`${size} Yard Skip`}
          className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
        />
      </div>

      <div className="flex items-center gap-1">
        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
          {size} Yard Skip
        </h3>
        <sup className="text-xs text-gray-400">
          ≈ {(size * 0.9144).toFixed(1)} meters
        </sup>
      </div>
      <p className="text-sm text-gray-400 mb-4 md:mb-6">
        {hire_period_days} day hire period
      </p>
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-xl md:text-2xl font-bold text-primary-blue">
            £{price_before_vat}
          </span>
        </div>
      </div>
      <button
        className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2 bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] cursor-pointer"
        onClick={() => handleSelect(id)}
      >
        <span>Select This Skip</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right w-4 h-4"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default Card;
