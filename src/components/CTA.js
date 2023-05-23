import React from "react";
import Link from "next/link";
export default function CTA () {
    return (
                <div className={'rounded-2xl border border-border mt-12 lg:flex items-center text-center lg:text-left'}>
                    <p className={'md:text-large text-largem px-6 py-4 flex-grow'}>Ready to <span className={'font-semibold'}>transform your business?</span></p>
                    <Link href={'/contact'}>
                        <div className={'lg:rounded-xl rounded-b-xl bg-orange h-full px-6 py-4 lg:mr-2'}>
                                <p className={'font-semibold text-white'}>Contact me</p>
                        </div>
                    </Link>
                </div>
    )
}
