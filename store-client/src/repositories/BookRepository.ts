import Book from "../models/Book";
import config from "../config";

export class BookRepository  {
  urlPrefix = config.remoteRepositoryUrlPrefix

  async getAll(): Promise<Book[] | null>{
    const result = [
        {
            id:1, title:'Harry Potter', price:560, stockAmount:10,
            category:{ id:2, title:'Fantasy' }
        }
]    

    return result
  }
}
