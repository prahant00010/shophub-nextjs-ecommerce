"use client";

import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Search products...",
  className = "",
}: SearchBarProps) {
  const [localValue, setLocalValue] = useState(value);
  const debouncedValue = useDebounce(localValue, 300);
  const isFocusedRef = useRef(false);
  const lastEmittedRef = useRef(value);

  // Sync from URL only when the user is not actively typing
  useEffect(() => {
    if (!isFocusedRef.current && value !== lastEmittedRef.current) {
      setLocalValue(value);
      lastEmittedRef.current = value;
    }
  }, [value]);

  // Emit debounced value to parent (URL)
  useEffect(() => {
    if (debouncedValue !== lastEmittedRef.current) {
      lastEmittedRef.current = debouncedValue;
      onChange(debouncedValue);
    }
  }, [debouncedValue, onChange]);

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/80" />
      <input
        type="search"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        onFocus={() => {
          isFocusedRef.current = true;
        }}
        onBlur={() => {
          isFocusedRef.current = false;
          if (localValue !== value) {
            lastEmittedRef.current = localValue;
            onChange(localValue);
          }
        }}
        placeholder={placeholder}
        className="w-full rounded-md border border-white/30 bg-[#0d59a2] py-2 pl-10 pr-4 text-sm text-white placeholder-white/70 shadow-sm focus:bg-[#0c5194] focus:outline-none focus:ring-1 focus:ring-white/50"
        aria-label="Search products"
      />
    </div>
  );
}
