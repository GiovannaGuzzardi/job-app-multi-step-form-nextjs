"use client";
export default function Home() {
  const { step } = useJobAppStore();
  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <ExperienteInfo />;
      case 3:
        return <EducationBackground />;
      case 4:
        return <ReviewSubmit />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center p-2 ">
      <div className="bg-gray-100  rounded-md p-3 w-full flex justify-center flex-col items-center gap-3">
        <div className=" text-2xl sm:text-3xl font-semibold text-center">
          Aplicação de serviço
        </div>
        <ProgressBar />
        <div className="w-full">{renderStep()}</div>
      </div>
    </div>
  );
}

import PersonalInfo from "@/components/multi_step_form/personal_info";
import EducationBackground from "@/components/multi_step_form/education_background";
import ExperienteInfo from "@/components/multi_step_form/experience_info";
import useJobAppStore from "@/store";
import ReviewSubmit from "@/components/multi_step_form/review_submit";
import ProgressBar from "@/components/multi_step_form/components/progress_bar";
