import useJobAppStore from "@/store";
import PrevEndNext from "./components/prev_and_next";
import { motion } from "motion/react";
import ButtonBase from "../button";

export default function ExperienteInfo() {
  const { setExperienceInfo, formData, error, setError } = useJobAppStore();
  const isFresher = formData.experienceInfo.fresher;
  const handleExperienceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number,
    number: boolean
  ) => {
    let { value } = e.target;
    value = number ? value.replace(/[^0-9,]/g, "") : value;
    const updateExperiences = [...formData.experienceInfo.experiences!];
    updateExperiences[idx] = {
      ...updateExperiences[idx],
      [e.target.name]: value,
    };
    setExperienceInfo({
      experiences: updateExperiences,
    });
  };

  const addExperience = () => {
    setError("");
    const newExperience = {
      numberOfYears: "",
      companyName: "",
      description: "",
    };

    const updateExperience = [
      ...formData.experienceInfo.experiences!,
      newExperience,
    ];
    setExperienceInfo({ experiences: updateExperience });
  };

  const removeExperience = (index: number) => {
    setError("");
    setExperienceInfo({
      fresher: formData.experienceInfo.fresher,
      experiences: formData.experienceInfo.experiences?.filter(
        (_, i) => i !== index
      ),
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, ease: "easeInOut", duration: 1 }}
      className="flex flex-col gap-3"
    >
      <h2 className="text-lg font-bold">Expêriencias</h2>
      {error && <div className="font-bold text-xs text-red-500">*{error}</div>}
      <div className="flex items-center justify-start gap-5">
        <label htmlFor="fresher" className="text-sm font-medium">
          Você é um calouro?
        </label>
        <div className="flex items-center justify-center gap-2">
          <input
            type="checkbox"
            name="fresher"
            onChange={() => {
              setError("");
              setExperienceInfo({
                fresher: !isFresher,
                experiences: [],
              });
            }}
            className="w-4 h-4  bg-gray-300 border text-gray-900"
            checked={formData.experienceInfo.fresher}
          />
          <span className="text-sm">Sim, eu sou e não possuo expêriencias</span>
        </div>
      </div>
      {!isFresher && (
        <div className="grid gap-2">
          <ButtonBase
            className="text-sm bg-green-600 hover:bg-green-700"
            onClick={addExperience}
          >
            Adicionar Nova Expêriencia
          </ButtonBase>
          {formData.experienceInfo.experiences?.map((value, index) => (
            <div
              className="border-2 p-2 grid gap-2 sm:grid-cols-2 items-end"
              key={`${index} experience`}
            >
              <div className="flex flex-col gap-1">
                <label
                  className="text-sm font-semibold text-gray-900"
                  htmlFor="companyName"
                >
                  Nome da Companhia
                </label>
                <input
                  type="text"
                  min={1}
                  pattern="[0-9,]*"
                  name="companyName"
                  placeholder=" Nome da Companhia"
                  required
                  onChange={(e) => handleExperienceChange(e, index, false)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                  value={value.companyName}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-sm font-semibold text-gray-900"
                  htmlFor="description"
                >
                  Descrição
                </label>
                <input
                  type="text"
                  min={1}
                  pattern="[0-9,]*"
                  name="description"
                  placeholder="descrição dos anos trabalhados"
                  required
                  onChange={(e) => handleExperienceChange(e, index, false)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                  value={value.description}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-sm font-semibold text-gray-900"
                  htmlFor="numberOfYears"
                >
                  Anos Trabalhados
                </label>
                <input
                  type="text"
                  min={1}
                  pattern="[0-9,]*"
                  name="numberOfYears"
                  placeholder="Quantidade de anos trabalhados"
                  required
                  onChange={(e) => handleExperienceChange(e, index, true)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                  value={value.numberOfYears}
                />
              </div>
              <ButtonBase
                classMotion="justify-self-end "
                className="bg-red-500 hover:bg-red-600"
                onClick={() => {
                  removeExperience(index);
                }}
              >
                Remover Expêriencia{" "}
              </ButtonBase>
            </div>
          ))}
        </div>
      )}
      <PrevEndNext />
    </motion.div>
  );
}

// qual o role
// se flesher então não precisa de nada pois não tem experiencia
// se não for um flesher então você é obrigado a adicionar uma expêriencia
// onClick={() => {
//   formData.experienceInfo.experiences?.splice(index, 1);
// }}
// não da certo pois o react não capta a mudança, então tenho que usar o setExperiences
