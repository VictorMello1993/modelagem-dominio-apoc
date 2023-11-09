import { UsuarioAnemicoV3 as Usuario } from "@/core/usuario/UsuarioAnemicoV3";

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
  expect(usuario.getEmail()).toBe("!@_$");
});

test("Deve permitir usuário com senha inválida", () => {
  const usuario: Usuario = usuarioValido();
  usuario.setSenha("a");
  expect(usuario.getSenha()).toBe("a");
});
