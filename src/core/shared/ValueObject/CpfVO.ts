import ErrosCpf from "@/core/errors/cpf/ErrosCpf";
import { Validador } from "@/core/utils/Validador";

export class CpfVO {
  readonly cpf: string;
  constructor(cpf: string) {
    const regexCPFComMascaraOuSemMascara = /(\d{3}.?\d{3}.?\d{3}-?\d{2})/;

    this.cpf = cpf.trim();

    const erros = Validador.combinar(
      Validador.naoVazio(this.cpf, ErrosCpf.CPF_VAZIO),
      Validador.tamanhoMenorQue(this.semMascara, 12, ErrosCpf.CPF_GRANDE),
      Validador.tamanhoMaiorQue(this.semMascara, 10, ErrosCpf.CPF_PEQUENO),
      Validador.regex(this.cpf, regexCPFComMascaraOuSemMascara, ErrosCpf.CPF_INVALIDO),
      Validador.DvValido(this.primeiroDV, Number(this.ultimosCaracteres[0]), ErrosCpf.CPF_1_DV_INVALIDO),
      Validador.DvValido(this.segundoDV, Number(this.ultimosCaracteres[1]), ErrosCpf.CPF_2_DV_INVALIDO)
    );

    if (erros) {
      throw new Error(erros.join(","));
    }
  }

  get primeiroDV(): number {
    const arraySemDV = Array.from(this.semDVs);

    const resultado = arraySemDV.reduce((acc, caracter, index) => {
      const fator = (10 - index) * Number(caracter);
      return acc + fator;
    }, 0);

    const resto = resultado % 11;

    return resto <= 1 ? 0 : (11 - resto);
  }

  get segundoDV(): number {
    const arrayApenasComPrimeiroDV = Array.from(this.semDVs.substring(1, 9)).concat(this.primeiroDV.toString());

    const resultado = arrayApenasComPrimeiroDV.reduce((acc, caracter, index) => {
      const fator = (10 - index) * Number(caracter);
      return acc + fator;
    }, 0);

    const resto = resultado % 11;

    return resto <= 1 ? 0 : (11 - resto);
  }

  get semMascara(): string {
    return this.cpf.replace("-", "").split(".").join("");
  }

  get semDVs(): string {
    return this.semMascara.substring(0, 9);
  }

  get ultimosCaracteres(): string {
    return this.semMascara.split("").reverse().join("").substring(0, 2).split("").reverse().join("");
  }
}
