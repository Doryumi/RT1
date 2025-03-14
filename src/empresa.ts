import Endereco from "./endereco"
import Funcionario from "./funcionario"
import Telefone from "./telefone"

export default class Empresa {
    public razaoSocial: string
    public nomeFantasia: string
    public cnpj: string
    public endereco: Endereco
    public funcionarios: Funcionario[]
    public telefones: Telefone[]

    constructor(razaoSocial: string, nomeFantasia: string, cnpj: string, endereco: Endereco, funcionarios: Funcionario[], telefones: Telefone[]){
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
        this.endereco = endereco
        this.funcionarios = funcionarios
        this.telefones = telefones
    }
}
