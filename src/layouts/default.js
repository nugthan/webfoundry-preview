import React, {useEffect} from 'react';
import { Navigation } from '@/components/Navigation';
import {Footer} from "@/components/Footer";

export default function Layout({ children, lightNav }) {
    return (
        <>
            <Navigation lightNav={lightNav}/>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
