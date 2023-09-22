import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thirsty | package Details',
};

export default function PackagesDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
