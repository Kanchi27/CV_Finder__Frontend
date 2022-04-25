import { QueryClientProvider, QueryClient } from 'react-query'
import HomePage from "./components/HomePage";
import { FC, useState } from "react";

const App: FC = () => {
  const [queryClient] = useState<QueryClient>(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
