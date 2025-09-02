import { SocialButton } from '@shared/Ui';
import React from 'react';
import { View } from 'react-native';

const OAuth = () => {
  return (
    <View className=" flex-row justify-center gap-4">
      <SocialButton
        provider="google"
        onPress={() => console.log('Google login')}
        size={30}
      />
      <SocialButton
        provider="facebook"
        onPress={() => console.log('Facebook login')}
        size={30}
      />
      <SocialButton
        provider="github"
        onPress={() => console.log('GitHub login')}
        size={30}
      />
    </View>
  );
};

export default OAuth;
