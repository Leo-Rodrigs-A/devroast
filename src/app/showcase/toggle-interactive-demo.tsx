"use client";

import { useState } from "react";
import { Toggle } from "@/components/ui";

export function ToggleInteractiveDemo() {
  const [isEnabled, setIsEnabled] = useState(false);

  return <Toggle checked={isEnabled} onCheckedChange={setIsEnabled} />;
}
