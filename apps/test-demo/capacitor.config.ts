import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'test-demo',
  webDir: '../../dist/apps/test-demo',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
