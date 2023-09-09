import React from "react";
import styles from "./loading.module.scss";

export default function Loading() {
    return (
        <section className={styles.section}>
            <div className={styles.loader}>
                <div className={`${styles.upper} ${styles.ball}`}></div>
                <div className={`${styles.right} ${styles.ball}`}></div>
                <div className={`${styles.lower} ${styles.ball}`}></div>
                <div className={`${styles.left} ${styles.ball}`}></div>
            </div>
        </section>
    );
};