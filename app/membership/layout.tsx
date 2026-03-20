import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Membership Application',
  description: 'Join AWS Cloud Club UPHSL - Apply for official membership. Get your membership ID, access to exclusive AWS workshops, events, and community benefits. Led by Zyrus Alvez and team.',
  keywords: ['AWS Cloud Club membership', 'UPHSL AWS join', 'AWS student membership', 'cloud computing club'],
  openGraph: {
    title: 'Join AWS Cloud Club - UPHSL',
    description: 'Apply for official membership at AWS Cloud Club UPHSL',
  },
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
