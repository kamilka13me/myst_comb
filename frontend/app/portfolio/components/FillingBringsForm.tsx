import React, { useState } from "react";
import { bricksData } from "../helpers/brings-data";
import { FieldError } from "react-hook-form";

interface FallingBricksProps {
  onSelect: (text: string[]) => void;
  clearSelection: boolean;
  error?: FieldError | undefined;
}

const FallingBricks: React.FC<FallingBricksProps> = ({
  onSelect,
  clearSelection,
  error,
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
      <div className="flex justify-center items-center relative h-[500px] mt-3 mb-2 z-10 overflow-hidden">
        <div className="flex justify-center flex-wrap gap-5 w-full max-w-[1350px]">
          {bricksData.map((brick, index) => (
            <div
              key={brick.text}
              onClick={() => toggleBrickSelection(index, brick.text)}
              className={`flex items-center justify-center font-bold text-[#151515] rounded-lg cursor-pointer transition-opacity duration-300 ease-in-out`}
              style={{
                height: `${brick.height}px`,
                width: `${brick.width}px`,
                backgroundColor: brick.color,
                opacity: selectedBricks.has(index) ? 1 : 0.4,
              }}
            >
              {brick.text}
            </div>
          ))}
        </div>
      </div>
      {error && <p className="text-red-500 text-xs mb-2">{error.message}</p>}
    </>
  );
};

export default FallingBricks;
