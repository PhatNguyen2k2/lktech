import React from "react";
import styles from "./pageNotFound.module.scss";
import Link from "next/link";
export default function PageNotFound() {
    return (
        <section className={`mx-auto ${styles.page_404}`}>
            <div className="row">
                <div className="text-center">
                    <div className={styles.four_zero_four_bg}>
                        <h1 className="text-center">404</h1>
                    </div>

                    <div className={styles.contant_box_404}>
                        <h3>Look like you're lost</h3>

                        <p>the page you are looking for not avaible!</p>

                        <Link href="/" className={styles.link_404}>
                            Go to Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
