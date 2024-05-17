export interface category {
  id?: number | string | undefined;
  name: string;
  createdAt: any;
}

export interface updatecategory {
  category_id?: number | string | undefined;
  name?: string;
}
