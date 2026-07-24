import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Public from './Public/Public.tsx';
import Private from './Private/Private.tsx';
import { AuthProvider } from "react-oidc-context";


const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_eEybGfGaH",
  client_id: "2tdemhe8gk9vhd09h6nvh48jt2",
  redirect_uri: "http://localhost:5173/private",
  response_type: "code",
  scope: "phone openid email",
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Public />}/>
          <Route path='/private/*' element={<Private />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
