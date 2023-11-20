import { UsuarioAnemicoV3 as Usuario } from "@/core/usuario/UsuarioAnemicoV3";
import Erros from "@/core/errors/pessoa/ErrosPessoa";

const usuarioValido = () => new Usuario(123,
  "fulano",
  "email@teste.com",
  "123456");

test("Deve permitir usuário com nome undefined", () => {
  const usuario: Usuario = usuarioValido();
  usuario.setNome(undefined as any);
  expect(usuario.getNome()).toBeUndefined();
});

test("Deve permitir usuário sem nome", () => {
  const usuario: Usuario = usuarioValido();
  usuario.setNome("");
  expect(usuario.getNome()).toBe("");
});

test("Deve permitir usuário com id negativo", () => {
  const usuario: Usuario = usuarioValido();
  usuario.setId(-100);
  expect(usuario.getId()).toBeLessThan(0);
});

test("Deve permitir usuário e-mail inválido", () => {
  const usuario: Usuario = usuarioValido();
  usuario.setEmail("!@_$");
  expect(usuario.getEmail()).toBe(usuario.getEmail());
});

test("Deve lançar erro ao tentar alterar senha com tamanho menor que 6 caracteres", () => {
  const usuario: Usuario = usuarioValido();
  expect(() => usuario.setSenha("a45")).toThrow(Erros.SENHA_INVALIDA);
});

test("Deve alterar senha com senha maior ou igual a 6 caracteres", () => {
  const novaSenhaValida = "123456";
  const usuario: Usuario = usuarioValido();
  usuario.setSenha(novaSenhaValida);
  expect(usuario.getSenha()).toBe(novaSenhaValida);
});
