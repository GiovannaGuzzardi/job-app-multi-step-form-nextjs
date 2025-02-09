# Formulário para aplicação a serviço atráves do nextjs 15, utilizando zustand, zod validation, cva e clsx para manipulação de classes 
Para fins educacionais foi criado esse formulário de candidatura simplificado utilziando nextJs 15, Zustand para gerenciamento de estados ( que substituiu completamente o meu uso de context para esse tipo de manipulação) e o zod para validação de esquema. Esse formulário captura informações pessoais, de experiência e historico dos candidados, realiza a validação etapa a etapa e realiza o submit final criando uma estrutura de dados filtrada. Enquanto isso o cva e clsx realiza a manipulação de classes para fins esteticos no uso do tailwind garantindo uma maior interatividade com o usuario

![Texto Alternativo](../lib01/img/aplication.png)

# Como rodar 
    npm run dev


# Referências 
* Foi utilizado como refêrencia quase completa para criação o video do canal thetechMase , [Learn to Build a Multi-Step Form in Nextjs 14 by Creating a Job Application Form](https://youtu.be/xgveNLZ2Rh4?si=d6SqpopHGkl68cOo)
* botão reutiliavel criado com essa referencia [Criando um componente de botão reutilizável com React, TypeScript e Tailwind CSS](https://www.luckymedia.dev/blog/creating-a-reusable-button-component-with-react-typescript-and-tailwind-css).