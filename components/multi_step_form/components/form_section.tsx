import useJobAppStore from "@/store";
import { motion } from "motion/react";
import React from "react";
import PrevEndNext from "./prev_and_next";

interface InputsElementType {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  type?: "text" | "checkbox" 
}

interface FormSectionProps {
  name: string;
  inputsElement: InputsElementType[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


// consigo usar para sessões simples
const FormSection: React.FC<FormSectionProps> = ({
  name,
  inputsElement,
  handleChange,
}) => {
  const { error } = useJobAppStore();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, ease: "easeInOut", duration: 1 }}
      className="flex flex-col gap-3"
    >
      <h2 className="text-lg font-bold">{name}</h2>
      {error && <div className="font-bold text-xs text-red-500">*{error}</div>}
      <div className="grid gap-6 md:grid-cols-2 w-full">
        {inputsElement.map((value, index) => (
          <div
            className="flex flex-col gap-1"
            key={`inputElement-${index + 1}`}
          >
            <label
              className="text-sm font-semibold text-gray-900"
              htmlFor={value.name}
            >
              {value.label}
            </label>
            <input
              type={value.type || "text"}
              name={value.name}
              placeholder={value.placeholder}
              required
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              value={value.value}
            />
          </div>
        ))}
      </div>
      <PrevEndNext />
    </motion.div>
  );
};

export default FormSection;
