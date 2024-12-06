import DatabaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";
type program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};
class programRepository {
  async readAll() {
    const [rows] = await DatabaseClient.query<Rows>("select * from program");
    return rows as program[];
  }
}

export default new programRepository();
