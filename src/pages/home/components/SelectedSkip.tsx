import React from "react";
import type { SelectedSkipI } from "./SelectedSkipT";

const SelectedSkip: React.FC<SelectedSkipI> = ({
  size,
  price_before_vat,
  hire_period_days,
  handleCancel,
  handleOk,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">
          Are you sure you want to book this skip?
        </h2>
        <div className="flex w-full justify-between items-center">
          <span className="text-lg text-gray-400">Size: </span>
          <span className="text-lg text-white">
            {size} Yard{" "}
            <sup className="text-xs text-gray-400">
              ≈ {(size * 0.9144).toFixed(1)} meters
            </sup>
          </span>
        </div>
        <div className="flex w-full justify-between items-center">
          <span className="text-lg text-gray-400">Price: </span>
          <span className="text-2xl font-bold text-primary-blue">
            £{price_before_vat}
          </span>
        </div>
        <div className="flex w-full justify-between items-center">
          <span className="text-lg text-gray-400">Hire Period: </span>
          <span className="text-lg text-white">{hire_period_days} days</span>
        </div>
      </div>

      <div className="flex w-full justify-between items-center gap-3">
        <button
          className="bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] duration-200  px-4 py-2 rounded-md cursor-pointer flex-1"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="bg-primary-blue hover:bg-secondary-blue text-white duration-200 px-4 py-2 rounded-md cursor-pointer flex-1"
          onClick={handleOk}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectedSkip;
