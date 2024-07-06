import connect from "@/utils/connect";
import { DeleteButton } from "@/app/components/delete";
import { notFound } from "@/app/notfound";

// export const dynamic = "force-dynamic"

export default async function Page({ params }) {
  const db = connect();
  const book = (await db.query(`SELECT * FROM books WHERE id=$1`, [params.id]))
    .rows[0];

  // export default async function NotFound({params}) {
  //   let book;
  // try {
  //   const db = connect();
  //   book = (await db.query(`SELECT * FROM books WHERE id=$1`, [params.book_id]))
  //     .rows[0];
  // } catch (err) {
  //   notFound();
  // }

  // if (!book) {
  //   notFound();
  // }

  return (
    <div className="flex justify-center align-top flex-col w-80 text-center mx-auto">
      <DeleteButton id={params.book_id} />
      <section>
        <Link href={`/${book.id}`}>
          <h2 className="text-2xl">{book.title}</h2>
          <p>{book.description}</p>
          <p>
            {book.released} | {book.quote}
          </p>
        </Link>
      </section>
    </div>
  );
}
