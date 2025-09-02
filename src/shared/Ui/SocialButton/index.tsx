import { FontAwesome } from '@expo/vector-icons';
import { cn } from '@shared/lib';
import { ClassValue } from 'clsx';
import React from 'react';
import { Pressable } from 'react-native';

interface SocialButtonProps {
  provider: 'google' | 'facebook' | 'github';
  onPress: () => void;
  className?: ClassValue;
  size?: number;
}

type FontAwesomeIconName = keyof typeof FontAwesome.glyphMap;
interface ProviderStyle {
  icon: FontAwesomeIconName;
  color: string;
}

const providerStyles: Record<'google' | 'facebook' | 'github', ProviderStyle> =
  {
    google: {
      icon: 'google',
      color: '#228896',
    },
    facebook: { icon: 'facebook', color: '#228896' },
    github: { icon: 'github', color: '#228896' },
  };

const SocialButton = ({
  provider,
  onPress,
  className,
  size = 22,
}: SocialButtonProps) => {
  const { icon, color } = providerStyles[provider];

  return (
    <Pressable
      onPress={onPress}
      className={cn(
        'flex-row items-center justify-center rounded-full p-3 active:opacity-80',

        className,
      )}
    >
      <FontAwesome name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default SocialButton;
