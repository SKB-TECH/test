import React, { PropsWithChildren } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


function Layout({children}:PropsWithChildren) {
    return (
        <>
            
            <Navbar />
            <main className='mt-52'>
                {
                    children
                }
            </main>
            <Footer />
        </>
    );
}

export default Layout;