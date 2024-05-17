export interface productObj {
  id?: number | string;
  name: string;
  image: string;
  price: string;
  reduced_price: string;
  qr_code: string;
  description: string;
  value: string;
  category: {
    name: string;
    image: string;
  };
}

export interface updateProductObj {
  id?: number | string;
  name?: string;
  price?: string;
  reduced_price?: string;
  qr_code?: string;
  description?: string;
  value?: string;
  category_id: string;
}

export interface searchProductObj {
  name?: any;
}
