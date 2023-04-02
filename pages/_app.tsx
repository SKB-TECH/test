import '@/styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from 'next/app'
import Layout from '@/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    
      <Component {...pageProps} />
  )
}
