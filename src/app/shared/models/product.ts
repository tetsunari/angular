export class Product {
  id: number;
  name: string;
  price: number;
  description: string;

  constructor(id: any, name: any, price: any, description: any) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}
