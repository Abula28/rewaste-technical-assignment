import React from "react";
import type { CheckboxI } from ".";

const Checkbox: React.FC<CheckboxI> = ({
  checked,
  onChange,
  label,
  disabled = false,
  error,
  className = "",
}) => {
  const handleClick = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <div className={`${className}`}>
      <div
        onClick={handleClick}
        className={`
          flex items-start gap-2 cursor-pointer
          ${disabled ? "cursor-not-allowed opacity-50" : ""}
        `}
      >
        <div className="relative flex items-center">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            disabled={disabled}
            className={`
              peer h-5 w-5 cursor-pointer appearance-none rounded-md
              border-2 border-border-color bg-dark-bg
              checked:border-primary-blue checked:bg-primary-blue
              disabled:cursor-not-allowed disabled:opacity-50
              focus:outline-none focus:ring-2 focus:ring-primary-blue/20
            `}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-white opacity-0 peer-checked:opacity-100">
            <svg
              className="h-3 w-3"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {label && (
          <label
            className={`
              text-sm text-white select-none
              ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
            `}
          >
            {label}
          </label>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Checkbox;
