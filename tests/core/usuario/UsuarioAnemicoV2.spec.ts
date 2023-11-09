import { UsuarioAnemicoV2 as Usuario } from "@/core/usuario/UsuarioAnemicoV2";

const usuarioValido = () => new Usuario(123,
  "fulano",
  "email@teste.com",
  "123456");

test("Deve permitir usuário com nome undefined", () => {
  const usuario: Usuario = usuarioValido();
  usuario.nome = undefined as any;
  expect(usuario.nome).toBeUndefined();
});

test("Deve permitir usuário sem nome", () => {
  const usuario: Usuario = usuarioValido();
  usuario.nome = "";
  expect(usuario.nome).toBe("");
});

test("Deve permitir usuário com id negativo", () => {
  const usuario: Usuario = usuarioValido();
  usuario.id = -100;
  expect(usuario.id).toBeLessThan(0);
});

test("Deve permitir usuário e-mail inválido", () => {
  const usuario: Usuario = usuarioValido();
  usuario.email = "!@_$";
  expect(usuario.email).toBe("!@_$");
});

test("Deve permitir usuário com senha inválida", () => {
  const usuario: Usuario = usuarioValido();
  usuario.senha = "a";
  expect(usuario.senha).toBe("a");
});
