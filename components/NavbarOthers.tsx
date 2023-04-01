import React from 'react';

function NavbarOthers() {
    return (
        <section className='hidden lg:flex flex-row  w-full h-10 bg-footer text-white z-50 shadow-lg fixed'>
            <div className='hidden lg:flex flex-row justify-around mt-1 font-beatrice'>
                <span className='text-sm text-left'>introducing magic mushroom disponible</span>
                <span className='text-sm text-left'>free ground shipping over $75, use code:my23</span>
                <span className='text-sm text-left'>100% satisfaction guarantee</span>
            </div>
        </section>
    );
}

export default NavbarOthers;