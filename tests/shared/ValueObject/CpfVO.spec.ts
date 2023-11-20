import { CpfVO } from "@/core/shared/ValueObject/CpfVO";
import ErrosCpf from "@/core/errors/cpf/ErrosCpf";

test("Deve lançar erro ao tentar criar CPF vazio", () => {
  expect(() => new CpfVO("")).toThrow(ErrosCpf.CPF_VAZIO);
});

test("Deve lançar erro ao tentar criar CPF inválido, com menos de 11 caracteres", () => {
  expect(() => new CpfVO("1234")).toThrow(ErrosCpf.CPF_PEQUENO);
});

test("Deve lançar erro ao tentar criar CPF inválido, com mais de 11 caracteres", () => {
  expect(() => new CpfVO("123456489879878797897899")).toThrow(ErrosCpf.CPF_GRANDE);
});

test("Deve lançar erro ao tentar criar CPF inválido, que possui letras", () => {
  expect(() => new CpfVO("158.526.aaa-42")).toThrow(ErrosCpf.CPF_INVALIDO);
});

test("Deve lançar erro ao tentar criar CPF com primeiro DV inválido", () => {
  expect(() => new CpfVO("158.526.420-56")).toThrow(ErrosCpf.CPF_1_DV_INVALIDO);
});

test("Deve lançar erro ao tentar criar CPF com segundo DV inválido", () => {
  expect(() => new CpfVO("158.526.420-56")).toThrow(ErrosCpf.CPF_2_DV_INVALIDO);
});

test("Deve criar um CPF válido", () => {
  const cpfVO = new CpfVO("277.236.850-50");
  const regex = /(\d{3}.?\d{3}.?\d{3}-?\d{2})/;
  const cpfValido = regex.test(cpfVO.cpf);

  expect(cpfVO.semMascara.length).toBe(11);
  expect(cpfValido).toBeTruthy();
  expect(cpfVO.primeiroDV).toBe(5);
  expect(cpfVO.segundoDV).toBe(0);
});
