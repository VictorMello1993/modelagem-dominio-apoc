import Erros from "@/core/errors/Erros";
import { Pessoa } from "@/core/pessoa/Pessoa";

test("Deve lançar erro ao tentar criar uma pessoa com nome vazio", () => {
  expect(() => new Pessoa("")).toThrow(Erros.NOME_VAZIO);
});

test("Deve criar uma pessoa válida", () => {
  const pessoa = new Pessoa("Victor Santos de Mello");
  expect(pessoa.nome.primeiroNome).toBe("Victor");
  expect(pessoa.nome.sobrenomes).toEqual(["Santos", "de", "Mello"]);
  expect(pessoa.nome.ultimoSobrenome).toBe("Mello");
  expect(pessoa.id.novo).toBeTruthy();
});
