import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thirsty | Sign in",
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
