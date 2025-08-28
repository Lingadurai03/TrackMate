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
  loading?: boolean;
  loadingText?: string;
  disabled?: boolean;
}

const Button = ({
  className,
  children,
  variant = 'primary',
  loading = false,
  loadingText,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'flex-row items-center justify-center rounded-xl px-4 py-3 active:opacity-80';

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
          <Text className="font-medium text-white">
            {loadingText ?? 'Loading...'}
          </Text>
        </>
      ) : (
        <Text
          className={cn(
            'font-medium',
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
