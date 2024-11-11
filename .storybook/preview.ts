import type { Preview } from '@storybook/react';
import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { firebaseConfig } from '../firebaseTestConfig.ts';
import './tailwind.css';

const app = initializeApp(firebaseConfig);

// @ts-expect-error - only in dev
if (import.meta.env.DEV) {
  const auth = getAuth(app);
  if (typeof window === 'undefined' || !window['_firebase_auth_emulator']) {
    try {
      connectAuthEmulator(auth, 'http://localhost:9099', {
        disableWarnings: true,
      });
    } catch (error) {
      console.log('auth emulator already connected', error);
    }
    if (typeof window !== 'undefined') {
      window['_firebase_auth_emulator'] = true;
    }
  }
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
