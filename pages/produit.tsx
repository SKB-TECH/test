import LayoutOthers from '@/Layout/LayoutOthers'
import BannierB from '@/components/BannierB'
import Contanct from '@/components/Contanct'
import Form from '@/components/Form'
import ProduitI from '@/components/ProduitI'
import ProduitII from '@/components/ProduitII'
import ShoppingI from '@/components/ShoppingI'
import ShoppingII from '@/components/ShoppingII'
import ShoppingIII from '@/components/ShoppingIII'
import ShoppingIv from '@/components/ShoppingIv'
import Head  from 'next/head';
import React from 'react'

export default function produit() {
  return (
    <LayoutOthers>
        <Head>
            <title>product</title>
        </Head>
        <section className="flex flex-col min-w-full min-h-screen">
            <BannierB />
            <ProduitI />
            <ProduitII />
            {/* <Contanct />
            <Form/> */}
        </section>
    </LayoutOthers>
  )
}
