import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/common/Layout';
import './global.css';
import Router from './Router';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryclient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <QueryClientProvider client={queryclient}>
    <Layout>
      <div id="portal" />
      <Router />
    </Layout>
  </QueryClientProvider>,
);
