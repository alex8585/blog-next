import TopMenu from "../components/TopMenu"
import Footer from "../components/Footer"

import CssBaseline from "@material-ui/core/CssBaseline"
import Head from 'next/head';
import Divider from '@material-ui/core/Divider';
import React from "react"


type Props  = {
     children: JSX.Element,
};






const FrontendLayout: React.FC<Props> = ({ children }) =>  {
    return (
        <React.Fragment >
            <Head>
                {/* <link rel="favicon icon" href="favicon.ico" /> */}
            </Head>
            <TopMenu />
            <Divider />
                {children}
            <Footer />
        </React.Fragment>
    )

}
export default FrontendLayout
