"use client";

import { FieldError } from "react-hook-form";
import useMediaQuery from "../../../app/portfolio/hooks/useMediaQuery";
import { useEffect, useState } from "react";

interface BrickData {
  text: string;
  width: number;
  color: string;
}

interface FallingBricksProps {
  onSelect: (text: string[]) => void;
  clearSelection: boolean;
  error?: FieldError | undefined;
  title?: string;
  data: BrickData[];
  dataPhone: BrickData[];
}

const FallingBricks: React.FC<FallingBricksProps> = ({
  onSelect,
  clearSelection,
  error,
  title,
  data,
  dataPhone,
}) => {
  const [selectedBricks, setSelectedBricks] = useState<Set<number>>(new Set());
  const isPhone = useMediaQuery("(max-width: 640px)");

  useEffect(() => {
    if (clearSelection) {
      setSelectedBricks(new Set());
      onSelect([]);
    }
  }, [clearSelection, onSelect]);

  // Функція для обробки вибору/зняття вибору цеглинки
  const toggleBrickSelection = (index: number, text: string) => {
    setSelectedBricks((prevSelected) => {
      const updatedSelection = new Set(prevSelected);

      if (updatedSelection.has(index)) {
        updatedSelection.delete(index);
      } else {
        updatedSelection.add(index);
      }

      onSelect(
        Array.from(updatedSelection).map((i) =>
          isPhone ? dataPhone[i].text : data[i].text
        )
      );
      return updatedSelection;
    });
  };

  // Визначаємо дані для телефону або десктопа
  const bricks = isPhone ? dataPhone : data;

  return (
    <div className="mb-6 w-full">
      {title && (
        <h2 className="flex justify-start text-[24px] text-base-bg-block mb-[14px]">
          {title}
        </h2>
      )}
      {error && <p className="text-red-500 text-xs mb-2">{error.message}</p>}

      <div className="flex justify-center flex-wrap gap-[9px]">
        {bricks.map((brick, index) => (
          <div
            key={brick.text}
            onClick={() => toggleBrickSelection(index, brick.text)}
            className={`flex items-center justify-center font-bold text-base-text_accent rounded-lg cursor-pointer transition-opacity duration-300 ease-in-out py-[14px] hover:opacity-80 ${
              selectedBricks.has(index) ? "opacity-100" : "opacity-40"
            }`}
            style={{
              width: `${brick.width}px`,
              backgroundColor: brick.color,
            }}
          >
            {brick.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FallingBricks;
