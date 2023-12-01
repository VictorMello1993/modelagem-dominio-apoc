import { CpfVO } from "./CpfVO";

export class RegiaoCpfVO {
  static readonly TODAS = [
    new RegiaoCpfVO(0, ["RS"]),
    new RegiaoCpfVO(1, ["DF", "GO", "MS", "MT", "TO"]),
    new RegiaoCpfVO(2, ["AC", "AM", "AP", "PA", "RO", "RR"]),
    new RegiaoCpfVO(3, ["CE", "MA", "PI"]),
    new RegiaoCpfVO(4, ["AL", "PB", "PE", "RN"]),
    new RegiaoCpfVO(5, ["BA", "SE"]),
    new RegiaoCpfVO(6, ["MG"]),
    new RegiaoCpfVO(7, ["ES", "RJ"]),
    new RegiaoCpfVO(8, ["SP"]),
    new RegiaoCpfVO(9, ["PR", "SC"])
  ];

  private constructor(readonly codigo: number, readonly estados: string[]) {}

  static readonly RS = RegiaoCpfVO.TODAS[0];
  static readonly DF_GO_MS_MT_TO = RegiaoCpfVO.TODAS[1];
  static readonly AC_AM_AP_PA_RO_RR = RegiaoCpfVO.TODAS[2];
  static readonly CE_MA_PI = RegiaoCpfVO.TODAS[3];
  static readonly AL_PB_PE_RN = RegiaoCpfVO.TODAS[4];
  static readonly BA_SE = RegiaoCpfVO.TODAS[5];
  static readonly MG = RegiaoCpfVO.TODAS[6];
  static readonly ES_RJ = RegiaoCpfVO.TODAS[7];
  static readonly SP = RegiaoCpfVO.TODAS[8];
  static readonly PR_SC = RegiaoCpfVO.TODAS[9];

  static porCodigo(codigo: number): RegiaoCpfVO {
    return RegiaoCpfVO.TODAS[codigo];
  }

  static porCpf(cpf: CpfVO): RegiaoCpfVO {
    const codigo = +cpf.valor.replace(/\D/g, "")[8];
    return RegiaoCpfVO.TODAS[codigo];
  }

  igual(outraRegiao: RegiaoCpfVO): boolean {
    return this.codigo === outraRegiao?.codigo;
  }

  diferente(outraRegiao: RegiaoCpfVO): boolean {
    return this.codigo !== outraRegiao?.codigo;
  }
}
