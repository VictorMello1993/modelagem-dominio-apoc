import Erros from "@/core/errors/pessoa/ErrosPessoa";
import { Validador } from "@/core/utils/Validador";

export class UsuarioAnemicoV3 {
  constructor(
    private id: number,
    private nome: string,
    private email: string,
    private senha?: string
  ) {
    this.setId(id);
    this.setNome(nome);
    this.setEmail(email);
    if (senha) this.setSenha(senha);
  }

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getNome(): string {
    return this.nome;
  }

  setNome(value: string) {
    this.nome = value;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(value: string) {
    if (Validador.isEmailValido(value)) {
      this.email = value;
    }
  }

  getSenha() {
    return this.senha;
  }

  setSenha(value: string) {
    if (value.length < 6) {
      throw new Error(Erros.SENHA_INVALIDA);
    }
    this.senha = value;
  }
}
