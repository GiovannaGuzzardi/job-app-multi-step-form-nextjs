import useJobAppStore from "@/store";
import React from "react";
import PrevEndNext from "./components/prev_and_next";
import ButtonBase from "../button";

export default function EducationBackground() {
  const {
    formData,
    setError,
    setEducationBackground,
    error,
  } = useJobAppStore();

  const handleEducationChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number,
    number: boolean
  ) => {
    let { value } = e.target;
    value = number ? value.replace(/[^0-9,]/g, "") : value;
    const updateEducation = [...formData.educationBackground.educations!];
    updateEducation[idx] = {
      ...updateEducation[idx],
      [e.target.name]: value,
    };
    setEducationBackground({
      educations: updateEducation,
    });
  };

  const addEducation = () => {
    setError("");
    const newEducation = {
      courseName: "",
      schoolName: "",
      yearOfCompletion: "",
    };

    const updateEducation = [
      ...formData.educationBackground.educations!,
      newEducation,
    ];
    setEducationBackground({ educations: updateEducation });
  };

  const removeEducation = (index: number) => {
    setError("");
    setEducationBackground({
      educations: formData.educationBackground.educations?.filter(
        (_, i) => i !== index
      ),
    });
  };

  return (
    <div className="flex gap-3 flex-col ">
      {error && <div className="font-bold text-xs text-red-500">*{error}</div>}
      <div className="grid gap-2">
        <ButtonBase
          className="text-sm bg-green-600 hover:bg-green-700"
          onClick={addEducation}
        >
          Adicionar Nova Educação
        </ButtonBase>
        {formData.educationBackground.educations.map((value, index) => (
          <div
            className="border-2 p-2 grid gap-2 sm:grid-cols-2 items-end"
            key={`${index} education`}
          >
            <div className="flex flex-col gap-1">
              <label
                className="text-sm font-semibold text-gray-900"
                htmlFor="courseName"
              >
                Curso
              </label>
              <input
                type="text"
                min={1}
                pattern="[0-9,]*"
                name="courseName"
                placeholder=" Nome do Curso"
                required
                onChange={(e) => handleEducationChange(e, index, false)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                value={value.courseName}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-sm font-semibold text-gray-900"
                htmlFor="schoolName"
              >
                Instituição de Ensino
              </label>
              <input
                type="text"
                min={1}
                pattern="[0-9,]*"
                name="schoolName"
                placeholder="Nome da instituição de ensino"
                required
                onChange={(e) => handleEducationChange(e, index, false)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                value={value.schoolName}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-sm font-semibold text-gray-900"
                htmlFor="yearOfCompletion"
              >
                Conclusão
              </label>
              <input
                type="text"
                min={1}
                name="yearOfCompletion"
                placeholder="Ano de Conclusão do curso"
                required
                onChange={(e) => handleEducationChange(e, index, true)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                value={value.yearOfCompletion}
              />
            </div>
            <ButtonBase
              classMotion="justify-self-end "
              className="bg-red-500 hover:bg-red-600"
              onClick={() => {
                removeEducation(index);
              }}
            >
              Remover Expêriencia{" "}
            </ButtonBase>
          </div>
        ))}
      </div>
      <PrevEndNext />
    </div>
  );
}
