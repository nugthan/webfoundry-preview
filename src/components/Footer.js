import React from 'react';
import styles from '../styles/Footer.module.scss';
import classNames from 'classnames';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.grain}></div>
            <div className={styles.footercontainer}>
                <div className={styles.block}>
                    <p className={styles.title}>Connect with me</p>
                    <div className={styles.links}>
                        <a href={'https://instagram.com/nugthan'} target={'_blank'} rel="noreferrer">
                            <div className={styles.link}>
                                <p>Instagram</p>
                                <div className={styles.arrow}>
                            <span className={classNames(styles.one, styles.arrowicon)}>
                                <svg className="arrow-right" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.00195313"
                                          y1="8.85474"
                                          x2="15.0966"
                                          y2="8.85474"
                                          stroke="white"
                                          strokeWidth="1.64208">
                                    </line>
                                    <path
                                        d="M8.52832 2.69751L14.6861 8.8553L8.93884 14.6026"
                                        stroke="white"
                                        strokeWidth="1.64208">

                                </path>
                                </svg>
                            </span>
                                    <span className={classNames(styles.two, styles.arrowicon)}>
                                <svg className="arrow-right" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.00195313"
                                          y1="8.85474"
                                          x2="15.0966"
                                          y2="8.85474"
                                          stroke="white"
                                          strokeWidth="1.64208">
                                    </line>
                                    <path
                                        d="M8.52832 2.69751L14.6861 8.8553L8.93884 14.6026"
                                        stroke="white"
                                        strokeWidth="1.64208">

                                </path>
                            </svg>
                            </span>
                                </div>
                            </div>
                        </a>
                        <a href={'https://www.linkedin.com/in/nathan-watson-615b66182/'} target={'_blank'} rel="noreferrer">
                            <div className={styles.link}>
                                <p>LinkedIn</p>
                                <div className={styles.arrow}>
                            <span className={classNames(styles.one, styles.arrowicon)}>
                                <svg className="arrow-right" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.00195313"
                                          y1="8.85474"
                                          x2="15.0966"
                                          y2="8.85474"
                                          stroke="white"
                                          strokeWidth="1.64208">
                                    </line>
                                    <path
                                        d="M8.52832 2.69751L14.6861 8.8553L8.93884 14.6026"
                                        stroke="white"
                                        strokeWidth="1.64208">

                                </path>
                                </svg>
                            </span>
                                    <span className={classNames(styles.two, styles.arrowicon)}>
                                <svg className="arrow-right" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.00195313"
                                          y1="8.85474"
                                          x2="15.0966"
                                          y2="8.85474"
                                          stroke="white"
                                          strokeWidth="1.64208">
                                    </line>
                                    <path
                                        d="M8.52832 2.69751L14.6861 8.8553L8.93884 14.6026"
                                        stroke="white"
                                        strokeWidth="1.64208">

                                </path>
                            </svg>
                            </span>
                                </div>
                            </div>
                        </a>
                        <a href={'https://unsplash.com/@nugthan'} target={'_blank'} rel="noreferrer">
                            <div className={styles.link}>
                                <p>Unsplash</p>
                                <div className={styles.arrow}>
                            <span className={classNames(styles.one, styles.arrowicon)}>
                                <svg className="arrow-right" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.00195313"
                                          y1="8.85474"
                                          x2="15.0966"
                                          y2="8.85474"
                                          stroke="white"
                                          strokeWidth="1.64208">
                                    </line>
                                    <path
                                        d="M8.52832 2.69751L14.6861 8.8553L8.93884 14.6026"
                                        stroke="white"
                                        strokeWidth="1.64208">

                                </path>
                                </svg>
                            </span>
                                    <span className={classNames(styles.two, styles.arrowicon)}>
                                <svg className="arrow-right" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.00195313"
                                          y1="8.85474"
                                          x2="15.0966"
                                          y2="8.85474"
                                          stroke="white"
                                          strokeWidth="1.64208">
                                    </line>
                                    <path
                                        d="M8.52832 2.69751L14.6861 8.8553L8.93884 14.6026"
                                        stroke="white"
                                        strokeWidth="1.64208">

                                </path>
                            </svg>
                            </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
