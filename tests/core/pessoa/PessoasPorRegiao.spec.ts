import { PessoaBuilder } from "@/tests/data/PessoaBuilder";
import { PessoasPorRegiaoService } from "@/core/pessoa/PessoasPorRegiaoService";
import { RegiaoCpfVO } from "@/core/shared/ValueObject/RegiaoCpfVO";

test("Deve agrupar as pessoas da região de SP", () => {
  const pessoas = PessoaBuilder.criarLista(10000);
  const agrupadas = new PessoasPorRegiaoService(pessoas).agrupar();

  const pessoasSP = agrupadas.get(RegiaoCpfVO.SP) ?? [];
  const mesmaRegiao = pessoasSP.every(pessoa => pessoa.cpf.regiao.igual(RegiaoCpfVO.SP));

  console.log(pessoasSP);

  const pessoasRJ = agrupadas.get(RegiaoCpfVO.ES_RJ) ?? [];
  const regiaoDiferente = pessoasRJ.every(pessoa => pessoa.cpf.regiao.diferente(RegiaoCpfVO.SP));

  expect(mesmaRegiao).toBeTruthy();
  expect(regiaoDiferente).toBeTruthy();
});
