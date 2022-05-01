import { FC, ReactNode } from "react";
import cn from "classnames";
import s from "./Button.module.css";

interface IProps {
  type?: "button" | "submit";
  size?: "middle" | "big";
  color: "yellow" | "blue";
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export const Button: FC<IProps> = ({
  type,
  size = "middle",
  color,
  className,
  children,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={cn(
        s.btn,
        size === "big" && s.big,
        color === "blue" && s.blue,
        color === "yellow" && s.yellow,
        className
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
