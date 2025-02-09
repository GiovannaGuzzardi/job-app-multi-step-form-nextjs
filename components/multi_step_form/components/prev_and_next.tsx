import Button from "@/components/button";
import useJobAppStore from "@/store";
import {
  personalInfoSchema,
  experienceInfoSchema,
  educationBackgroundSchema,
} from "@/validationSchema";

function PrevEndNext() {
  const {
    nextStep,
    prevStep,
    step,
    getTotalSteps,
    submitForm,
    formData,
    setError,
  } = useJobAppStore();

  const validadeAndNext = () => {
    try {
      switch (step) {
        case 1:
          personalInfoSchema.parse(formData.personalInfo);
          break;
        case 2:
          experienceInfoSchema.parse(formData.experienceInfo);
          break;
        case 3:
          educationBackgroundSchema.parse(formData.educationBackground);
          break;
        default:
          break;
      }

      setError("");
      nextStep();
    } catch (error: any) {
      setError(
        error.errors[0]?.message ||
          "Por Favor Preencha todos os campos corretamente"
      );
    }
  };

  return (
    <div className="grid grid-cols-3 ">
      {step >= 2 && step <= getTotalSteps() && (
        <Button
          className="w-28"
          onClick={() => {
            prevStep();
          }}
        >
          <p className="text-base self-center text-start h-min grid-col">
            Anterior
          </p>
        </Button>
      )}
      {step >= 1 && step < getTotalSteps() && (
        <Button
          classMotion="justify-self-end col-start-3"
          className="w-28"
          onClick={validadeAndNext}
        >
          <p className="text-base text-start self-center h-min">proxima</p>
        </Button>
      )}
      {step == getTotalSteps() && (
        <Button
          classMotion="justify-self-end col-start-3 "
          className="w-28"
          onClick={() => {
            submitForm();
          }}
        >
          <p className="text-base text-start self-center h-min">Salvar</p>
        </Button>
      )}
    </div>
  );
}

export default PrevEndNext;
