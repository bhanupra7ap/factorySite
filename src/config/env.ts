// Centralized environment configuration for contact info
// All details are sourced from VITE_* variables only (no hardcoded defaults)

export type AppEnv = {
  CONTACT_EMAIL?: string;
  CONTACT_PHONE?: string;
  CONTACT_ADDRESS?: string;
};

export const env: Readonly<AppEnv> = {
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL as string | undefined,
  CONTACT_PHONE: import.meta.env.VITE_CONTACT_PHONE as string | undefined,
  CONTACT_ADDRESS: import.meta.env.VITE_CONTACT_ADDRESS as string | undefined,
};

export const sanitizedPhone = env.CONTACT_PHONE
  ? env.CONTACT_PHONE.replace(/[^+\d]/g, "")
  : undefined;
