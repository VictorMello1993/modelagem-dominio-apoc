import { Validador } from "@/core/utils/Validador";

test("Deve retornar null com texto não nulo", () => {
  const erro = Validador.naoNulo("Bom dia", "Texto inválido");
  expect(erro).toBeNull();
});

test("Deve retornar null com texto não vazio", () => {
  const erro = Validador.naoVazia("xpto", "Texto vazio");
  expect(erro).toBeNull();
});

test("Deve retornar erro com texto vazio", () => {
  const msgErro = "Texto inválido";
  const erro = Validador.naoVazia("    ", msgErro);
  expect(erro).toBe(msgErro);
});

test("Deve retornar erro com texto null", () => {
  const msgErro = "Texto inválido";
  const erro = Validador.naoVazia(null, msgErro);
  expect(erro).toBe(msgErro);
});

test("Deve retornar erro com texto undefined", () => {
  const msgErro = "Texto inválido";
  const erro = Validador.naoVazia(undefined, msgErro);
  expect(erro).toBe(msgErro);
});

test("Deve retornar null com texto menor que o tamanho máximo", () => {
  const tamamhoMaximo = 6;
  const erro = Validador.tamanhoMenorQue("teste", tamamhoMaximo, `texto menor que ${tamamhoMaximo}`);
  expect(erro).toBeNull();
});

test("Deve retornar erro com texto maior que o tamanho máximo", () => {
  const tamanhoMaximo = 6;
  const erro = Validador.tamanhoMenorQue("Bom dia", tamanhoMaximo, `texto maior que ${tamanhoMaximo}`);
  expect(erro).toBe(`texto maior que ${tamanhoMaximo}`);
});
