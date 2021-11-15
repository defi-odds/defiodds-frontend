// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import RtlLayout from './components/RtlLayout';
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/LoadingScreen';
import ThemePrimaryColor from './components/ThemePrimaryColor';
import AppProvider from './components/AppProvider';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <AppProvider>
      <ThemeConfig>
        <ThemePrimaryColor>
          <RtlLayout>
            <GlobalStyles />
            <ProgressBarStyle />
            <ScrollToTop />
            <Router />
          </RtlLayout>
        </ThemePrimaryColor>
      </ThemeConfig>
    </AppProvider>
  );
}
