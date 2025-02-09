"use client";
import useJobAppStore from "@/store";
import { StepProgressComponent } from "./step_progress_component";

export default function ProgressBar() {
  const { step, getTotalSteps } = useJobAppStore();
  const totalSteps: number = getTotalSteps();
  return (
    <div className="flex justify-between w-3/4 max-w-2xl">
      {[...Array(totalSteps - 1)].map((_, index) => (
        <StepProgressComponent
          step={step}
          currentIndex={index + 1}
          key={`step-${index + 1}`}
        />
      ))}
      <div>
        <StepProgressComponent step={step} currentIndex={totalSteps} />
      </div>
    </div>
  );
}

// [...Array(getTotalSteps()-1)]
//  array(): cria um array vazio de tamanho n
//  ...[Array(4)] converte isso em [undefined, undefined, undefined, undefined]
