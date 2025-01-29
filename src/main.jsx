import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter, createBrowserRouter,RouterProvider } from 'react-router'
const PUBLISHABLE_KEY=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
// console.log(PUBLISHABLE_KEY)
if(!PUBLISHABLE_KEY){
  throw new Error('Missing VITE_CLERK_PUBLISHABLE_KEY')
}

// const appRouter = createBrowserRouter([
// {
//   path:"/",
//   element:<App/>,

// }
// ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <BrowserRouter>
    <App />

    </BrowserRouter>

    </ClerkProvider>
  </StrictMode>,
)
