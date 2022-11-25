import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from 'react-hot-toast';
import UserContext from './Context/UserContext';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContext>
        <App />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </UserContext>
    </QueryClientProvider>
  </React.StrictMode>
);
