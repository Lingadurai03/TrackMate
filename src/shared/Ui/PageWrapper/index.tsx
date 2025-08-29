import { cn } from '@shared/lib';
import { ClassValue } from 'clsx';
import React from 'react';
import {
  ScrollView,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface PageWrapperProps extends Omit<ViewProps, 'className'> {
  children?: React.ReactNode;
  className?: ClassValue;
  contentClassName?: ClassValue;
  contentStyle?: StyleProp<ViewStyle>;
}

const PageWrapper = ({
  children,
  className,
  contentClassName,
  contentStyle,
  ...props
}: PageWrapperProps) => {
  return (
    <SafeAreaView
      className={cn('flex-1 bg-background-light dark:bg-background-dark')}
    >
      <ScrollView
        contentContainerStyle={[{ flexGrow: 1 }, contentStyle]}
        className={cn(className)}
        keyboardShouldPersistTaps="handled"
        bounces={false}
        {...props}
      >
        <View className={cn(contentClassName)}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PageWrapper;
