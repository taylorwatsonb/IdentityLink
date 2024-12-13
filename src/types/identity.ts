export interface Identity {
  did: string;
  publicKey: string;
  credentials: Credential[];
  profile: {
    name?: string;
    avatar?: string;
    bio?: string;
  };
}

export interface Credential {
  id: string;
  type: string;
  issuer: string;
  issuanceDate: string;
  expirationDate?: string;
  claims: Record<string, any>;
}