import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Route/route.jsx'
// import AuthProvider from './Provider/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
   <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <RouterProvider router={router}>

</RouterProvider>
   </QueryClientProvider>
   </AuthProvider>
   </HelmetProvider>
  </StrictMode>,
)





































