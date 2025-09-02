import { OAuth, RegisterForm } from '@features/auth/ui';
import {
  AppLink,
  KeyboardAvoidingWrapper,
  PageWrapper,
  ThemedText,
} from '@shared/Ui';
import { View } from 'react-native';

export default function Register() {
  return (
    <KeyboardAvoidingWrapper>
      <PageWrapper className={'px-6'}>
        <View className="gap-4">
          <View className="mt-28 flex gap-2">
            <ThemedText variant="title">Create Accounts</ThemedText>
            <ThemedText variant="body">
              Please enter your credentials to proceed
            </ThemedText>
          </View>
          <RegisterForm />
          <ThemedText className={'text-center'}>Or Register With</ThemedText>
          <OAuth />
          <View className="mt-10 flex-row justify-center">
            <ThemedText> Already have an account? </ThemedText>
            <AppLink href={'/'} className="font-bold no-underline">
              Login!
            </AppLink>
          </View>
        </View>
      </PageWrapper>
    </KeyboardAvoidingWrapper>
  );
}
