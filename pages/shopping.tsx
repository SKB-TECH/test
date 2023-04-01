import LayoutOthers from '@/Layout/LayoutOthers'
import React from 'react'
import Head from 'next/head'
import Bannier from '@/components/Bannier'

export default function shopping() {
  return (
    <LayoutOthers>
        <Head>
            <title>shopping</title>
        </Head>
        <section className="flex flex-col min-w-full min-h-screen">
            <Bannier />
        </section>
    </LayoutOthers>
  )
}
