import { useTheme as useDefaultTheme } from "nextra-theme-docs";
import { useEffect, useMemo, useState } from "react";
import sleep from "utils/sleep";

export default function useTheme() {
  // Using theme
  const {
    resolvedTheme: theme,
    theme: baseTheme,
    setTheme,
    ...rest
  } = useDefaultTheme();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (theme === "dark" || theme === "light") setTheme("system");
    else setTheme("light");
  }, []);

  const isDark = useMemo(() => {
    return theme === "dark";
  }, [theme, refresh]);

  useEffect(() => {
    (async () => {
      await sleep(200);

      setRefresh(true);
    })();
  }, []);

  return {
    isDark,
    theme: baseTheme,
    setTheme,
    themeList: rest.themes,
  };
}
