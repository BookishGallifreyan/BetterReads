import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>
        The book you&aposve called isn&apost available right now. Please go Home
        and try again.
      </h2>
      <Link href="/">Home</Link>
    </div>
  );
}
