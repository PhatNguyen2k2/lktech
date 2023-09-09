import React from "react";
import clientPromise from '../../lib/mongodb'
import ScrollToShow from "../scrollToShow";
import styles from "./partner.module.scss"

interface Partner {
    link: string;
    logo: string;
    name: string;
    origin: string;
    founding: number;
    field: string;
    application: string;
    illustration: string;
}
const Partners: React.FC = async () => {
    const client = await clientPromise
    const db = client.db('test')
    const data = await db.collection('partners').find({}).toArray()
    const partners: Partner[] = JSON.parse(JSON.stringify(data))
    return (
        <div className="mx-auto p-8">
            <div className={styles.PartnerIntro}>
                <p>
                    Với thiện chí hợp tác cùng phát triển, L&K TECH rất tin tưởng vào sự
                    thành công tốt đẹp và lâu dài trong quá trình hợp tác giữa công ty và
                    Quý đối tác.
                </p>
                <p>
                    Xin chân thành cảm ơn các Quý đối tác đã và đang hợp tác cùng công ty
                    chúng tôi trên đoạn đường phát triển.
                </p>
            </div>
            {partners.length > 0 &&
                partners.map((partner, index) => (
                    <ScrollToShow>
                        <div className={styles.illustration}>
                            <img className={styles.imgIllus} src={partner.illustration} alt={partner.name} />
                            <div className={styles.partner} key={index}>
                                <div className={styles.logo_name}>
                                    <h2 className={styles.namePartner}>{partner.name}</h2>
                                    <img className={styles.img} src={partner.logo} alt={partner.name} />
                                </div>
                                <div className={styles.partner_info}>
                                    Xuất xứ: {partner.origin}
                                    <br />
                                    Ngày thành lập: {partner.founding}
                                    <br />
                                    Lĩnh vực: {partner.field}
                                    <br />
                                    Ứng dụng:
                                    <ul className="list-disc ml-5">
                                        {partner.application.split("; ").map((app, index) => (
                                            <li key={index}>{app}</li>
                                        ))}
                                    </ul>
                                    <a
                                        className={`text-indigo-600 ${styles.learn_more}`}
                                        href={partner.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {partner.link}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollToShow>
                ))}
        </div>
    );
};

export default Partners;
