import '../../global.css';

import { ThemeProvider } from '@shared/providers';
import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
