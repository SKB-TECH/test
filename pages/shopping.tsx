import LayoutOthers from '@/Layout/LayoutOthers'
import React from 'react'
import Head from 'next/head'
import Bannier from '@/components/Bannier'
import Contanct from '@/components/Contanct'
import Form from '@/components/Form'
import ShoppingI from '@/components/ShoppingI'
import ShoppingII from '@/components/ShoppingII'
import ShoppingIII from '@/components/ShoppingIII'
import ShoppingIv from '../components/ShoppingIv';

export default function shopping() {
  return (
    <LayoutOthers>
        <Head>
            <title>shopping</title>
        </Head>
        <section className="flex flex-col min-w-full min-h-screen">
            <Bannier />
            <ShoppingI />
            <ShoppingII />
            <ShoppingIII />
            <ShoppingIv />
            <Contanct />
            <Form/>
        </section>
    </LayoutOthers>
  )
}
