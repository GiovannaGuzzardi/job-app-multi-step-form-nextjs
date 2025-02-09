import { cn } from "@/lib/utils";
import { cva } from "cva";

type propsCircle = {
  step: number;
  currentIndex: number;
};

const buttonStyles = cva({
  base: [
    "border-4 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center select-none",
  ],
  variants: {
    active: {
      current: "text-blue-500 border-blue-600",
      prev: "text-white bg-blue-600 border-blue-600 ",
      next: "text-black",
    },
  },
});

// current é o meu component e step a etapa que vc esta
export const StepProgressComponent = ({ step, currentIndex }: propsCircle) => {
  const active: "current" | "prev" | "next" =
    currentIndex < step ? "prev" : step == currentIndex ? "current" : "next";

  return (
    <div className="w-full flex items-center">
      <div className="max-w-2xl">
        <div className={cn(buttonStyles({ active }))}>
          <div className="text-base">{currentIndex}</div>
        </div>
      </div>
      {/* linha de conexão */}
      {currentIndex != 4 && (
        <div
          className={cn(
            "h-1 w-full",
            active == "prev" ? "bg-blue-600" : "bg-neutral-200"
          )}
        />
      )}
    </div>
  );
};
