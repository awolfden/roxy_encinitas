import React, { useEffect } from 'react';
import { AuthKitProvider, useAuth as useWorkOSAuth } from '@workos-inc/authkit-react';

// Re-export the WorkOS useAuth hook for our components
export const useAuth = useWorkOSAuth;

export const AuthProvider = ({ children }) => {
  const clientId = process.env.REACT_APP_WORKOS_CLIENT_ID;
  
  useEffect(() => {
    // Check if we have an authorization code in the URL (from WorkOS redirect)
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    
    if (code) {
      console.log('=== WORKOS CALLBACK DEBUG ===');
      console.log('Authorization code found in URL:', code);
      console.log('State:', state);
      console.log('Current URL:', window.location.href);
      console.log('Processing callback...');
    }
  }, []);
  
  if (!clientId) {
    console.error('WorkOS Client ID not found in environment variables');
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h3>Configuration Error</h3>
        <p>WorkOS Client ID is not configured. Please check your environment variables.</p>
      </div>
    );
  }

  // Handle authentication callback
  const handleRedirectCallback = (state) => {
    console.log('=== WORKOS REDIRECT CALLBACK ===');
    console.log('Authentication successful!', state);
    console.log('Cleaning up URL parameters...');
    
    // Clean up URL parameters after successful auth
    const url = new URL(window.location);
    url.searchParams.delete('code');
    url.searchParams.delete('state');
    window.history.replaceState({}, document.title, url.pathname);
    
    console.log('Redirect callback completed');
  };

  // Get the current redirect URI based on the current environment
  const getRedirectUri = () => {
    const currentOrigin = window.location.origin;
    const redirectPath = '/admin';
    return currentOrigin + redirectPath;
  };

  const redirectUri = getRedirectUri();
  console.log('Using redirect URI:', redirectUri);

  return (
    <AuthKitProvider 
      clientId={clientId}
      redirectUri={redirectUri} // Dynamically set based on current origin
      devMode={process.env.NODE_ENV === 'development'} // Only enable dev mode in development
      onRedirectCallback={handleRedirectCallback}
    >
      {children}
    </AuthKitProvider>
  );
}; 