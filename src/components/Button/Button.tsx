import { FunctionComponent, ReactNode } from "react";
interface ButtonOptions {
  variant: "outlined" | "normal";
}

interface ButtonProps {
  //objetos:
  options?: ButtonOptions;
  theme?: "dark " | "light";
  onClick?: () => void;
  children: ReactNode;
}

// const MyButton: FunctionComponent<ButtonProps> = () => {
//   <button></button>;
// };

// export default MyButton;
