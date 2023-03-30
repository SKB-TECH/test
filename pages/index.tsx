import Discovery from '@/components/Dicovery'
import Magic from '@/components/Magic'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>updv</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <main>
          <Discovery />
          <Magic />
          <Discovery />
      </main>
    </>
  )
}
