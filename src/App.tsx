import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Rotas } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ABApolloClient from './Components/ABApolloClient';

const queryClient = new QueryClient();

function App() {
  return (
    <ABApolloClient>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </QueryClientProvider>
    </ABApolloClient>
  )
}

export default App
