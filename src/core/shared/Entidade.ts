import { IdVO } from "./ValueObject/IdVO";

export interface EntidadeProps {
  id?: string;
}

export abstract class Entidade<Tipo, Props extends EntidadeProps> {
  readonly id: IdVO;
  readonly props: Props;

  constructor(props: Props) {
    this.id = new IdVO(props.id);
    this.props = { ...props, id: this.id.valor };
  }

  igual(outraEntidade: Entidade<Tipo, Props>): boolean {
    return this.id.igual(outraEntidade?.id);
  }

  diferente(outraEntidade: Entidade<Tipo, Props>): boolean {
    return this.id.diferente(outraEntidade?.id);
  }

  clone(novasPropriedades: Props): Tipo {
    return new (this.constructor as any)({ ...this.props, ...novasPropriedades });
  }
}
