import { Validador } from "@/core/utils/Validador";
import ErrosPessoa from "@/core/errors/pessoa/ErrosPessoa";

export class NomePessoaVO {
  readonly nome: string;
  constructor(nome: string) {
    this.nome = nome.trim();
    const erros = Validador.combinar(
      Validador.naoVazio(this.nome, ErrosPessoa.NOME_VAZIO),
      Validador.tamanhoMaiorQue(this.nome, 4, ErrosPessoa.NOME_PEQUENO),
      Validador.tamanhoMenorQue(this.nome, 121, ErrosPessoa.NOME_GRANDE),
      Validador.naoVazio(this.nome.split(" ")[1], ErrosPessoa.NOME_SEM_SOBRENOME),
      Validador.regex(this.nome, /^[a-zA-ZÀ-ú\s]+$/, ErrosPessoa.NOME_CARACTERES_INVALIDOS)
    );

    if (erros) {
      throw new Error(erros.join(","));
    }
  }

  get nomeCompleto() {
    return this.nome;
  }

  get primeiroNome() {
    return this.nome.split(" ")[0];
  }

  get sobrenomes(): string[] {
    return this.nome.split(" ").slice(1);
  }

  get ultimoSobrenome() {
    return this.nome.split(" ").reverse()[0];
  }
}
