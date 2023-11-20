import { IdVO } from "@/core/shared/ValueObject/IdVO";
import Erros from "@/core/errors/Erros";

test("Deve criar um novo id válido", () => {
  const id = IdVO.novo;
  expect(id.valor).toHaveLength(36);
  expect(id.novo).toBeTruthy();
});

test("Deve criar um novo id válido a partir um id existente", () => {
  const valor = IdVO.novo.valor;
  const id = new IdVO(valor);
  expect(id.valor).toHaveLength(36);
  expect(id.novo).toBeFalsy();
});

test("Deve lançar erro ao tentar gerar id inválido", () => {
  expect(() => new IdVO("123")).toThrow(Erros.ID_INVALIDO);
});

test("Deve comparar dois ids iguais", () => {
  const id1 = new IdVO();
  const id2 = new IdVO(id1.valor);

  expect(id1.igual(id2)).toBeTruthy();
  expect(id1.diferente(id2)).toBeFalsy();
});

test("Deve comparar dois ids como diferentes", () => {
  const id1 = new IdVO();
  const id2 = new IdVO();

  expect(id1.igual(id2)).toBeFalsy();
  expect(id1.diferente(id2)).toBeTruthy();
});

test("Deve comparar um id com undefined", () => {
  const id1 = new IdVO();

  expect(id1.igual(undefined as any)).toBeFalsy();
  expect(id1.diferente(undefined as any)).toBeTruthy();
});
