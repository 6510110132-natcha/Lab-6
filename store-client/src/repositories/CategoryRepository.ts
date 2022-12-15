import Category from "../models/Category";

export class CategoryRepository  {
  
    async getAll(): Promise<Category[] | null>{
      const result = [
        { id: 1, title: 'Computer' },
        { id: 2, title: 'Fantasy' },
      ]
  
      return result
    }
}
