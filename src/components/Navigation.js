import React from 'react';
import styles from '../styles/Navigation.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Navigation = ({lightNav}) => {
    const [open, setOpen] = React.useState(false)

    const mobileNav = () => {
        setOpen(!open)
    }

    return (
        <>
            <div className={classNames(styles.overlay, open && styles.open, 'lg:hidden')} onClick={mobileNav}></div>
            <div className={classNames(styles.mobile, open && styles.open, 'lg:hidden')}>
                <div className={styles.links}>
                    <Link href={'/projects'} onClick={mobileNav}>Projects</Link>
                    <Link href={'/about'} onClick={mobileNav}>About</Link>
                    <Link href="/contact" onClick={mobileNav}>
                        <button>Get a quote</button>
                    </Link>
                </div>
            </div>
            <nav className={classNames(styles.nav, {[styles.light] : lightNav})}>
                <div className={styles.navcontainer}>
                    <div className={styles.logo}>
                        <Link href={'/'}>
                            <svg width="161.136px" height="17.232px" viewBox="0 0 161.136 17.232" version="1.1">
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Extra-Large" transform="translate(-310.240000, -25.984000)" fill="#FFFFFF" fillRule="nonzero" style={{fill: (lightNav ? '#000': '#fff')}}>
                                        <g id="WEBFOUNDRY" transform="translate(310.240000, 25.984000)">
                                            <polygon id="Path" points="12.312 17.016 18.552 17.016 21.264 0.216 17.952 0.216 15.432 16.416 13.752 0.216 7.512 0.216 5.832 16.416 3.312 0.216 0 0.216 2.712 17.016 8.952 17.016 10.632 0.816"></polygon>
                                            <polygon id="Path" points="23.424 17.016 34.704 17.016 34.704 14.016 26.664 14.016 26.664 9.816 33.96 9.816 33.96 6.888 26.664 6.888 26.664 3.216 34.704 3.216 34.704 0.216 23.424 0.216"></polygon>
                                            <path d="M37.584,17.016 L45.144,17.016 C48.432,17.016 50.328,15.288 50.328,12.024 C50.328,10.008 49.344,8.904 48.384,8.304 C49.152,7.632 49.704,6.48 49.704,5.04 C49.704,2.256 47.88,0.216 45.144,0.216 L37.584,0.216 L37.584,17.016 Z M40.776,13.968 L40.776,10.08 L44.736,10.08 C46.176,10.08 46.968,10.776 46.968,12.024 C46.968,13.32 46.176,13.968 44.736,13.968 L40.776,13.968 Z M40.776,7.08 L40.776,3.264 L44.328,3.264 C45.864,3.264 46.344,4.176 46.344,5.04 C46.344,6.24 45.864,7.08 44.328,7.08 L40.776,7.08 Z" id="Shape"></path>
                                            <polygon id="Path" points="53.088 17.016 56.328 17.016 56.328 10.224 63.624 10.224 63.624 7.296 56.328 7.296 56.328 3.216 64.368 3.216 64.368 0.216 53.088 0.216"></polygon>
                                            <path d="M73.392,17.232 C77.616,17.232 80.496,14.64 80.496,10.056 L80.496,7.176 C80.496,2.592 77.616,0 73.392,0 C69.168,0 66.288,2.592 66.288,7.176 L66.288,10.056 C66.288,14.64 69.168,17.232 73.392,17.232 Z M69.528,10.056 L69.528,7.176 C69.528,4.44 70.992,3.12 73.392,3.12 C75.792,3.12 77.256,4.44 77.256,7.176 L77.256,10.056 C77.256,12.792 75.792,14.232 73.392,14.232 C70.992,14.232 69.528,12.792 69.528,10.056 Z" id="Shape"></path>
                                            <path d="M89.76,17.232 C93.768,17.232 96.432,14.832 96.432,10.968 L96.432,0.216 L93.192,0.216 L93.192,10.92 C93.192,12.696 92.448,14.232 89.76,14.232 C87.12,14.232 86.376,12.696 86.376,10.92 L86.376,0.216 L83.136,0.216 L83.136,10.968 C83.136,14.832 85.824,17.232 89.76,17.232 Z" id="Path"></path>
                                            <polygon id="Path" points="100.032 17.016 103.152 17.016 103.152 0.816 107.328 17.016 113.664 17.016 113.664 0.216 110.544 0.216 110.544 16.536 106.224 0.216 100.032 0.216"></polygon>
                                            <path d="M123.312,13.968 L120.744,13.968 L120.744,3.264 L123.312,3.264 C125.568,3.264 127.416,4.512 127.416,7.656 L127.416,9.576 C127.416,12.72 125.568,13.968 123.312,13.968 Z M117.504,17.016 L123.312,17.016 C127.776,17.016 130.656,14.16 130.656,9.576 L130.656,7.656 C130.656,3.072 127.776,0.216 123.312,0.216 L117.504,0.216 L117.504,17.016 Z" id="Shape"></path>
                                            <path d="M133.536,17.016 L136.728,17.016 L136.728,13.536 L141.288,17.016 L146.64,17.016 L137.328,10.152 L140.664,10.152 C144.096,10.152 145.752,8.088 145.752,5.16 C145.752,2.304 143.784,0.216 140.664,0.216 L133.536,0.216 L133.536,17.016 Z M136.728,7.152 L136.728,3.216 L140.064,3.216 C141.624,3.216 142.392,3.768 142.392,5.184 C142.392,6.648 141.624,7.152 140.064,7.152 L136.728,7.152 Z" id="Shape"></path>
                                            <polygon id="Path" points="152.208 17.016 155.448 17.016 155.448 9.336 156.912 9.336 161.136 0.216 157.656 0.216 153.864 8.736 150.048 0.216 146.52 0.216 150.768 9.336 152.208 9.336"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Link>
                    </div>
                    <div className={'lg:hidden'}>
                        <svg onClick={mobileNav} className={classNames(styles.hamRotate, styles.ham8, styles.ham, open && styles.active)} viewBox="0 0 100 100" width="50">
                            <path
                                className={classNames(styles.top, styles.line)}
                                d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"/>
                            <path
                                className={classNames(styles.middle, styles.line)}
                                d="m 30,50 h 40"/>
                            <path
                                className={classNames(styles.bottom, styles.line)}
                                d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"/>
                        </svg>
                    </div>
                    <div className={styles.links}>
                        <Link href={'/projects'}>Projects</Link>
                        <Link href={'/about'}>About</Link>
                        <Link href="/contact">
                                <button>Get a quote</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navigation.propTypes = {
    lightNav: PropTypes.bool,
};
