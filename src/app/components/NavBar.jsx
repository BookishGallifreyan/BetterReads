import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import Link from "next/link";

export default function NavigationBar() {
  return (
    <ol className="flex sticky *:m-4 items-start h-1/6">
      <li>
        <Link href="/"></Link>
      </li>
      <li>
        <Link href="/">All the Books!</Link>
      </li>
      <li>
        <Link href="/books/submit-book">Add your favourite book!</Link>
      </li>
      <li>
        <Link href="/forum">forum</Link>
      </li>
      <li>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </li>
    </ol>
  );
}
