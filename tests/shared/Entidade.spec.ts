import { Entidade, EntidadeProps } from "@/core/shared/Entidade";
import { IdVO } from "@/core/shared/ValueObject/IdVO";

interface TesteProps extends EntidadeProps {
  nome?: string,
  idade?: number
}

class Teste extends Entidade<Teste, TesteProps> {
  readonly nome: string;
  readonly idade: number;
  constructor(props: TesteProps) {
    super(props);
    this.nome = props.nome ?? "";
    this.idade = props.idade ?? 0;
  }
}

test("Deve comparar duas entidades diferentes", () => {
  const entidade1 = new Teste({ nome: "Fulano", idade: 30 });
  const entidade2 = new Teste({ nome: "Fulano", idade: 30 });

  expect(entidade1.igual(entidade2)).toBeFalsy();
  expect(entidade1.diferente(entidade2)).toBeTruthy();
});

test("Deve comparar duas entidades com o mesmo id e atributos diferentes", () => {
  const id = IdVO.novo.valor;
  const entidade1 = new Teste({ id, nome: "Fulano", idade: 30 });
  const entidade2 = new Teste({ id, nome: "Ciclano", idade: 24 });

  expect(entidade1.igual(entidade2)).toBeTruthy();
  expect(entidade1.diferente(entidade2)).toBeFalsy();
});

test("Deve comparar entidade com undefined ou null", () => {
  const entidade1 = new Teste({ nome: "Fulano", idade: 30 });

  expect(entidade1.igual(undefined as any)).toBeFalsy();
  expect(entidade1.igual(null as any)).toBeFalsy();
  expect(entidade1.diferente(undefined as any)).toBeTruthy();
  expect(entidade1.diferente(null as any)).toBeTruthy();
});

test("Deve clonar uma entidade com nome diferente", () => {
  const entidade1 = new Teste({ nome: "Fulano", idade: 55 });
  const entidade2 = entidade1.clone({ nome: "Ciclano da Silva Neves" });

  expect(entidade2.id.valor).toBe(entidade1.id.valor);
  expect(entidade2.nome).toBe("Ciclano da Silva Neves");
  expect(entidade2.idade).toBe(entidade1.idade);
});

test("Deve clonar uma entidade com os mesmos atributos e id diferente", () => {
  const entidade1 = new Teste({ nome: "Fulano", idade: 55 });
  const entidade2 = entidade1.clone({ id: IdVO.novo.valor });

  expect(entidade2.id.diferente(entidade1.id)).toBeTruthy();
  expect(entidade2.nome).toBe(entidade1.nome);
  expect(entidade2.idade).toBe(entidade1.idade);
});
