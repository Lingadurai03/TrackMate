import { useTheme } from '@shared/providers';
import { Button, PageWrapper, Wrapper } from '@shared/Ui';
import { ThemedText } from '@shared/Ui/ThemedText';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <PageWrapper
      contentStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      className="p-4"
    >
      <Wrapper>
        <ThemedText>🚀 Theme tokens working! (no `dark:` gg)</ThemedText>

        <Button variant="outline" onPress={toggleTheme}>
          `Switch to ${theme} mode`
        </Button>
      </Wrapper>
    </PageWrapper>
  );
}
