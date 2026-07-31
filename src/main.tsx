import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Public from './Public/Public.tsx';
import Private from './Private/Private.tsx';
import { AuthProvider } from "react-oidc-context";


const cognitoAuthConfig = {
  authority: import.meta.env.VITE_COGNITO_AUTHORITY_DES,
  client_id: import.meta.env.VITE_COGNITO_CLIENT_ID_DES,
  redirect_uri: import.meta.env.VITE_COGNITO_REDIRECT_URI_DES,
  response_type: import.meta.env.VITE_COGNITO_RESPONSE_TIPE_DES,
  scope: "phone openid email",
};

// const cognitoAuthConfig = {
//   authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_eEybGfGaH",
//   client_id: "2tdemhe8gk9vhd09h6nvh48jt2",
//   redirect_uri: "https://roudev.com/private",
//   response_type: "code",
//   scope: "phone openid email",
// };

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
