import { IdVO } from "@/core/shared/ValueObject/IdVO";
import Erros from "@/core/constants/Erros";

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
