import { MantineProvider } from '@mantine/core';
import { CardManagement } from './components/CardManagement';
import { Layout } from './components/layout/Layout';
import { useThemeStore } from './store/themeStore';
import { theme } from './theme/mantineTheme';
import '@mantine/core/styles.css';

export default function App() {
  const { colorScheme } = useThemeStore();

  return (
    <MantineProvider theme={theme} defaultColorScheme={colorScheme}>
      <Layout>
        <div className={`min-h-screen ${colorScheme === 'dark' ? 'bg-[#0A0A0A]' : 'bg-gray-50'}`}>
          <CardManagement />
        </div>
      </Layout>
    </MantineProvider>
  );
}