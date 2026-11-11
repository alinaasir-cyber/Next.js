"use server";

export type FormState = {
  message: string;
  success: boolean;
};

export async function submitEmail(
  _previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get("email");

  if (typeof email !== "string" || !email.trim()) {
    return { message: "Please enter your email address.", success: false };
  }

  console.info("Email form submitted:", email.trim());
  return { message: "Thanks for submitting!", success: true };
}

export async function submitPassword(
  _previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const password = formData.get("password");

  if (typeof password !== "string" || password.length < 6) {
    return {
      message: "Password must be at least 6 characters long.",
      success: false,
    };
  }

  return { message: "Password accepted.", success: true };
}

export async function submitName(
  _previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");

  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    !firstName.trim() ||
    !lastName.trim()
  ) {
    return {
      message: "Please enter both your first and last name.",
      success: false,
    };
  }

  return {
    message: `Hello, ${firstName.trim()} ${lastName.trim()}!`,
    success: true,
  };
}
