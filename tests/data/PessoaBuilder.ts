import { Pessoa, PessoaProps } from "@/core/pessoa/Pessoa";
import { faker } from "@faker-js/faker";
import { generate as cpf } from "gerador-validador-cpf";
import { IdVO } from "@/core/shared/ValueObject/IdVO";

export class PessoaBuilder {
  private constructor(private props: PessoaProps) {}

  static criar() {
    return new PessoaBuilder({
      id: IdVO.novo.valor,
      nome: faker.person.fullName(),
      cpf: cpf()
    });
  }

  static criarLista(qtde: number = 10) {
    return Array(qtde).fill(0).map(() => {
      return PessoaBuilder.criar().agora();
    });
  }

  semId(): PessoaBuilder {
    this.props.id = undefined;
    return this;
  }

  comId(id: string): PessoaBuilder {
    this.props.id = id;
    return this;
  }

  comNome(nome: string): PessoaBuilder {
    this.props.nome = nome;
    return this;
  }

  semCpf(): PessoaBuilder {
    this.props.cpf = undefined;
    return this;
  }

  comCpf(cpf: string): PessoaBuilder {
    this.props.cpf = cpf;
    return this;
  }

  semNome(): PessoaBuilder {
    this.props.nome = undefined;
    return this;
  }

  agora(): Pessoa {
    return new Pessoa(this.props);
  }
}
