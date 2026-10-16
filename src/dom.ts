// Vem pronto desde a Aula 1. Três funções que conversam com a tela.

export function elemento(id: string): HTMLElement {
  const encontrado = document.getElementById(id);
  if (!encontrado) {
    throw new Error(`Não existe nenhum elemento com o id "${id}"`);
  }
  return encontrado;
}

export function campo(id: string): HTMLInputElement {
  const encontrado = elemento(id);
  if (!(encontrado instanceof HTMLInputElement)) {
    throw new Error(`O elemento "${id}" não é um <input>`);
  }
  return encontrado;
}

export function selecao(id: string): HTMLSelectElement {
  const encontrado = elemento(id);
  if (!(encontrado instanceof HTMLSelectElement)) {
    throw new Error(`O elemento "${id}" não é um <select>`);
  }
  return encontrado;
}
