import Erros from "@/core/errors/Erros";
import { Validador } from "@/core/utils/Validador";

export class UsuarioAnemicoV4 {
  constructor(
    private _id: number,
    private _nome: string,
    private _email: string,
    private _senha?: string
  ) { }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    if (Validador.isEmailValido(value)) {
      this._email = value;
    }
  }

  get senha() {
    return this._senha;
  }

  set senha(value: string | undefined) {
    if (value && value.length < 6) {
      throw new Error(Erros.SENHA_INVALIDA);
    }
    this._senha = value;
  }
}
