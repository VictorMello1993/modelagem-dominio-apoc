import { Validador } from "@/core/utils/Validador";

test("Deve combinar erros", () => {
  const erros = Validador.combinar(
    Validador.naoVazio("", "erro1"),
    Validador.naoVazio("", "erro2"),
    Validador.naoVazio("", "erro3"),
    Validador.naoVazio("teste", "naoErro4"),
    Validador.naoVazio("", "erro5")
  );
  expect(erros?.join(", ")).toBe("erro1, erro2, erro3, erro5");
});

test("Deve combinar sem erros", () => {
  const erros = Validador.combinar(
    Validador.naoVazio("teste", "naoErro1"),
    Validador.naoVazio("teste", "naoErro2"),
    Validador.naoVazio("teste", "naoErro3"),
    Validador.naoVazio("teste", "naoErro4"),
    Validador.naoVazio("teste", "naoErro5")
  );
  expect(erros).toBeNull();
});

test("Deve retornar null com texto não nulo", () => {
  const erro = Validador.naoNulo("Bom dia", "Texto inválido");
  expect(erro).toBeNull();
});

test("Deve retornar null com texto não vazio", () => {
  const erro = Validador.naoVazio("xpto", "Texto vazio");
  expect(erro).toBeNull();
});

test("Deve retornar erro com texto vazio", () => {
  const msgErro = "Texto inválido";
  const erro = Validador.naoVazio("    ", msgErro);
  expect(erro).toBe(msgErro);
});

test("Deve retornar erro com texto null", () => {
  const msgErro = "Texto inválido";
  const erro = Validador.naoVazio(null, msgErro);
  expect(erro).toBe(msgErro);
});

test("Deve retornar erro com texto undefined", () => {
  const msgErro = "Texto inválido";
  const erro = Validador.naoVazio(undefined, msgErro);
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
