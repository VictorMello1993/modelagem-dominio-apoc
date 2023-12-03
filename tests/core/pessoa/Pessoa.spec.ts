import Erros from "@/core/errors/Erros";
import { IdVO } from "@/core/shared/ValueObject/IdVO";
import { PessoaBuilder } from "@/tests/data/PessoaBuilder";

test("Deve lançar erro ao tentar criar uma pessoa com nome vazio", () => {
  expect(() => PessoaBuilder.criar().semNome().agora()).toThrow(Erros.NOME_VAZIO);
});

test("Deve lançar erro ao tentar criar uma pessoa sem CPF", () => {
  expect(() => PessoaBuilder.criar().semCpf().agora()).toThrow(Erros.CPF_INVALIDO);
});

test("Deve criar uma pessoa válida", () => {
  const pessoa = PessoaBuilder.criar().comNome("Victor Santos de Mello").comCpf("313.693.380-07").semId().agora();
  expect(pessoa.nome.primeiroNome).toBe("Victor");
  expect(pessoa.nome.sobrenomes).toEqual(["Santos", "de", "Mello"]);
  expect(pessoa.nome.ultimoSobrenome).toBe("Mello");
  expect(pessoa.cpf.valor).toBe("31369338007");
  expect(pessoa.cpf.formatado).toBe("313.693.380-07");
  expect(pessoa.id.novo).toBeTruthy();
});

test("Deve clonar objeto com nome alterado", () => {
  const pessoa = PessoaBuilder.criar().agora();
  const novaPessoa = pessoa.clone({ nome: "Fulano Da Silva Oliveira" });

  expect(novaPessoa.id.valor).toBe(pessoa.id.valor);
  expect(novaPessoa.cpf.valor).toBe(pessoa.cpf.valor);
  expect(novaPessoa.nome.nomeCompleto).toBe("Fulano Da Silva Oliveira");
});

test("Deve clonar objeto com id alterado", () => {
  const pessoa = PessoaBuilder.criar().agora();
  const novaPessoa = pessoa.clone({ id: IdVO.novo.valor });

  expect(novaPessoa.id.valor !== pessoa.id.valor).toBeTruthy();
  expect(novaPessoa.nome.nomeCompleto).toBe(pessoa.nome.nomeCompleto);
  expect(novaPessoa.cpf.valor).toBe(pessoa.cpf.valor);
});
