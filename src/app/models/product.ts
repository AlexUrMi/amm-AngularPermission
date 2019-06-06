export interface IProduct {
  id: string;
  name: string;
  price: number;
  isDeleted: boolean;
}


export class Product implements IProduct {
  id: string;
  name: string;
  price: number;
  isDeleted: boolean;
}
