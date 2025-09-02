import { LoginForm, OAuth } from '@features/auth/ui';
import {
  AppLink,
  KeyboardAvoidingWrapper,
  PageWrapper,
  ThemedText,
} from '@shared/Ui';
import { View } from 'react-native';

export default function Home() {
  return (
    <KeyboardAvoidingWrapper>
      <PageWrapper className={'px-6'}>
        <View className="gap-4">
          <View className="mt-28 flex gap-2">
            <ThemedText variant="title">Welcome to Pro Fitness!</ThemedText>
            <ThemedText variant="body">
              Hello there, sign in to continue!
            </ThemedText>
          </View>
          <LoginForm />
          <ThemedText className={'text-center'}>Or Login With</ThemedText>
          <OAuth />
          <View className="mt-10 flex-row justify-center">
            <ThemedText> Don’t have an account? </ThemedText>
            <AppLink href={'register'}>Register!</AppLink>
          </View>
        </View>
      </PageWrapper>
    </KeyboardAvoidingWrapper>
  );
}
