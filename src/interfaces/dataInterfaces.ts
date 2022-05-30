export interface IItens {
  id: number;
  tipo: string;
  preco: number;
}

export interface IOptions {
  nome?: string;
  descricao?: string;
  img?: string;
  itens?: IItens[];
}
export interface IAppData {
  id: number;
  categoria: string;
  opcoes: IOptions[];
}

export interface IOrder extends IOptions {
  notes:string;
  tipo?: string;
  preco:number;
  id: number;
  nome: string;
}