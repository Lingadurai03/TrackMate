import '../../global.css';

import { StoreProvider, ThemeProvider } from '@shared/providers';
import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </StoreProvider>
  );
}
