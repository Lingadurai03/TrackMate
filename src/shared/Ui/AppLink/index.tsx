import { cn } from '@shared/lib';
import { ClassValue } from 'clsx';
import { Link, LinkProps } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

type AppLinkProps = Omit<LinkProps, 'asChild' | 'className'> & {
  className?: ClassValue;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'muted';
  size?: 'sm' | 'md' | 'lg';
};

const AppLink = ({
  className,
  children,
  variant = 'primary',
  size = 'md',
  ...props
}: AppLinkProps) => {
  const variants: Record<string, string> = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    muted: 'text-gray-500 dark:text-gray-400',
  };

  const sizes: Record<string, string> = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <Link {...props}>
      <Text
        className={cn(
          'font-medium underline',
          variants[variant],
          sizes[size],
          className,
        )}
      >
        {children}
      </Text>
    </Link>
  );
};

export default AppLink;
