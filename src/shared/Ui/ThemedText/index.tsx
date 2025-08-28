import { cn } from '@shared/lib';
import { ClassValue } from 'clsx';
import React from 'react';
import { Text, TextProps } from 'react-native';

interface ThemedTextProps extends Omit<TextProps, 'className'> {
  variant?: 'title' | 'subtitle' | 'body' | 'caption';
  className?: ClassValue; // accepts string | object | array etc
  children: React.ReactNode;
}

export const ThemedText = ({
  variant = 'body',
  className,
  children,
  ...props
}: ThemedTextProps) => {
  const baseStyles: Record<NonNullable<ThemedTextProps['variant']>, string> = {
    title: 'text-2xl font-bold',
    subtitle: 'text-lg font-semibold',
    body: 'text-base',
    caption: 'text-sm text-text-secondary-light dark:text-text-secondary-dark',
  };

  return (
    <Text
      className={cn(
        baseStyles[variant],
        'text-text-primary-light dark:text-text-primary-dark',
        className,
      )}
      {...props}
    >
      {children}
    </Text>
  );
};
