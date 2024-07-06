import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { MedievalSharp } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/app/components/NavBar";

const inter = MedievalSharp({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "BetterReads",
  description:
    "Very much like another popular book discussion website but better as it's made by me, not Jeff Bezos.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-cyan-600">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <NavigationBar />
          <div className="max-w-screen-lg">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
