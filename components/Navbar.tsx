import React from 'react';

function Navbar() {
    return (
        <section className='flex flex-col  w-full h-20 bg-footer text-white z-50 shadow-lg fixed'>
            <div className='hidden lg:flex flex-row justify-around mt-1 font-beatrice'>
                <span className='text-sm text-left'>introducing magic mushroom disponible</span>
                <span className='text-sm text-left'>free ground shipping over $75, use code:my23</span>
                <span className='text-sm text-left'>100% satisfaction guarantee</span>
            </div>
            <div className='flex justify-around mt-5'>
                <span>
                    Logo
                </span>
                <nav className='hidden lg:inline-block'>
                    <ul className='text-white flex flex-row gap-5 font-proximanov font-semibold'>
                        <li>Shop</li>
                        <li>our brand</li>
                        <li>products</li>
                        <li>support</li>
                    </ul>
                </nav>
{/* 0990426590 */}
                <div className='flex -mr-4 gap-10'>
                    <span>UN</span>
                    <span>DEUX</span>
                </div>
            </div>
        </section>
    );
}

export default Navbar;