"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var descritorEmpresa = function (empresa) {
    var descricao = "\n    Razao Social: ".concat(empresa.razaoSocial, "\n    Nome Fantasia: ").concat(empresa.nomeFantasia, "\n    CNPJ: ").concat(empresa.cnpj, "\n    Endereco\n    Rua: ").concat(empresa.endereco.rua, " Bairro: ").concat(empresa.endereco.bairro, " Cidade: ").concat(empresa.endereco.cidade, " Numero: ").concat(empresa.endereco.numero, "\n    ");
    empresa.telefones.forEach(function (telefone) {
        descricao += "Telefones: (".concat(telefone.ddd, ") ").concat(telefone.numero);
    });
    descricao += "\n\nFuncionarios:";
    empresa.funcionarios.forEach(function (funcionario) {
        descricao += "\n    Nome: ".concat(funcionario.nome, "\n    Matricula: ").concat(funcionario.matricula, "\n    CPF: ").concat(funcionario.cpf, "\n    Endereco: Rua ").concat(funcionario.endereco.rua, ", Bairro ").concat(funcionario.endereco.bairro, ", Cidade ").concat(funcionario.endereco.cidade, ", Numero ").concat(funcionario.endereco.numero, "\n    Telefone: (").concat(funcionario.telefone.ddd, ") ").concat(funcionario.telefone.numero, "\n    ");
    });
    return descricao;
};
exports.default = descritorEmpresa;
