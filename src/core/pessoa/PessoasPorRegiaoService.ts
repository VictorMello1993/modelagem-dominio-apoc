import { Pessoa } from "@/core/pessoa/Pessoa";
import { RegiaoCpfVO } from "@/core/shared/ValueObject/RegiaoCpfVO";

export class PessoasPorRegiaoService {
  constructor (private pessoas: Pessoa[]) {}

  agrupar(): Map<RegiaoCpfVO, Pessoa[]> {
    return this.pessoas.reduce((map, pessoa) => {
      const regiao = pessoa.cpf.regiao;
      const pessoasDaRegiao = map.get(regiao) ?? [];
      pessoasDaRegiao.push(pessoa);
      map.set(regiao, pessoasDaRegiao);
      return map;
    }, new Map<RegiaoCpfVO, Pessoa[]>());
  }
}
