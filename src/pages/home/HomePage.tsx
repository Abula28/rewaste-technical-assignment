import { useEffect, useState } from "react";
import type { GetSkipsReqI } from "@/api";
import { getSkips } from "@/api/requests";
import { Card, Select } from "@/components";
import Modal from "@/components/common/modal/Modal";
import { SelectedSkip } from "./components";

const HomePage = () => {
  const [skips, setSkips] = useState<GetSkipsReqI[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [sort, setSort] = useState<string>("");
  const [onRoad, setOnRoad] = useState<"road" | "off-road" | "all">("all");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedSkip, setSelectedSkip] = useState<GetSkipsReqI>();

  useEffect(() => {
    setLoading(true);
    getSkips()
      .then(setSkips)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (onRoad === "road") {
      setLoading(true);
      getSkips()
        .then((e) => setSkips(e.filter((skip) => skip.allowed_on_road)))
        .finally(() => setLoading(false));
    } else if (onRoad === "off-road") {
      setLoading(true);
      getSkips()
        .then((e) => setSkips(e.filter((skip) => !skip.allowed_on_road)))
        .finally(() => setLoading(false));
    } else {
      setLoading(true);
      getSkips()
        .then(setSkips)
        .finally(() => setLoading(false));
    }
  }, [onRoad]);

  const handleSort = (value: string) => {
    setSort(value);
    setSkips((prev) => {
      if (value === "yard-asc") {
        return [...prev].sort((a, b) => a.size - b.size);
      }
      if (value === "yard-desc") {
        return [...prev].sort((a, b) => b.size - a.size);
      }
      if (value === "price-asc") {
        return [...prev].sort(
          (a, b) => a.price_before_vat - b.price_before_vat
        );
      }
      if (value === "price-desc") {
        return [...prev].sort(
          (a, b) => b.price_before_vat - a.price_before_vat
        );
      }
      if (value === "days-asc") {
        return [...prev].sort(
          (a, b) => a.hire_period_days - b.hire_period_days
        );
      }

      return [...prev].sort((a, b) => b.hire_period_days - a.hire_period_days);
    });
  };

  const handleCheckClick = (val: string) => {
    setOnRoad(val as "road" | "off-road" | "all");
  };

  const handleReset = () => {
    setSort("");
    setOnRoad("all");
    setLoading(true);
    getSkips()
      .then(setSkips)
      .finally(() => setLoading(false));
  };

  const handleSelect = (id: number) => {
    setIsOpen(true);
    setSelectedSkip(skips.find((skip) => skip.id === id));
  };

  const handleCancel = () => {
    setIsOpen(false);
    setSelectedSkip(undefined);
  };

  const handleOk = () => {
    setIsOpen(false);
    setSelectedSkip(undefined);
  };

  return (
    <>
      {selectedSkip && (
        <Modal
          isOpen={isOpen}
          onClose={handleCancel}
          title="Info"
          size="medium"
        >
          <SelectedSkip
            {...selectedSkip}
            handleCancel={handleCancel}
            handleOk={handleOk}
          />
        </Modal>
      )}
      <div className="w-full px-4">
        <div className="max-w-7xl w-full mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4 pt-10">
            <h2 className="text-2xl font-bold text-center ">
              Choose Your Skip Size
            </h2>
            <p className="text-center text-gray-400 ">
              Select the size that best fits your needs.
            </p>
          </div>

          <div className="flex gap-6 md:items-end md:flex-row flex-col">
            <div className="md:max-w-44 w-full">
              <Select
                options={[
                  {
                    value: "yard-asc",
                    label: "Yard: low to high",
                  },
                  {
                    value: "yard-desc",
                    label: "Yard: high to low",
                  },
                  {
                    value: "price-asc",
                    label: "Price: low to high",
                  },
                  {
                    value: "price-desc",
                    label: "Price: high to low",
                  },
                  {
                    value: "days-asc",
                    label: "Days: low to high",
                  },
                  {
                    value: "days-desc",
                    label: "Days: high to low",
                  },
                ]}
                value={sort}
                onChange={handleSort}
                placeholder="Sort By:"
                label="Sort"
              />
            </div>

            <div className="md:max-w-44 w-full">
              <Select
                options={[
                  { value: "all", label: "All" },
                  { value: "road", label: "Allowed On Road" },
                  { value: "off-road", label: "Not allowed on road" },
                ]}
                value={onRoad}
                onChange={handleCheckClick}
                placeholder="Filter By:"
                label="Filter"
              />
            </div>

            <button
              className="bg-primary-blue text-white px-4 py-2 rounded-md cursor-pointer"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>

          {loading ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-10 h-10 border-t-2 border-b-2 border-primary-blue rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skips.map((skip) => (
                <Card key={skip.id} {...skip} handleSelect={handleSelect} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
