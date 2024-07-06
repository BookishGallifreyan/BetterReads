import connect from "@/utils/connect";
import { auth } from "@clerk/nextjs";

export default async function page({ params }) {
  const db = connect();

  const userInfo = await db.query(`SELECT * from users where clerk_id=$1`, [
    params.userInfo,
  ]).rows[0];

  return (
    <div>
      <section>
        <h2>
          Username: <b>{userInfo.username}</b>
        </h2>
      </section>
    </div>
  );
}
