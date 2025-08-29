import { Ionicons } from '@expo/vector-icons';
import { cn } from '@shared/lib';
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { ClassNameValue } from 'tailwind-merge';

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  className?: ClassNameValue;
  isPassword?: boolean;
};

const Input = ({
  label,
  error,
  className,
  isPassword = false,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="mb-4 w-full">
      {label && (
        <Text className="mb-1 font-medium text-text-primary-light dark:text-text-primary-dark">
          {label}
        </Text>
      )}

      <View className="relative">
        <TextInput
          secureTextEntry={isPassword && !showPassword}
          className={cn(
            'w-full rounded-md border border-border-light bg-surface-light px-4 py-3 text-text-primary-light dark:border-border-dark dark:bg-surface-dark dark:text-text-primary-dark',
            error ? 'border-red-500' : '',
            className,
          )}
          placeholderTextColor="rgba(107, 114, 128, 0.7)"
          {...props}
        />

        {isPassword && (
          <TouchableOpacity
            className="absolute right-3 top-1/2 -translate-y-1/2"
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text className="mt-1 text-sm text-red-500">{error}</Text>}
    </View>
  );
};
export default Input;
