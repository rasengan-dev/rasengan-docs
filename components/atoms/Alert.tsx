import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "nextra-theme-docs";
import Icon from "@components/atoms/Icon";

type Props = {
  children: React.ReactNode;
  type?: "success" | "error" | "info" | "tip";
};

export default function AlertBox({ children, type }: Props) {
  const { resolvedTheme: theme } = useTheme();

  // Memoization
  const { bgColorName, iconColorName, borderColorName } = useMemo(() => {
    let bgColorName = "";
    let iconColorName = "";
    let borderColorName = "";
    const textColorName = theme === "dark" ? "text-white" : "text-black";

    switch (type) {
      case "success": {
        bgColorName =
          theme === "dark" ? "bg-alert-success-dark" : "bg-alert-success-light";
        iconColorName = "text-alert-success";
        borderColorName = "border-alert-success";

        return {
          bgColorName,
          iconColorName,
          borderColorName,
        };
      }

      case "error": {
        bgColorName =
          theme === "dark" ? "bg-alert-error-dark" : "bg-alert-error-light";
        iconColorName = "text-alert-error";
        borderColorName = "border-alert-error";

        return {
          bgColorName,
          iconColorName,
          borderColorName,
        };
      }

      case "info": {
        bgColorName =
          theme === "dark" ? "bg-alert-info-dark" : "bg-alert-info-light";
        iconColorName = "text-alert-info";
        borderColorName = "border-alert-info";

        return {
          bgColorName,
          iconColorName,
          borderColorName,
        };
      }

      case "tip": {
        bgColorName =
          theme === "dark" ? "bg-alert-warning-dark" : "bg-alert-warning-light";
        iconColorName = "text-alert-warning";
        borderColorName = "border-alert-warning";

        return {
          bgColorName,
          iconColorName,
          borderColorName,
        };
      }

      default: {
        bgColorName =
          theme === "dark" ? "bg-alert-info-dark" : "bg-alert-info-light";
        iconColorName = "text-alert-info";
        borderColorName = "border-alert-info";

        return {
          bgColorName,
          iconColorName,
          borderColorName,
        };
      }
    }
  }, [type, theme]);

  const iconName = useMemo(() => {
    switch (type) {
      case "success":
        return "check-circle-fill";
      case "error":
        return "x-circle-fill";
      case "info":
        return "info-circle-fill";
      case "tip":
        return "lightbulb-fill";
      default:
        return "info-circle-fill";
    }
  }, [type]);


  return (
    <div
      className={twMerge(
        "w-full rounded-lg border-2 px-4 py-2 flex overflow-hidden my-4",
        `${bgColorName} ${borderColorName}`
      )}
    >
      <Icon name={iconName} size={24} className={twMerge("mr-4", iconColorName)} />

      <div className="flex items-center">{children}</div>
    </div>
  );
}
