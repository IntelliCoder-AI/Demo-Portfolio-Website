import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Button } from '../Button';

// Mock next/link to render a simple anchor tag
vi.mock('next/link', () => ({
  default: ({ children, href, className }: { children: React.ReactNode, href: string, className: string }) => (
    <a href={href} className={className} data-testid="next-link">
      {children}
    </a>
  ),
}));

describe('Button component', () => {
  it('renders a button tag by default with children', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('renders an anchor tag when href is provided', () => {
    render(<Button href="/contact">Contact Me</Button>);
    const link = screen.getByRole('link', { name: /contact me/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/contact');
    expect(link).toHaveAttribute('data-testid', 'next-link');
  });

  it('applies the appropriate variant classes', () => {
    render(<Button variant="outline">Outline Button</Button>);
    const button = screen.getByRole('button', { name: /outline button/i });
    // Check if it includes a class from the primary variant string
    expect(button.className).toContain('border-2 border-[#B8860B]');
  });

  it('shows a spinner when isLoading is true and disables the button', () => {
    render(<Button isLoading>Submit</Button>);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeDisabled();
    
    // Check if spinner SVG is present (our Spinner component uses <svg>)
    // Wait, the easiest way is to check by class or role if Spinner provides one.
    // Instead we can just check if the spinner div exists within button
    const spinner = button.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });
});
