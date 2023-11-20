import { NomePessoaVO } from "@/core/shared/ValueObject/NomePessoaVO";
import { CpfVO } from "@/core/shared/ValueObject/CpfVO";
import { Entidade, EntidadeProps } from "@/core/shared/Entidade";

export interface PessoaProps extends EntidadeProps {
  nome?: string
  cpf?: string
}

export class Pessoa extends Entidade<Pessoa, PessoaProps> {
  readonly nome: NomePessoaVO;
  readonly cpf: CpfVO;
  constructor(
    props: PessoaProps
  ) {
    super(props);
    this.nome = new NomePessoaVO(props.nome);
    this.cpf = new CpfVO(props.cpf);
  }
}
