// arquivo de validação do estado através do zod

// schema para a parte de informações pessoais
export const personalInfoSchema = z.object({
    firstName: z.string().min(3, "Primeiro nome deve ter mais de 3 letras e menos de 20").max(20), 
    lastName: z.string().min(3, "Sobremome deve ter mais de 3 letras e menos de 20").max(20),
    email: z.string().email("Email inválido"),
    phone: z.string().length(10, "Telefone deve ter 10 dígitos").regex(/^\d+$/),
});

// schema para a parte de experiência
export const experienceInfoSchema = z.object({
    fresher: z.boolean(),
    experiences: z.array(z.object({
        // refine no numberOfYears é redundante, pois o min já faz a validação
        numberOfYears: z.string().min(1, "Anos trabalhados é obrigatório").refine((value) => !isNaN(Number(value)) && Number(value) >= 0, "Por favor, insira um número válido"),
        companyName: z.string().min(3, "Nome da empresa é obrigatório").max(20),
        description : z.string().min(3, "Descrição é obrigatória").max(20),
    })).optional()
})
// refine diz que se data.fresher for false, experiences não pode ser undefined e deve ter pelo menos um elemento
.refine((data) => {return data.fresher || (data.experiences && data.experiences.length > 0)}, "Por favor, insira pelo menos uma experiência");

// schema para a parte de educação
export const educationBackgroundSchema = z.object({
    educations : z.array(z.object({
        courseName : z.string().min(3, "Nome do curso é obrigatório").max(20),
        schoolName : z.string().min(3, "Nome da escola é obrigatório").max(20),
        yearOfCompletion : z.string().min(4, "Ano de conclusão(YYYY) é obrigatório").regex(/^\d+$/ , {message: "Por favor, insira um ano válido" }),
    })).min(1, "Por favor, insira pelo menos uma educação")
});

// schema que contém todos os outros schemas para serem utilizados no formulário de dados
export const formDataSchema = z.object({
    personalInfo: personalInfoSchema,
    experienceInfo: experienceInfoSchema,
    educationBackground: educationBackgroundSchema,
});

// infer = método que extrai o tipo de um schema para que possa ser utilizado em outras partes do código
export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type ExperienceInfo = z.infer<typeof experienceInfoSchema>;
export type EducationBackground = z.infer<typeof educationBackgroundSchema>;
export type FormData = z.infer<typeof formDataSchema>;

export type Educations = {
    courseName: string;
    schoolName: string;
    yearOfCompletion: string;
}[];

export type Experiences = {
    numberOfYears: string;
    companyName: string;
    description: string;
}[];



// regex = regular expression : são padrões utilizados para selecionar combinações de caracteres em uma string
// fresher = recém-formado
// .refine = método que permite adicionar validações personalizadas
// isNaN = função que verifica se o valor passado é NaN (Not a Number)


import {z} from 'zod';