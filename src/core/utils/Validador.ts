export class Validador {
  static naoNulo(valor: any, msgErro: string): string | null {
    return valor !== null && valor !== undefined ? null : msgErro;
  }

  static naoVazia(valor: string | null | undefined, msgErro: string): string | null {
    const msg = Validador.naoNulo(valor, msgErro);
    if (msg) {
      return msg;
    }

    return valor!.trim() !== "" ? null : msgErro;
  }

  static isEmailValido(email: string): boolean {
    const regexEmailValido = (/\S+@\S+\.\S+/);
    return regexEmailValido.test(email);
  }

  static tamanhoMenorQue(valor: string | any[], tamanhoMaximo: number, msgErro: string): string | null {
    return valor.length < tamanhoMaximo ? null : msgErro;
  }
}
