import useJobAppStore from "@/store";

// função usada pelos inputs dos campos dos formularios para realizarem mudanças
export function useHandleChange<T>(setState: (data: Partial<T>) => void) {
  const { setError, error } = useJobAppStore();

  return (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError(""); // Só limpa erro se já existir um
    setState({ [e.target.name]: e.target.value } as Partial<T>);
  };
}

// função: Generalização do componente handleChange de forma que ele possa ser usado por qualquer input que realizar o put em formData
// problema: Hooks do React, incluindo os do Zustand, só podem ser chamados dentro de componentes ou dentro de outros hooks personalizados então não poderia apenas exportar a função useHandleChange
// solução:
//  função que retorna função -> dessa forma irei instancilizar a função dentro de um componente para que tenha o contexto adequado
//  Generics(<T>) -> trata de dizer ao typescript que não sei o que será utilizado, sendo o mesmo definido na hora que a função é chamada
//    exemplo: useHandleChange<PersonalInfo>(setPersonalInfo);
