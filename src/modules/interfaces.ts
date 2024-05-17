export interface adminObj {
  id?: string;
  full_name?: string;
  phone?: string;
  address?: string;
  email?: string;
  password?: string;
  is_superAdmin?: boolean;
  is_active?: boolean;
}

export interface adminLogin {
  email: string;
  password: string;
}

export interface orderObj {
  id?: string | number;
  full_name: string;
  phone: string;
  product: {
    id: string;
    name: string;
  };
}

export interface addOrderObj {
  id?: string | number;
  full_name: string;
  phone: string;
  product_id: string;
}
