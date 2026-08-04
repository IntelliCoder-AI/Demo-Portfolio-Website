'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { contactSchema as contactFormSchema } from '@/lib/validations/contact'; // Assume it exists
import { submitContactForm as submitContact } from '@/actions/contact'; // Assume it exists
// Using a mock toast implementation or imported if available
// import { useToast } from '@/hooks/useToast';
import type { ContactFormData } from '@/types';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success'|'error', message: string} | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => formData.append(key, value as string));
      const result = await submitContact(formData);
      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        reset();
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An unexpected error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
          <Input 
            id="name" 
            placeholder="John Doe" 
            {...register('name')} 
            className="focus-visible:ring-2 focus-visible:ring-amber-500/50"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
          <Input 
            id="email" 
            type="email" 
            placeholder="john@example.com" 
            {...register('email')} 
            className="focus-visible:ring-2 focus-visible:ring-amber-500/50"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
        <Input 
          id="subject" 
          placeholder="Project Inquiry" 
          {...register('subject')} 
          className="focus-visible:ring-2 focus-visible:ring-amber-500/50"
        />
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
        <Textarea 
          id="message" 
          placeholder="Tell me about your project..." 
          rows={6}
          {...register('message')} 
          className="focus-visible:ring-2 focus-visible:ring-amber-500/50 resize-none"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      {submitStatus && (
        <div className={`p-4 rounded-lg text-sm ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800' : 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800'}`}>
          {submitStatus.message}
        </div>
      )}
      
      <Button 
        type="submit" 
        size="lg" 
        className="w-full sm:w-auto bg-gradient-to-r from-[#B8860B] to-[#D4A843] hover:opacity-90 text-white border-0 shadow-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
        ) : (
          <><Send className="mr-2 h-4 w-4" /> Send Message</>
        )}
      </Button>
    </form>
  );
}
