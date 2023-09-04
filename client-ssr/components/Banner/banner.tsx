"use client"
import React, { useEffect, useState } from "react";
import styles from "./banner.module.scss"

const Banner: React.FC = () => {
    const [btnChange, setBtnChange] = useState<number>(1);
    const [count, setCount] = useState<number>(0);

    const clickHandle = (type: string) => {
        switch (type) {
            case "laser":
                setBtnChange(1);
                break;
            case "khi":
                setBtnChange(2);
                break;
            case "chemical":
                setBtnChange(3);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (btnChange > 2) {
                setBtnChange(1);
                setCount(count + 1);
            } else {
                setBtnChange(btnChange + 1);
                setCount(count + 1);
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [btnChange, count]);

    return (
        <div className="p-8">
            <div className={`mx-auto ${styles.banner}`}>
                <video
                    autoPlay
                    muted
                    loop
                    className={styles.video}
                    src="https://res.cloudinary.com/dwpjjpgrz/video/upload/v1676654109/Panel%20intro%20video/banh-rang-56376_cwwcnf.mp4"
                />
                {btnChange === 1 && (
                    <div className={styles.bannerTrans}>
                        <img
                            className={styles.imageLaser}
                            src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676049422/Product%20img/image-removebg-preview_rjjnbc.png"
                            alt="Laser"
                        />
                        <div className={`animate__animated animate__backInLeft ${styles.bannerDescription}`}>
                            <p className={styles.bannerTitle}>Laser</p>
                            <p className={styles.bannerContent}>Super laser, bạn của mọi nhà</p>
                        </div>
                        <button id={styles.btnOne} type="button">
                            Laser
                        </button>
                    </div>
                )}
                {btnChange === 2 && (
                    <div className={styles.bannerTrans}>
                        <img
                            className={styles.imageKhi}
                            src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676086379/Product%20img/Kh%C3%AD_vzoz4f.png"
                            alt="khi"
                        />
                        <div className={`animate__animated animate__backInDown ${styles.bannerDescriptionKhi}`}>
                            <p className={styles.bannerTitle}>Khí</p>
                            <p className={styles.bannerContent}>Super khí, bạn của mọi nhà</p>
                        </div>
                        <button id={styles.btnTwo} type="button">
                            Khí
                        </button>
                    </div>
                )}
                {btnChange === 3 && (
                    <div className={styles.bannerTrans}>
                        <img
                            className={styles.imageChemical}
                            src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676022018/Product%20img/hoachat-removebg-preview_v2mbdk.png"
                            alt="Chemical"
                        />
                        <div className={`animate__animated animate__backInLeft ${styles.bannerDescription}`}>
                            <p className={styles.bannerTitle}>Hóa chất</p>
                            <p className={styles.bannerContent}>Super hóa chất, bạn của mọi nhà</p>
                        </div>
                        <button id={styles.btnThree} type="button">
                            Hóa chất
                        </button>
                    </div>
                )}
                <div className={styles.bannerButton}>
                    <button
                        type="button"
                        className={styles.btn}
                        onClick={() => clickHandle("laser")}
                    >
                        Laser
                    </button>
                    <button
                        type="button"
                        className={styles.btn}
                        onClick={() => clickHandle("khi")}
                    >
                        Khí
                    </button>
                    <button
                        type="button"
                        className={styles.btn}
                        onClick={() => clickHandle("chemical")}
                    >
                        Hóa chất
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;