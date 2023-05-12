import { Support } from "./Support";
import { User } from "./User";

export class ResponseApi{
  data!: User[] | User;
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  support?: Support;
}
