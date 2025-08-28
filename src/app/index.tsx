import { useTheme } from '@shared/providers';
import { PageContainer } from '@shared/Ui';
import { Button, Text } from 'react-native';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <PageContainer className={'h-52 flex-1 items-center justify-center '}>
      <Text className="text-2xl font-bold text-text-primary">
        🚀 Theme tokens working! (no `dark:` needed)
      </Text>

      <Button title={`Switch to ${theme} mode`} onPress={toggleTheme} />
    </PageContainer>
  );
}
