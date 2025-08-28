import { cn } from '@shared/lib';
import { ClassValue } from 'clsx';
import React from 'react';
import { View, ViewProps } from 'react-native';

interface WrapperProps extends Omit<ViewProps, 'className'> {
  className?: ClassValue;
  children: React.ReactNode;
}

const Wrapper = ({ className, children, ...props }: WrapperProps) => {
  return (
    <View
      className={cn(
        'bg-surface-light dark:bg-surface-dark rounded-2xl p-4',
        className,
      )}
      {...props}
    >
      {children}
    </View>
  );
};
export default Wrapper;
