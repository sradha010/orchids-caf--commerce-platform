"use server";

export async function submitContactForm(formData: FormData) {
  // Simulating a database call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  
  console.log("Form submission received:", { name, email, message });
  
  return { success: true };
}
