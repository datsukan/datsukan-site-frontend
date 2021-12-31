import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export const ColorThemeToggleButton = () => {
  const size = 20;

  const { theme, setTheme } = useTheme();

  // レンダー後かを判定
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    return setIsMounted(true);
  }, []);

  const isDarkMode = () => {
    return theme === "dark";
  };

  const handleToggle = () => {
    setTheme(isDarkMode() ? "light" : "dark");
  };

  return (
    <div className="flex items-center">
      <BiSun size={size} />
      {isMounted && (
        <Switch
          checked={isDarkMode()}
          onChange={handleToggle}
          className="inline-flex relative items-center mx-1 w-11 h-6 bg-gray-300 rounded-full"
        >
          <span className="sr-only">Toggle color theme.</span>
          <span
            className={`${
              isDarkMode() ? "translate-x-6 bg-zinc-900" : "translate-x-1 bg-white"
            } inline-block w-4 h-4 transform rounded-full`}
          />
        </Switch>
      )}
      <BiMoon size={size} />
    </div>
  );
};
