
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Combina funções para uma solução mais limpa e eficiente de manipulação de classes CSS,
// sendo usada para criar estilos reutilizáveis e dinâmicos.
export function cn(...inputs: ClassValue[]) {
  // `clsx` vai combinar as classes condicionalmente, removendo falsos, nulls ou undefined
  // e aplicando as classes que são verdadeiras.

  // `twMerge` recebe a lista de classes combinadas e resolve conflitos,
  // removendo classes redundantes ou conflitantes no caso do Tailwind CSS.
  return twMerge(clsx(inputs));
}
