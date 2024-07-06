"use server";
import { revalidatePath } from "next/cache";
import connect from "./connect";
import { redirect } from "next/navigation";
//"next/dist/server/api-utils";

export async function handleDelete(id) {
  const db = connect();
  db.query(`DELETE FROM books WHERE id=$1`, [id]);
  revalidatePath(`/books`);
  redirect(`/books`);
}
