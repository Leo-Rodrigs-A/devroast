"use client";

import { useState } from "react";
import { Toggle } from "@/components/ui";

export function HomeRoastToggle() {
  const [isRoastEnabled, setIsRoastEnabled] = useState(false);

  return (
    <Toggle
      checked={isRoastEnabled}
      onCheckedChange={setIsRoastEnabled}
      label="roast mode"
    />
  );
}
