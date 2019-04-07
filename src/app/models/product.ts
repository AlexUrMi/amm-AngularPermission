export interface iproduct {
  id: string;
  name: string;
  price: number;
  isDeleted: boolean;
}


export class product implements iproduct {
  id: string;
  name: string;
  price: number;
  isDeleted: boolean;
}
