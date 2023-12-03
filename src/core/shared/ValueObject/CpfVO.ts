import Erros from "@/core/errors/Erros";
import { RegiaoCpfVO } from "./RegiaoCpfVO";

export class CpfVO {
  readonly valor: string;
  constructor(cpf?: string) {
    this.valor = cpf?.trim().replace(/\D/g, "") ?? "";

    if (!CpfVO.CpfValido(this.valor)) {
      throw new Error(Erros.CPF_INVALIDO);
    }
  }

  get regiao():RegiaoCpfVO {
    return RegiaoCpfVO.porCpf(this.valor);
  }

  get formatado(): string {
    const regex = /(\d{3})(\d{3})(\d{3})(\d{2})/;
    return this.valor.replace(regex, "$1.$2.$3-$4");
  }

  get digitosVerificadores(): string {
    return this.valor.slice(9);
  }

  static CpfValido(cpf: string): boolean {
    if (!cpf) return false;

    const apenasDigitos = cpf.replace(/\D/g, "");

    if (apenasDigitos.length !== 11) return false;

    const dv1 = CpfVO.validarDigitoVerificador(apenasDigitos.slice(0, 9), +apenasDigitos[9]);
    const dv2 = CpfVO.validarDigitoVerificador(apenasDigitos.slice(1, 10), +apenasDigitos[10]);

    return dv1 && dv2;
  }

  static validarDigitoVerificador(cpf: string, dvInformado: number): boolean {
    const resultado = cpf.split("").reduce((acc, caracter, index) => {
      const fator = (10 - index) * +caracter;
      return acc + fator;
    }, 0);

    const resto = resultado % 11;
    const dvCalculado = resto <= 1 ? 0 : (11 - resto);

    return dvCalculado === dvInformado;
  }
}
