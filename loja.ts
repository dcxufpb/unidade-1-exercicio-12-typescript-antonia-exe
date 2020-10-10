import { Endereco } from "./endereco";

function isEmpty(str: string): boolean {
    let spaceCount = str.length - str.replace(" ", "").length;
    return str == null || spaceCount == str.length;
  }

export class Loja {

    constructor(public nome_loja: string, public endereco: Endereco,
        public telefone: string, public observacao: string, public cnpj: string, public inscricao_estadual: string) { }

    public dados_loja(): string {
        if (isEmpty(this.nome_loja)) {
            throw new Error(`O campo nome da loja é obrigatório`);
          } 
        if (isEmpty(this.endereco.logradouro)) {
            throw new Error(`O campo logradouro do endereço é obrigatório`);
        }

        if (isEmpty(this.endereco.municipio)) {
            throw new Error(`O campo município do endereço é obrigatório`);
        }

        if (isEmpty(this.endereco.estado)) {
            throw new Error(`O campo estado do endereço é obrigatório`);
        }

        if (isEmpty(this.cnpj)) {
            throw new Error(`O campo CNPJ da loja é obrigatório`);
        }

        if (isEmpty(this.inscricao_estadual)) {
            throw new Error(`O campo inscrição estadual da loja é obrigatório`);
        }

        var numero1 : string = this.endereco.numero + "";
        if(this.endereco.numero == 0){
            numero1 = "s/n";
        }

        var linha2 = `${this.endereco.logradouro}, ${numero1}`;
        if (! isEmpty(this.endereco.complemento)){
            linha2 += ` ${this.endereco.complemento}`;
        }
  
        var linha3 = "";
        if (! isEmpty(this.endereco.bairro)){
            linha3 += `${this.endereco.bairro} - `;
        }
        linha3 += `${this.endereco.municipio} - ${this.endereco.estado}`;

        var linha4 = "";
        if (! isEmpty(this.endereco.cep)){
            linha4 = `CEP:${this.endereco.cep}`;
        }
        if (! isEmpty(this.telefone)){
            if (! isEmpty(linha4)){
                linha4 += ` `;
            }
        linha4 += `Tel ${this.telefone}`;
        }
        if (! isEmpty(linha4)){
            linha4 += `\n`;
        }

        var linha5 = "";
        if (! isEmpty(this.observacao)){
            linha5 += `${this.observacao}`;
        }

        let output = `${this.nome_loja}\n`
        output += `${linha2}\n`
        output += `${linha3}\n`
        output += `${linha4}`
        output += `${linha5}\n`
        output += `CNPJ: ${this.cnpj}\n`
        output += `IE: ${this.inscricao_estadual}\n`

        return output;
    }
}