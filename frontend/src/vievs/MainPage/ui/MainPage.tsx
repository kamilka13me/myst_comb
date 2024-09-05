import { Text } from "@/shared/ui/Text";
import React from "react";

export const MainPage: React.FC = () => {
  return (
    <div className="bg-white mt-10">
      <h1>Welcome to the Main Page</h1>
      <Text
        Tag="h1"
        textType="Desktop/H1"
        text="Незалежній"
        color="base/text_accent"
        font="serif"
      />
      <p className="text-base-text_accent">This is the main page of the site.</p>
    </div>
  );
};
