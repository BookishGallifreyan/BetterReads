import connect from "@/utils/connect";
import { AddPosts } from "../components/comments";

export default async function Page() {
  return (
    <div>
      <h1>Book Discussion!</h1>
      <AddPosts />
    </div>
  );
}
