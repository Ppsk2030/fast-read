import '@fontsource-variable/inter'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ReaderProvider } from './context/ReaderContext.tsx'
import * as Sentry from '@sentry/capacitor'
import { browserTracingIntegration, ErrorBoundary as SentryErrorBoundary } from '@sentry/react'

if (import.meta.env.PROD && import.meta.env.VITE_SENTRY_DSN) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [browserTracingIntegration()],
    tracesSampleRate: 0.2,
    environment: 'production',
  })
}

createRoot(document.getElementById('root')!).render(
  <SentryErrorBoundary fallback={<p style={{textAlign:'center', padding:'2rem'}}>Something went wrong. Please restart the app.</p>}>
    <StrictMode>
      <ReaderProvider>
        <App />
      </ReaderProvider>
    </StrictMode>
  </SentryErrorBoundary>,
)
