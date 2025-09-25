import type Note from "../models/Note";

export interface INotesService {
  getAll(): Promise<Note[]>;
  create(payload: { title: string; content: string }): Promise<Note>;
  update(
    id: string,
    payload: Partial<Pick<Note, "title" | "content">>
  ): Promise<Note>;
  delete(id: string): Promise<void>;
}
