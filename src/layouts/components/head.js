import React from "react";

import { withPrefix } from "gatsby-link";
import Helmet from "react-helmet";

class Head extends React.Component {
    render() {
        const ogImage = this.props.image && this.props.image;
        let domainName =
            typeof window !== "undefined"
                ? window.location.origin + "/"
                : "https://www.hoola.ai/";

        return (
            <React.Fragment>
                <Helmet
                    title={this.props.title}
                    htmlAttributes={{ lang: "en" }}
                    meta={[
                        { name: "description", content: this.props.description },
                        {
                            name: "keywords",
                            content: "AI for finance, AI financial research, investment research software, buy-side AI tool, sell-side research automation, generative AI for finance, document intelligence for investment teams, LLM finance tool, AI copilot for analysts, enterprise AI for investment firms",
                        },
                        {
                            name: "viewport",
                            content:
                                "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5",
                        },
                        {
                            property: "og:type",
                            content: "website",
                        },
                        {
                            property: "og:title",
                            content: this.props.title,
                        },
                        {
                            property: "og:description",
                            content: this.props.description,
                        },
                        {
                            property: "og:image",
                            content: domainName + ogImage,
                        },
                        {
                            name: "image",
                            property: "og:image",
                            content: domainName + ogImage,
                        },
                        {
                            name: "twitter:image",
                            content: domainName + ogImage,
                        },
                        {
                            name: "twitter:card",
                            content: "summary_large_image",
                        },
                        {
                            name: "twitter:site",
                            content: "@hoola_ai",
                        },
                        {
                            name: "twitter:title",
                            content: this.props.title,
                        },
                        {
                            name: "twitter:description",
                            content: this.props.description,
                        },
                    ]}
                />
                <Helmet
                    link={[
                        {
                            rel: "shortcut icon",
                            href: withPrefix("./icon.png"),
                            type: "image/x-icon",
                        },
                    ]}
                />

                <Helmet>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/icon.png"
                    />
                    <link rel="manifest" href="/favicons/site.webmanifest" />
                    <link rel="mask-icon" href="/icon.png" color="#d76543" />
                    <link rel="shortcut icon" href="/icon.png" />
                    <meta name="msapplication-TileColor" content="#603cba" />
                    <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
                    <meta name="theme-color" content="#ffffff" />
                </Helmet>

                <Helmet>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-" />
                    <script>
                        {`
                  window.dataLayer = window.dataLayer || []; 
                  function gtag(){
                      dataLayer.push(arguments);
                  } 
                  gtag('js', new Date()); 
                  gtag('config', 'AW-'); 
              `}
                    </script>
                </Helmet>
            </React.Fragment>
        );
    }
}

export default Head;
