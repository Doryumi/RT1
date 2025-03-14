import Funcionario from "./funcionario"

let descritorEmpresa = (empresa): any =>{
    let descricao =
    `
    Razao Social: ${empresa.razaoSocial}
    Nome Fantasia: ${empresa.nomeFantasia}
    CNPJ: ${empresa.cnpj}
    Endereco
    Rua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} Numero: ${empresa.endereco.numero}
    `
    empresa.telefones.forEach((telefone: any) => {
        descricao += `Telefones: (${telefone.ddd}) ${telefone.numero}`
    })

    descricao += `\n\nFuncionarios:`
    empresa.funcionarios.forEach((funcionario: any) => {
        descricao += `
    Nome: ${funcionario.nome}
    Matricula: ${funcionario.matricula}
    CPF: ${funcionario.cpf}
    Endereco: Rua ${funcionario.endereco.rua}, Bairro ${funcionario.endereco.bairro}, Cidade ${funcionario.endereco.cidade}, Numero ${funcionario.endereco.numero}
    Telefone: (${funcionario.telefone.ddd}) ${funcionario.telefone.numero}
    `
    })

    return descricao
}

export default descritorEmpresa