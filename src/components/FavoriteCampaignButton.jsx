"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export default function FavoriteCampaignButton({ title }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      type="button"
      aria-label={`${isFavorite ? "Remove" : "Save"} ${title} ${
        isFavorite ? "from" : "to"
      } favorites`}
      aria-pressed={isFavorite}
      onClick={() => setIsFavorite((favorite) => !favorite)}
      className={`absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition ${
        isFavorite ? "text-rose-500" : "text-slate-500 hover:text-rose-500"
      }`}
    >
      <Heart size={14} fill={isFavorite ? "currentColor" : "none"} />
    </button>
  );
}
