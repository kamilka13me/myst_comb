import React, { useState } from "react";
import { bricksData } from "../helpers/brings-data";
import { FieldError } from "react-hook-form";

interface FallingBricksProps {
  onSelect: (text: string[]) => void;
  clearSelection: boolean;
  error?: FieldError | undefined;
  title?: string;
}

const FallingBricks: React.FC<FallingBricksProps> = ({
  onSelect,
  clearSelection,
  error,
  title,
}) => {
  const [selectedBricks, setSelectedBricks] = useState<Set<number>>(new Set());

  React.useEffect(() => {
    if (clearSelection) {
      setSelectedBricks(new Set());
      onSelect([]);
    }
  }, [clearSelection, onSelect]);

  const toggleBrickSelection = (index: number, text: string) => {
    setSelectedBricks((prevSelected) => {
      const updatedSelection = new Set(prevSelected);

      if (updatedSelection.has(index)) {
        updatedSelection.delete(index);
      } else {
        updatedSelection.add(index);
      }

      onSelect(Array.from(updatedSelection).map((i) => bricksData[i].text));
      return updatedSelection;
    });
  };

  return (
    <>
      <div className="mb-6 w-full">
        <h2 className="flex justify-start text-[24px] mb-[14px]">
          {title}
        </h2>
        {error && <p className="text-red-500 text-xs mb-2">{error.message}</p>}
        <div className="flex flex-wrap gap-[9px]">
          {bricksData.map((brick, index) => (
            <div
              key={brick.text}
              onClick={() => toggleBrickSelection(index, brick.text)}
              className={`flex items-center justify-center font-bold text-[#151515] rounded-lg cursor-pointer transition-opacity duration-300 ease-in-out py-[14px] hover:opacity-80 ${
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
    </>
  );
};

export default FallingBricks;
