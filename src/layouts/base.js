import "./index.css";
import "./reset.css";

import React from "react";

import Helmet from "react-helmet";

import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import CookieNotice from "../components/ui/cookie-notice";
import { ModalProvider } from "../components/ui/layout/video-modal";
import Head from "./components/head";

class BaseLayout extends React.Component {
    render() {
        return (
            <>
                <Head
                    title={this.props.title + " | Hoola AI"}
                    description={this.props.description}
                    image={this.props.image}
                />

                <Helmet>
                    <style>
                        {`
            .async-hide { opacity: 0 !important}
            `}
                    </style>
                </Helmet>
                <Helmet>
                    <script type="text/javascript">
                        {`
            (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
            h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
            (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
            })(window,document.documentElement,'async-hide','dataLayer',1000,
            {'GT':true});
          `}
                    </script>
                </Helmet>
                <ModalProvider>
                    <Header />
                    {this.props.children}
                    <Footer />
                    <CookieNotice />
                    {/* <Chat /> */}
                </ModalProvider>
            </>
        );
    }
}

export default BaseLayout;
