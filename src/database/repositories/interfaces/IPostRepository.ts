import { Post } from "@prisma/client";

export interface IPostRepository {
  create(author_id: string, content: string): Promise<Post>;
  deleteById(id: string): Promise<Post>;
  update(id: string, content: string): Promise<Post>;
}