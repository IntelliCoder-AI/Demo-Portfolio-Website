export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerLogo: string;
  credentialId: string;
  issuedDate: string;
  expiryDate?: string;
  verifyUrl: string;
  badgeColor: string; // Tailwind color class or hex
}
