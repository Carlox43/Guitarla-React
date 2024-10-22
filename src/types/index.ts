export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type CartItem = Guitar & {
  quantity: number;
};

// con interface
// export interface CartItem extends Guitar  {
//     quantity: number;
//   };

// con Pick
// export type CartItem = Pick<Guitar, 'id'| 'name'| 'price' > & {
//     quantity : number
// }
