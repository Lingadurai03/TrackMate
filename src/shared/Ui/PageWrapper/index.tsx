import { cn } from '@shared/lib';
import { ClassValue } from 'clsx';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';

interface PageWrapperProps extends Omit<ViewProps, 'className'> {
  children?: React.ReactNode;
  className?: ClassValue;
  contentStyle?: StyleProp<ViewStyle>;
}

const PageWrapper = ({
  children,
  className,
  contentStyle,
  ...props
}: PageWrapperProps) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={[{ flexGrow: 1 }, contentStyle]}
        className={cn('bg-background-light dark:bg-background-dark', className)}
        keyboardShouldPersistTaps="handled"
        {...props}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PageWrapper;
