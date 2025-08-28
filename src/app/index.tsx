import { useTheme } from '@shared/providers';
import {
  Button,
  Input,
  KeyboardAvoidingWrapper,
  PageWrapper,
  Wrapper,
} from '@shared/Ui';
import { ThemedText } from '@shared/Ui/ThemedText';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <KeyboardAvoidingWrapper>
      <PageWrapper>
        <Wrapper>
          <ThemedText>🚀 Theme tokens working! (no `dark:` gg)</ThemedText>

          <Button variant="outline" onPress={toggleTheme}>
            `Switch to ${theme} mode`
          </Button>
        </Wrapper>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input isPassword />
        <Input isPassword />
        <Input isPassword />
        <Input isPassword />
        <Input isPassword />
        <Input isPassword />
        <Input isPassword />
        <Input isPassword />
        <Input isPassword />
        <Input isPassword />
        <Input isPassword />
        <Input isPassword />
        <Input isPassword />
        <Input isPassword />
        <Input isPassword />
        <Input isPassword />
        <Input isPassword />
      </PageWrapper>
    </KeyboardAvoidingWrapper>
  );
}
