import descritorEmpresa from "./descritorEmpresa"
import Empresa from "./empresa"
import Endereco from "./endereco"
import Funcionario from "./funcionario"
import Telefone from "./telefone"

let endereco = new Endereco(123, 'Av. Paulista', 'Jardim Paulista', 'Sao Paulo')
let telefone = new Telefone('011', '9-9999-9999')
let funcionario = new Funcionario('Tony Stark', '123456789', '999.999.999-99', endereco, telefone)
let funcionarios = [funcionario]
let telefones = [telefone]
let empresa = new Empresa('ABC LTDA', 'Mercado online', '999-999-999-999-99', endereco, funcionarios, telefones)

console.log(descritorEmpresa(empresa))

