import { cn } from "@/lib/utils";
import { cva, VariantProps } from "cva";
import { motion } from "motion/react";

const buttonStyles = cva({
  base: [
    "whitespace-nowrap rounded-md p-2 text-white size-auto",
    "inline-flex items-center justify-center",
    "text-sm font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  variants: {
    variant: {
      default: "bg-blue-600 hover:bg-blue-900",
    },
    size: {
      default: "",
    },
    active: {
      false: null,
      true: ["bg-blue-900"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    active: false,
  },
});

// tipo que recebe todas as propriedades padrões de um botão e pode receber propriedades a mais
interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
        classMotion?: string
    }

// react.fc (React.FunctionComponent): tipa o component como uma função que recebe props e retorna um jsx
// recebe filhos e props normalmente
const ButtonBase: React.FC<ButtonBaseProps> = ({
  children,
  className,
  classMotion,
  variant,
  size,
  active,
  ...props
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 1 }}
      className={cn("h-min w-min" , classMotion)}
    >
      <button
        className={cn(buttonStyles({ variant, size, active, className }))}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  );
};

export default ButtonBase;
