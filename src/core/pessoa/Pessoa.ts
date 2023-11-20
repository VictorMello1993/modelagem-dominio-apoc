import { IdVO } from "@/core/shared/ValueObject/IdVO";
import { NomePessoaVO } from "@/core/shared/ValueObject/NomePessoaVO";
import { CpfVO } from "@/core/shared/ValueObject/CpfVO";

export interface PessoaProps {
  id?: string
  nome?: string
  cpf?: string
}

export class Pessoa {
  readonly props: PessoaProps;
  readonly id: IdVO;
  readonly nome: NomePessoaVO;
  readonly cpf: CpfVO;
  constructor(
    props: PessoaProps
  ) {
    this.nome = new NomePessoaVO(props.nome);
    this.id = new IdVO(props.id);
    this.cpf = new CpfVO(props.cpf);

    this.props = { ...props, id: this.id.valor };
  }

  clone(novasPropriedades: PessoaProps) {
    return new Pessoa({ ...this.props, ...novasPropriedades });
  }
}
