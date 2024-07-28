import { useTheme as useThemeState } from "@utils/state";
import { useEffect } from "react";

export default function useTheme(listen = false) {
  const { theme, setTheme } = useThemeState();

  useEffect(() => {
    if (!listen) return;

    if (theme == "DARK") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [theme]);

  function toggleTheme() {
    setTheme(theme == "DARK" ? "LIGHT" : "DARK");
  }

  return { theme, toggleTheme };
}
