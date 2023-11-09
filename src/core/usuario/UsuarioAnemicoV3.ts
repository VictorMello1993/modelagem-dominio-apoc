export class UsuarioAnemicoV3 {
  constructor(
    private id: number,
    private nome: string,
    private email: string,
    private senha?: string
  ) {}

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
    this.email = value;
  }

  getSenha() {
    return this.senha;
  }

  setSenha(value: string) {
    this.senha = value;
  }
}
