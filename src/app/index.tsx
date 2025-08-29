import { LoginForm } from '@features/auth/ui';
import { KeyboardAvoidingWrapper, PageWrapper, ThemedText } from '@shared/Ui';
import { View } from 'react-native';

export default function Home() {
  return (
    <KeyboardAvoidingWrapper>
      <PageWrapper className={'px-6'}>
        <>
          <View className="flex gap-2 pt-10">
            <ThemedText variant="title">Welcome to Pro Fitness!</ThemedText>
            <ThemedText variant="body">
              Hello there, sign in to continue!
            </ThemedText>
          </View>
          <LoginForm />
        </>
      </PageWrapper>
    </KeyboardAvoidingWrapper>
  );
}
