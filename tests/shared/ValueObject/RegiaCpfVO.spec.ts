import { RegiaoCpfVO } from "@/core/shared/ValueObject/RegiaoCpfVO";
import { CpfVO } from "@/core/shared/ValueObject/CpfVO";

test("Deve criar uma região do CPF por código", () => {
  const regiao = RegiaoCpfVO.porCodigo(0);
  expect(regiao.codigo).toBe(0);
  expect(regiao.estados[0]).toBe("RS");
});

test("Deve criar uma região do CPF por CPF", () => {
  const regiao = RegiaoCpfVO.porCpf("135.262.920-86");
  expect(regiao.codigo).toBe(0);
  expect(regiao.estados[0]).toBe("RS");
});

test("Deve comparar regiões como iguais", () => {
  const regiao1 = RegiaoCpfVO.porCpf("630.390.497-12");
  const regiao2 = RegiaoCpfVO.porCpf("832.390.727-77");
  expect(regiao1.igual(regiao2)).toBeTruthy();
  expect(regiao1.diferente(regiao2)).toBeFalsy();
});

test("Deve comparar regiões como diferentes", () => {
  const regiao1 = RegiaoCpfVO.porCpf("332.465.371-19");
  const regiao2 = RegiaoCpfVO.porCpf("296.139.668-97");
  expect(regiao1.igual(regiao2)).toBeFalsy();
  expect(regiao1.diferente(regiao2)).toBeTruthy();
});

test("Deve comparar região com undefined", () => {
  const regiao = RegiaoCpfVO.porCpf("332.465.371-19");
  expect(regiao.igual(undefined as any)).toBeFalsy();
  expect(regiao.diferente(undefined as any)).toBeTruthy();
});

test("Deve criar uma região do CPF de São Paulo", () => {
  const regiao = RegiaoCpfVO.SP;
  expect(regiao.codigo).toBe(8);
  expect(regiao.estados[0]).toBe("SP");
});

test("Deve criar uma região do CPF de CE_MA_PI", () => {
  const regiao = RegiaoCpfVO.CE_MA_PI;
  expect(regiao.codigo).toBe(3);
  expect(regiao.estados[0]).toBe("CE");
  expect(regiao.estados[1]).toBe("MA");
  expect(regiao.estados[2]).toBe("PI");
});
