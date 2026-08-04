import { Metadata } from 'next';
import CertificationsClient from './CertificationsClient';

export const metadata: Metadata = {
  title: 'Certifications | Radhe',
  description: 'Radhe\'s professional certifications including AWS Solutions Architect, AWS Developer, Meta Frontend Developer, and more.',
};

export default function CertificationsPage() {
  return <CertificationsClient />;
}
