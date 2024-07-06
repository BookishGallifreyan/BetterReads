import connect from "@/utils/connect";

export default async function Page() {
  const db = connect();
  const books = (await db.query(`SELECT * FROM books`)).rows;

  return (
    <div>
      <h1>All the Books!</h1>
      <section>
        {books.map((books) => {
          return (
            <div>
              <p>
                <b>Title: </b>
                {books.title}
              </p>
              <p>
                <b>Author: </b>
                {books.author}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
