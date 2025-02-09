import useJobAppStore from "@/store";
import { useHandleChange } from "./utils";
import { PersonalInfo as PersonalInfoType } from "./../../validationSchema";
import FormSection from "./components/form_section";

export default function PersonalInfo() {
  const { formData,setPersonalInfo } = useJobAppStore();

  // Iteração sobre os campos do formulário de personalInfo
  const inputsElement = [
    {
      label: "Primeiro Nome",
      placeholder: "Primeiro Nome",
      name: "firstName",
      value: formData.personalInfo.firstName,
    },
    {
      label: "Sobremome",
      placeholder: "Sobrenome",
      name: "lastName",
      value: formData.personalInfo.lastName,
    },
    {
      label: "Telefone",
      placeholder: "34988742254",
      name: "phone",
      value: formData.personalInfo.phone,
    },
    {
      label: "E-mail",
      placeholder: "fulano@exemplo.com",
      name: "email",
      value: formData.personalInfo.email,
    },
  ];

  // adição de informações nos campos de personalInfo
  const handleChange = useHandleChange<PersonalInfoType>(setPersonalInfo);

  return (
    <FormSection
      inputsElement={inputsElement}
      name="Informações Pessoais"
      handleChange={handleChange}
    />
  );
}
