// src/pages/_app.tsx
import '../components/Table.css';
import '../components/ExportWorkflow.css';
import '../components/Header.css';
import '../components/Graph.css';
import './index.css';
import '@/styles/global.css'; // Other global styles

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
