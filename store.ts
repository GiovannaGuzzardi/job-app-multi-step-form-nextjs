// arquivo de gerenciamento de estado global da aplicação utilizando o zustand

interface JobAppState {
    step : number; // passo atual do formulário
    formData: FormData; // dados do formulário
    nextStep: () => void; // função para ir para o próximo passo
    prevStep: () => void; // função para voltar para o passo anterior
    getTotalSteps: () => number; // função para retornar o total de passos
    setPersonalInfo: (data: Partial<PersonalInfo>) => void; // função para setar as informações pessoais , partial para que não seja necessário passar todos os campos
    setExperienceInfo: (data: Partial<ExperienceInfo>) => void; // função para setar as informações de experiência
    setEducationBackground: (data: Partial<EducationBackground>) => void; // função para setar as informações de educação
    submitForm: () => void; // função para submeter o formulário
    error: string
    setError: (message: string) => void
} 

const formClean : FormData = {
    personalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    },
    experienceInfo: {
        fresher: true,
        experiences: []
    },
    educationBackground:{
        educations: [
            {
                courseName: "",
                schoolName: "",
                yearOfCompletion: ""
            }
        ]
    }
}

const useJobAppStore = create<JobAppState>((set, get)=>({
    error : "",
    step: 1,
    formData: formClean,
    nextStep: () => set((state) => ({step: state.step + 1})),
    prevStep: () => set((state) => ({step: state.step - 1})),
    getTotalSteps: () => { return Object.keys(get().formData).length + 1}, 
    setPersonalInfo: (data) =>  set((state) =>({
        formData: {
            ...state.formData,
            personalInfo: {
                ...state.formData.personalInfo,
                ...data,
            }
        }
    })),
    setExperienceInfo: (data) =>  set((state) =>({
        formData: {
            ...state.formData,
            experienceInfo: {
                ...state.formData.experienceInfo,
                ...data,
            }
        }
    })),
    setEducationBackground: (data) =>  set((state) =>({
        formData: {
            ...state.formData,
            educationBackground: {
                ...state.formData.educationBackground,
                ...data,
            }
        }
    })),
    submitForm: () =>  {
        set((state)=>{
            console.log("Formulario foi submetido com sucesso!")
            console.log("Submitted Data:", state.formData)
            return {
                step: 1,
                formData:formClean
            }
        })
    },
    setError : (message) => set({error : message})
}))

export default useJobAppStore


import {PersonalInfo, ExperienceInfo, EducationBackground,  FormData} from './validationSchema'
import {create} from 'zustand';
