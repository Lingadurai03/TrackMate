import { useKeyboardStatus } from '@shared/hooks';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';

interface KeyboardAvoidingWrapperProps extends ViewProps {
  children?: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  keyboardVerticalOffset?: number;
}

const KeyboardAvoidingWrapper = ({
  children,
  contentStyle,
  keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0,
  ...props
}: KeyboardAvoidingWrapperProps) => {
  const value = useKeyboardStatus();
  return (
    <KeyboardAvoidingView
      style={[{ flex: 1 }, contentStyle]}
      behavior={value ? 'padding' : undefined}
      keyboardVerticalOffset={keyboardVerticalOffset}
      {...props}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
