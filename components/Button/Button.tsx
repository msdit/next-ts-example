import { FC, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface IButtonProps extends ButtonHTMLAttributes<Element> {
  variant?: "bordered" | "filled";
  color?: "primary" | "secondary";
}

const Button: FC<IButtonProps> = (props) => {
  const {
    variant = "filled",
    color = "primary",
    className,
    children,
    ...restProps
  } = props;

  const classes = `${styles["btn-base"]} ${
    styles[`btn-${variant}-${color}`]
  } ${className}`;

  return (
    <button className={classes} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
