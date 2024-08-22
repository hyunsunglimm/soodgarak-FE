import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva('py-8 px-16 rounded-12 flex justify-center items-center', {
  variants: {
    variant: {
      default: 'bg-primary hover:bg-primary/90 text-white',
      outline: 'border border-primary bg-white text-primary hover:bg-primary/10',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline'
    },
    size: {
      default: '',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10'
    },
    disabled: {
      true: 'cursor-not-allowed',
      false: ''
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    disabled: false
  }
});

type ButtonProps = { asChild?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disabled, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, disabled, className }))}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
