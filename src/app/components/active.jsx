"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ActiveLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <ActiveLink href="/">
      <Homepage className={isActive ? "text-orange-400" : ""}>
        {children}
      </Homepage>
    </ActiveLink>
  );
}
