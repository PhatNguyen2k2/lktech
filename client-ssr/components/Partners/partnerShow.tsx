// pages/partner-show.tsx
import React from "react";
import clientPromise from '../../lib/mongodb'
import styles from "./partnerShow.module.scss"

interface Partner {
    link: string;
    logo: string;
    name: string;
}
const PartnerShow: React.FC = async () => {
    const client = await clientPromise
    const db = client.db('test')
    const data = await db.collection('partners').find({}).toArray()
    const partners: Partner[] = JSON.parse(JSON.stringify(data))
    return (
        <div className="mx-auto bg-gray-100">
            <div className="justify-items-center grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-10 sm:p-14 xs:p-5 gap-5">
                {partners && partners.map((lg, index) => (
                    <a href={lg.link} key={index} className={styles.Pnlogo} target="_blank" rel="noreferrer">
                        <img className={styles.imagelogo} src={lg.logo} alt={lg.name} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default PartnerShow;
