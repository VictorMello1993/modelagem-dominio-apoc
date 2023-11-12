export class Validador {
  static isEmailValido(email: string): boolean {
    const regexEmailValido = (/\S+@\S+\.\S+/);
    return regexEmailValido.test(email);
  }
}
