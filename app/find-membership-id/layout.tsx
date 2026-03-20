import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find Your Membership ID',
  description: 'Retrieve your AWS Cloud Club UPHSL membership ID using your school email. Access your membership information and benefits.',
  keywords: ['find membership ID', 'AWS Cloud Club membership', 'UPHSL membership lookup'],
  openGraph: {
    title: 'Find Your Membership ID - AWS Cloud Club UPHSL',
    description: 'Retrieve your AWS Cloud Club UPHSL membership ID',
  },
};

export default function FindMembershipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
