import { Certification } from '@/types/certification';

// This data can be replaced with API calls
export const certificationsData: Certification[] = [
  {
    id: "1",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    issuerLogo: "/images/certifications/aws.webp",
    credentialId: "AWS-SAA-123456",
    issuedDate: "2024-06-15T00:00:00Z",
    expiryDate: "2027-06-15T00:00:00Z",
    verifyUrl: "https://aws.amazon.com/verification",
    badgeColor: "bg-orange-500"
  },
  {
    id: "2",
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    issuerLogo: "/images/certifications/aws.webp",
    credentialId: "AWS-DVA-789012",
    issuedDate: "2023-11-20T00:00:00Z",
    expiryDate: "2026-11-20T00:00:00Z",
    verifyUrl: "https://aws.amazon.com/verification",
    badgeColor: "bg-orange-500"
  },
  {
    id: "3",
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta / Coursera",
    issuerLogo: "/images/certifications/meta.webp",
    credentialId: "META-FE-345678",
    issuedDate: "2023-05-10T00:00:00Z",
    verifyUrl: "https://coursera.org/verify/professional-cert",
    badgeColor: "bg-blue-600"
  },
  {
    id: "4",
    name: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    issuerLogo: "/images/certifications/gcp.webp",
    credentialId: "GCP-DL-901234",
    issuedDate: "2024-02-28T00:00:00Z",
    verifyUrl: "https://google.credential.net",
    badgeColor: "bg-blue-500"
  },
  {
    id: "5",
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    issuerLogo: "/images/certifications/hashicorp.webp",
    credentialId: "HC-TA-567890",
    issuedDate: "2025-01-15T00:00:00Z",
    expiryDate: "2027-01-15T00:00:00Z",
    verifyUrl: "https://credly.com/verify",
    badgeColor: "bg-purple-600"
  }
];
