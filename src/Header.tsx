import React from 'react';

import { Line } from '@bdxtown/canaille';

export const Header = () => {

    return (
        <>
            <header className="my-5">
                <img alt="bdx.town logo" aria-hidden="true" className="ml-auto w-[50px] h-[50px]" src="logo.svg" />
            </header>
            <Line />        
        </>
    )
}