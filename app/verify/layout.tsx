import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verify Certificate or Membership',
  description: 'Verify AWS Cloud Club UPHSL membership ID or certificate. Check authenticity of certificates issued by AWS Cloud Club at University of Perpetual Help System Laguna.',
  keywords: ['verify AWS certificate', 'UPHSL certificate verification', 'AWS membership verification', 'certificate authenticity'],
  openGraph: {
    title: 'Verify Certificate or Membership - AWS Cloud Club UPHSL',
    description: 'Verify AWS Cloud Club UPHSL membership ID or certificate',
  },
};

export default function VerifyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
