import { v4 as uuid, validate } from "uuid";
import Erros from "@/core/errors/Erros";

export class IdVO {
  readonly valor: string;
  readonly novo: boolean;

  constructor(valor?: string) {
    this.valor = valor ?? uuid();
    this.novo = !valor;

    if (!validate(this.valor)) {
      throw new Error(Erros.ID_INVALIDO);
    }
  }

  static get novo() {
    return new IdVO();
  }

  igual(outroId: IdVO): boolean {
    return this.valor === outroId?.valor;
  }

  diferente(outroId: IdVO): boolean {
    return this.valor !== outroId?.valor;
  }
}
