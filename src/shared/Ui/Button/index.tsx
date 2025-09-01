import { cn } from '@shared/lib';
import { ClassValue } from 'clsx';
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
} from 'react-native';

interface ButtonProps extends Omit<PressableProps, 'className'> {
  className?: ClassValue;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  loadingText?: string;
  disabled?: boolean;
}

const Button = ({
  className,
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  loadingText,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'flex-row items-center justify-center rounded-xl active:opacity-80';

  const sizes: Record<string, string> = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  const variants: Record<string, string> = {
    primary: 'bg-primary text-white',
    secondary:
      'bg-surface-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark',
    outline:
      'border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark',
  };

  return (
    <Pressable
      className={cn(
        baseStyles,
        sizes[size], // ✅ applied size
        variants[variant],
        (disabled || loading) && 'opacity-50',
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <ActivityIndicator size="small" color="#fff" className="mr-2" />
          <Text
            className={cn(
              'font-medium',
              size === 'sm'
                ? 'text-sm'
                : size === 'lg'
                  ? 'text-lg'
                  : 'text-base',
              variant === 'primary'
                ? 'text-white'
                : 'text-text-primary-light dark:text-text-primary-dark',
            )}
          >
            {loadingText ?? 'Loading...'}
          </Text>
        </>
      ) : (
        <Text
          className={cn(
            'font-medium',
            size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base',
            variant === 'primary'
              ? 'text-white'
              : 'text-text-primary-light dark:text-text-primary-dark',
          )}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
