import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import type { SelectI } from "./SelectT";

const Select: React.FC<SelectI> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  error,
  disabled = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`w-full ${className}`} ref={selectRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-200 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <div
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={`
            w-full px-3 py-2 bg-dark-bg border-2 rounded-md
            text-white cursor-pointer flex items-center justify-between
            ${error ? "border-red-500" : "border-border-color"}
            ${
              disabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-primary-blue/50"
            }
            focus:outline-none focus:border-primary-blue
          `}
        >
          <span className="truncate">
            {selectedOption ? (
              selectedOption.render ? (
                selectedOption.render(selectedOption)
              ) : (
                selectedOption.label
              )
            ) : (
              <span className="text-gray-400">{placeholder}</span>
            )}
          </span>
          <IoIosArrowDown
            className={`text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {isOpen && !disabled && (
          <div className="absolute flex flex-col gap-2 z-50 w-full mt-1 bg-dark-bg border-2 border-border-color rounded-md shadow-lg max-h-60 overflow-auto">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`
                  px-3 py-2 cursor-pointer
                  ${
                    value === option.value
                      ? "bg-primary-blue/30"
                      : "hover:bg-primary-blue/5"
                  }
                  ${option.render ? "flex items-center" : ""}
                `}
              >
                {option.render ? option.render(option) : option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Select;
