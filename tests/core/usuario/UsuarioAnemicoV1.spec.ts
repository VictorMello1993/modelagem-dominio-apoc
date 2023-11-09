import { UsuarioAnemicoV1 as Usuario } from "@/core/usuario/UsuarioAnemicoV1";

const usuarioValido: Usuario = {
  id: 123,
  nome: "fulano",
  email: "email@teste.com",
  senha: "123456"
};

test("Deve permitir usuário com nome undefined", () => {
  const usuario: Usuario = {
    ...usuarioValido,
    nome: undefined as any
  };

  expect(usuario.nome).toBeUndefined();
});

test("Deve permitir usuário sem nome", () => {
  const usuario: Usuario = {
    ...usuarioValido,
    nome: ""
  };

  expect(usuario.nome).toBe("");
});

test("Deve permitir usuário com id negativo", () => {
  const usuario: Usuario = {
    ...usuarioValido,
    id: -100
  };

  expect(usuario.id).toBeLessThan(0);
});

test("Deve permitir usuário e-mail inválido", () => {
  const usuario: Usuario = {
    ...usuarioValido,
    email: "!@_$"
  };

  expect(usuario.email).toBe("!@_$");
});

test("Deve permitir usuário com senha inválida", () => {
  const usuario: Usuario = {
    ...usuarioValido,
    senha: "a"
  };

  expect(usuario.senha).toBe("a");
});
