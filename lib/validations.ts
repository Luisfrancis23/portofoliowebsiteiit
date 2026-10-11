export interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

export interface ValidationResult {
  ok: boolean;
  errors: Partial<Record<keyof ContactInput, string>>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: ContactInput): ValidationResult {
  const errors: Partial<Record<keyof ContactInput, string>> = {};

  const name = (input.name || "").trim();
  if (name.length < 2) {
    errors.name = "Hakerek o-nia naran kompletu (min. 2 karater).";
  } else if (name.length > 100) {
    errors.name = "Naran barak liu (máks. 100 karater).";
  }

  const email = (input.email || "").trim();
  if (!email) {
    errors.email = "Hakerek o-nia email.";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "Email formatu la diak. Ex.: nome@exemplo.com";
  }

  const subject = (input.subject || "").trim();
  if (subject.length > 200) {
    errors.subject = "Asuntu barak liu (máks. 200 karater).";
  }

  const message = (input.message || "").trim();
  if (message.length < 10) {
    errors.message = "Hakerek mensajen (min. 10 karater).";
  } else if (message.length > 5000) {
    errors.message = "Mensajen barak liu (máks. 5000 karater).";
  }

  return { ok: Object.keys(errors).length === 0, errors };
}
