import DatabaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

type Category = {
  id: number;
  name: string;
};

class CategoryRepository {
  async readAll() {
    const [rows] = await DatabaseClient.query<Rows>("select * from category");
    return rows as Category[];
  }
}

export default new CategoryRepository();
