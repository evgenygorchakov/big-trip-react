import { FC, ReactNode } from "react";
import cn from "classnames";
import s from "./AppContainer.module.css";

interface IProps {
  children: ReactNode;
  className?: string;
}

export const AppContainer: FC<IProps> = ({ children, className }) => {
  return <div className={cn(s.container, className)}>{children}</div>;
};
