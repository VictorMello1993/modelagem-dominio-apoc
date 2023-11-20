export class Validador {
  static combinar(...erros: (string | null)[]): string[] | null {
    const errosFiltrados = erros.filter(erro => erro !== null) as string[];
    return errosFiltrados.length > 0 ? errosFiltrados : null;
  }

  static naoNulo(valor: any, msgErro: string): string | null {
    return valor !== null && valor !== undefined ? null : msgErro;
  }

  static naoVazio(valor: string | null | undefined, msgErro: string): string | null {
    const msg = Validador.naoNulo(valor, msgErro);
    if (msg) {
      return msg;
    }

    return valor!.trim() !== "" ? null : msgErro;
  }

  static isEmailValido(email: string): boolean {
    const regexEmailValido = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regexEmailValido.test(email);
  }

  static tamanhoMenorQue(valor: string | any[], tamanhoMaximo: number, msgErro: string): string | null {
    return valor.length < tamanhoMaximo ? null : msgErro;
  }

  static tamanhoMaiorQue(valor: string | any[], tamanhoMinimo: number, msgErro: string): string | null {
    return valor.length > tamanhoMinimo ? null : msgErro;
  }

  static regex(valor: string, regex: RegExp, msgErro: string): string | null {
    return regex.test(valor) ? null : msgErro;
  }

  static DvValido(dvValido: number, dv: number, msgErro: string): string | null {
    return dvValido === dv ? null : msgErro;
  }
}
