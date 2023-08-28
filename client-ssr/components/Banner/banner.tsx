"use client"
import React, { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
        <div className="bg-blue-500">
            <video
                autoPlay
                muted
                loop
                className="video"
                src="https://res.cloudinary.com/dwpjjpgrz/video/upload/v1676654109/Panel%20intro%20video/banh-rang-56376_cwwcnf.mp4"
            />
            {btnChange === 1 && (
                <div className="bannerTrans">
                    <img
                        className="imageLaser"
                        src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676049422/Product%20img/image-removebg-preview_rjjnbc.png"
                        alt="Laser"
                    />

                    <div className="bannerDescription">
                        <AnimationOnScroll
                            initiallyVisible={true}
                            animateIn="animate__backInLeft"
                            duration={0.4}
                        >
                            <h1>Laser </h1>
                            <h2>Super laser, bạn của mọi nhà</h2>
                        </AnimationOnScroll>
                    </div>
                    <button id="btnOne" type="button">
                        Laser
                    </button>
                </div>
            )}
            {btnChange === 2 && (
                <div className="bannerTrans">
                    <img
                        className="imageKhi"
                        src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676086379/Product%20img/Kh%C3%AD_vzoz4f.png"
                        alt="khi"
                    />
                    <div className="bannerDescriptionKhi">
                        <AnimationOnScroll
                            initiallyVisible={true}
                            animateIn="animate__backInRight"
                            duration={0.4}
                        >
                            <h1>Khí</h1>
                            <h2>Super khí, bạn của mọi nhà</h2>
                        </AnimationOnScroll>
                    </div>
                    <button id="btnTwo" type="button">
                        Khí
                    </button>
                </div>
            )}
            {btnChange === 3 && (
                <div className="bannerTrans">
                    <img
                        className="imageChemical"
                        src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676022018/Product%20img/hoachat-removebg-preview_v2mbdk.png"
                        alt="Chemical"
                    />
                    <div className="bannerDescription">
                        <AnimationOnScroll
                            initiallyVisible={true}
                            animateIn="animate__backInLeft"
                            duration={0.4}
                        >
                            <h1>Hóa chất</h1>
                            <h2>Super hóa chất, bạn của mọi nhà</h2>
                        </AnimationOnScroll>
                    </div>
                    <button id="btnThree" type="button">
                        Hóa chất
                    </button>
                </div>
            )}
            <div className="bannerButton">
                <button
                    type="button"
                    className="btn"
                    onClick={() => clickHandle("laser")}
                >
                    Laser
                </button>
                <button
                    type="button"
                    className="btn"
                    onClick={() => clickHandle("khi")}
                >
                    Khí
                </button>
                <button
                    type="button"
                    className="btn"
                    onClick={() => clickHandle("chemical")}
                >
                    Hóa chất
                </button>
            </div>
        </div>
    );
};

export default Banner;
