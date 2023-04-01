import React, { PropsWithChildren } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavbarOthers from '@/components/NavbarOthers';


function LayoutOthers({children}:PropsWithChildren) {
    return (
        <>
            <NavbarOthers/>
            <main className='mt-52'>
                {
                    children
                }
            </main>
            <Footer />
        </>
    );
}

export default LayoutOthers;