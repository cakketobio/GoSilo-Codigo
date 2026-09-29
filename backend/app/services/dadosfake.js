// Este arquivo contém dados simulados (fake) para o desenvolvimento e testes iniciais do aplicativo Go Silo.

export const usuarios = [
  { id: 1, nome: "Carlos Mendes", email: "carlos@email.com", senha: "Silo@Forte2026!", tipo: "anunciante" },
  { id: 2, nome: "Ana Paula", email: "ana@email.com", senha: "Agr0#Seguro88", tipo: "locatario" },
  { id: 3, nome: "Roberto Freitas", email: "roberto@email.com", senha: "G0ias$Rural26", tipo: "locatario" }
];

export const silos = [
  { id: 1, nome: "Silo Rio Verde Central", localizacao: "Rio Verde, GO", capacidadeToneladas: 5000, precoMinimo: 15000.00 },
  { id: 2, nome: "Armazém Jataí Norte", localizacao: "Jataí, GO", capacidadeToneladas: 12000, precoMinimo: 35000.00 },
  { id: 3, nome: "Silo Cristalina Grãos", localizacao: "Cristalina, GO", capacidadeToneladas: 3500, precoMinimo: 10000.00 },
  { id: 4, nome: "Silo Mineiros Sul", localizacao: "Mineiros, GO", capacidadeToneladas: 8000, precoMinimo: 22000.00 }
];

export const propostas = [
  { id: 1, idSilo: 1, idUsuario: 2, valor: 15500.00, status: "em analise" },
  { id: 2, idSilo: 2, idUsuario: 3, valor: 36000.00, status: "aprovada" },
  { id: 3, idSilo: 3, idUsuario: 2, valor: 9000.00, status: "recusada" }
];

export const historico = [];