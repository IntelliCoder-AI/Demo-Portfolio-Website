'use server';

import { contactSchema } from '@/lib/validations/contact';

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    const validatedData = contactSchema.parse(data);

    // Simulate sending email
    console.log('Sending email with data:', validatedData);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'Failed to send message. Please check your inputs or try again later.',
    };
  }
}
