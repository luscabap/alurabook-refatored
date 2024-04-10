import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Rotas } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ABApolloClient from './Components/ABApolloClient';
import CarrinhoProvider from './context/Carrinho';

const queryClient = new QueryClient();

function App() {
  return (
    <ABApolloClient>
      <CarrinhoProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Rotas />
          </BrowserRouter>
        </QueryClientProvider>
      </CarrinhoProvider>
    </ABApolloClient>
  )
}

export default App
