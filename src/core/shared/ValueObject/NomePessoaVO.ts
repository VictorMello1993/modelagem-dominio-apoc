import Erros from "@/core/constants/Erros";
import { Validador } from "@/core/utils/Validador";

export class NomePessoaVO {
  readonly nome: string;
  constructor(nome: string) {
    this.nome = nome.trim();
    const erros = Validador.combinar(
      Validador.naoVazio(this.nome, Erros.NOME_VAZIO)
    );
  }
}
