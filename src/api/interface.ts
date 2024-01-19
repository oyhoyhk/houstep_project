export interface ItemDto {
  event: number;
  id: string;
  materialType: number;
  name: string;
  price: number;
}

export type CartDto = Map<string, number>;
