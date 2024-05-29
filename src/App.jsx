import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Applayout from './ui/Applayout';
import Home from './pages/Home';
import PageNotFound from './ui/PageNotFound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Account from './ui/Account';
import SignUp from './ui/SignUp';
import Protected from './pages/Protected';
import Login from './ui/Login';
import { Toaster } from 'react-hot-toast';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <Protected>
                  <Applayout />
                </Protected>
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={12}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              duration: 5000,
              style: {
                maxWidth: '500px',
                fontSize: '16px',
                background: 'white',
                color: 'var( --color-grey-700)',
                padding: '16px 24px',
              },
              // Default options for specific types
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
            }}
          />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
