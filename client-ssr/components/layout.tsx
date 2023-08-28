import React, { PropsWithChildren } from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};
export default Layout;