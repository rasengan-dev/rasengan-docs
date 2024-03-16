import { useTheme as useDefaultTheme } from "nextra-theme-docs";
import { useMemo } from "react";

export default function useTheme() {
  // Using theme
  const { resolvedTheme: theme } = useDefaultTheme();

  const isDark = useMemo(() => {
    return theme === "dark";
  }, [theme]);

  return { isDark }
}
