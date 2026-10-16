import type { Tarefa } from './tipo';

export const tarefas: Tarefa[] = [
  {id: 1, titulo: 'Estudar interfaces', prioridade: 'alta', status: 'pendente', tags: ['estudo'], criadaEm: new Date()},
  {id: 2, titulo: 'Fazer compras', prioridade: 'media', status: 'em andamento', tags: ['pessoal'], criadaEm: new Date()},
  {id: 3, titulo: 'Ler livro', prioridade: 'baixa', status: 'concluida', tags: ['lazer'], criadaEm: new Date()},
  {id: 4, titulo: 'Exercitar', prioridade: 'media', status: 'pendente', tags: ['saude'], criadaEm: new Date()},
  {id: 5, titulo: 'Aprender TypeScript', prioridade: 'alta', status: 'em andamento', tags: ['estudo'], criadaEm: new Date()},
]