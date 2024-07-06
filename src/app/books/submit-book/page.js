import connect from "@/utils/connect";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export default function Page() {
  async function handleSubmit(formData) {
    "use server";
    const obj = Object.fromEntries(formData);
    const { title, author, img_url, description, released, quote } = obj;
    const db = connect();

    db.query(
      `INSERT INTO books (title, author, img_url, description, released, quote) VALUES ($1, $2, $3, $4, $5, $6)`,
      [title, author, img_url, description, released, quote]
    );
    redirect("/");
  }
  return (
    <div>
      <marquee>
        <h3>Books are the best!!</h3>
      </marquee>
      <form
        action={handleSubmit}
        style={{ color: "black" }}
        className="flex flex-col w-60 m-auto"
      >
        <input name="title" placeholder="title"></input>
        <input name="author" placeholder="author"></input>
        <input name="img_url" placeholder="img_url"></input>
        <input name="description" placeholder="description"></input>
        <input name="released" placeholder="released"></input>
        <input name="quote" placeholder="quote"></input>
        <button
          type="submit"
          className="m-8 border-solid border-2 border-orange-700 hover:border-rose-600"
          style={{ color: "tomato" }}
        >
          _submit
        </button>
      </form>
    </div>
  );
}
