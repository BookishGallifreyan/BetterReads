import connect from "../../../utils/connect";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Page(params) {
  const db = connect();
  const book = (
    await db.query(`SELECT * FROM books WHERE id = $1`, [params.book_id])
  ).rows[0];

  console.log(book);

  async function handleSubmit(FormData) {
    "use server";
    const db = connect();

    const data = Objects.fromEntries(FormData);
    console.log(data);
    const { title, author, img_url, description, released, quote } = data;
    db.query(
      `UPDATE books SET
     title = $1,
     author = $2,
     img_url = $3,
     description = $4,
     released = $5,
     quote = $6`,
      [title, author, img_url, description, released, quote, params.book_id]
    );

    revalidatePath(`/books/${params.book_id}`);
    redirect(`/books/${params.book_id}`);
  }

  return (
    <div>
      <form
        action={handleSubmit}
        className="flex flex-col w-60 m-auto *:text-black"
      >
        <input
          name="title"
          placeholder="title"
          defaultValue={book.title}
        ></input>
        <input
          name="author"
          placeholder="author"
          defaultValue={book.author}
        ></input>
        <input
          name="img_url"
          placeholder="img_url"
          defaultValue={book.img_url}
        ></input>
        <input
          name="description"
          placeholder="description"
          defaultValue={book.description}
        ></input>
        <input
          name="released"
          placeholder="released"
          defaultValue={book.released}
        ></input>
        <input
          name="quote"
          placeholder="quote"
          defaultValue={book.quote}
        ></input>
        <button type="submit" className="m-8">
          _submit
        </button>
      </form>
    </div>
  );
}
