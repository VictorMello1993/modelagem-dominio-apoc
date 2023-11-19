import { IdVO } from "@/core/shared/ValueObject/IdVO";
import { NomePessoaVO } from "@/core/shared/ValueObject/NomePessoaVO";

export class Pessoa {
  readonly id: IdVO;
  readonly nome: NomePessoaVO;
  constructor(
    nome: string,
    id?: string
  ) {
    this.nome = new NomePessoaVO(nome);
    this.id = new IdVO(id);
  }
}
