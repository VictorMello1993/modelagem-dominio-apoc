import { CpfVO } from "@/core/shared/ValueObject/CpfVO";
import Erros from "@/core/errors/Erros";

test("Deve lançar um erro para CPF inválido com string vazia ou undefined", () => {
  expect(() => new CpfVO("")).toThrow(Erros.CPF_INVALIDO);
  expect(() => new CpfVO()).toThrow(Erros.CPF_INVALIDO);
});

test("Deve lançar um erro para CPF inválido com string incompleta", () => {
  expect(() => new CpfVO("123")).toThrow(Erros.CPF_INVALIDO);
  expect(() => new CpfVO("12345")).toThrow(Erros.CPF_INVALIDO);
  expect(() => new CpfVO("12345678")).toThrow(Erros.CPF_INVALIDO);
  expect(() => new CpfVO("1234567890123")).toThrow(Erros.CPF_INVALIDO);
  expect(() => new CpfVO("123.456.789-0")).toThrow(Erros.CPF_INVALIDO);
});

test("Deve lançar um erro para CPF com dv inválido", () => {
  expect(() => new CpfVO("899.368.190-29")).toThrow(Erros.CPF_INVALIDO);
  expect(() => new CpfVO("899.368.190-40")).toThrow(Erros.CPF_INVALIDO);
  expect(() => new CpfVO("89936819029")).toThrow(Erros.CPF_INVALIDO);
  expect(() => new CpfVO("89936819040")).toThrow(Erros.CPF_INVALIDO);
});

test("Deve lançar um erro para CPF que não contém todos os dígitos", () => {
  expect(() => new CpfVO("899.368.190-ab")).toThrow(Erros.CPF_INVALIDO);
  expect(() => new CpfVO("aa.?^-.190-40")).toThrow(Erros.CPF_INVALIDO);
  expect(() => new CpfVO("aaaaaaaaaaaaa")).toThrow(Erros.CPF_INVALIDO);
  expect(() => new CpfVO("ddddddd")).toThrow(Erros.CPF_INVALIDO);
});

test("Deve retornar CPF válido (true) para dv válido", () => {
  expect(CpfVO.CpfValido("899.368.190-20")).toBe(true);
  expect(CpfVO.CpfValido("013.333.130-04")).toBe(true);
  expect(CpfVO.CpfValido("001.619.770-49")).toBe(true);
  expect(CpfVO.CpfValido("89936819020")).toBe(true);
  expect(CpfVO.CpfValido("01333313004")).toBe(true);
  expect(CpfVO.CpfValido("00161977049")).toBe(true);
});

test("Deve retornar dv do CPF válido", () => {
  expect(new CpfVO("899.368.190-20").digitosVerificadores).toBe("20");
  expect(new CpfVO("013.333.130-04").digitosVerificadores).toBe("04");
  expect(new CpfVO("001.619.770-49").digitosVerificadores).toBe("49");
  expect(new CpfVO("89936819020").digitosVerificadores).toBe("20");
  expect(new CpfVO("01333313004").digitosVerificadores).toBe("04");
  expect(new CpfVO("00161977049").digitosVerificadores).toBe("49");
});

test("Deve criar CPF formatado", () => {
  expect(new CpfVO("89936819020").formatado).toBe("899.368.190-20");
  expect(new CpfVO("01333313004").formatado).toBe("013.333.130-04");
  expect(new CpfVO("00161977049").formatado).toBe("001.619.770-49");
  expect(new CpfVO("89936819020").formatado).toBe("899.368.190-20");
  expect(new CpfVO("01333313004").formatado).toBe("013.333.130-04");
  expect(new CpfVO("00161977049").formatado).toBe("001.619.770-49");
});

test("Deve criar CPF sem formatação", () => {
  expect(new CpfVO("899.368.190-20").valor).toBe("89936819020");
  expect(new CpfVO("013.333.130-04").valor).toBe("01333313004");
  expect(new CpfVO("001.619.770-49").valor).toBe("00161977049");
  expect(new CpfVO("899.368.190-20").valor).toBe("89936819020");
  expect(new CpfVO("013.333.130-04").valor).toBe("01333313004");
  expect(new CpfVO("001.619.770-49").valor).toBe("00161977049");
});

test("Deve criar um CPF válido", () => {
  const cpfVO = new CpfVO("277.236.850-50");

  expect(cpfVO.valor.length).toBe(11);
  expect(() => CpfVO.validarDigitoVerificador(cpfVO.valor, +cpfVO.digitosVerificadores[9])).toBeTruthy();
  expect(() => CpfVO.validarDigitoVerificador(cpfVO.valor, +cpfVO.digitosVerificadores[10])).toBeTruthy();
  expect(CpfVO.CpfValido(cpfVO.valor)).toBeTruthy();
});
