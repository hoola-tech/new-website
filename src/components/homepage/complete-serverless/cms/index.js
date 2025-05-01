import React, { useState, useEffect } from "react";
import styled from "react-emotion";
import { css } from "emotion";
import mq from "../../../utils/breakpoints";
import Button from "../../../ui/button";
import theme from "../../../utils/theme";
import SelectedNav from "./selected-nav";

import Logo from "../assets/cms/logo.svg";
import vectorIcon from "../assets/cms/highlight.svg";
import graphQlImg from "../../../../assets/products/webiny-headless-cms.jpg";
import pageBuilderImg from "../assets/cms/webiny-pb-fb.jpg";
import securityImg from "../assets/cms/security.jpg";
import multiTenancyImg from "../assets/cms/multi-tenancy.svg";
import serverlessImg from "../assets/cms/serverless.svg";

const FrameworksSection = styled("div")(
    {
        width: "100%",
        display: "flex",
        marginBottom: 30,
    },
    mq({
        flexDirection: ["column-reverse", "row"],
        padding: ["0 0 50px", "0 0 100px"],
    }),
);

const Navigation = styled("div")(
    {
        "& .navigation-header": {
            display: "flex",
            alignItems: "center",
            padding: "0 0 33px",
            borderBottom: "1px solid #E6E6E6",

            "& img": {
                marginRight: 30,
                width: 60,
            },

            "& h5": {
                fontSize: 30,
                color: theme.color.black,
                lineHeight: "44px",
            },

            "& span": {
                backgroundImage: "url(" + vectorIcon + ")",
                backgroundPositionX: "right",
                backgroundPositionY: "bottom",
                backgroundRepeat: "no-repeat",
            },
        },

        "& .navigation-content": {
            padding: "20px 0",

            "& .description": {
                fontSize: 24,
                lineHeight: "32px",
            },

            "& .navigation-list": {
                marginBottom: 50,
            },

            "& .navigation-item": {
                "& .navigation-item-content": {
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",

                    "&.active": {
                        "& .nav-circle": {
                            background: theme.color.primaryDark,

                            "& span": {
                                color: theme.color.white,
                            },
                        },

                        "& p": {
                            color: theme.color.primaryDark,
                            fontWeight: "bold",
                        },
                    },

                    ".nav-circle": {
                        background: theme.color.white,
                        boxShadow: "0px 0px 4px rgba(100, 100, 100, 0.298039)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 41,
                        height: 41,
                        borderRadius: 30,
                        marginRight: 19,

                        "& span": {
                            fontWeight: "bold",
                            fontSize: 20,
                            lineHeight: "25px",
                            color: theme.color.black,
                        },
                    },

                    "& p": {
                        fontSize: 22,
                        lineHeight: "28px",
                        color: theme.color.black,
                        margin: 0,
                    },
                },
            },

            "& .seperater": {
                height: 30,
                borderLeft: "1px dashed #808080",
                margin: "3px 0 3px 20px",
            },
        },
    },
    mq({
        width: ["100%", "35%"],
        maxWidth: ["100%", "35%"],
        margin: [0, "0 0 0 2%"],

        "& .navigation-header": {
            flexDirection: ["column", "row"],

            "& img": {
                marginRight: [0, 30],
                marginBottom: [10, 0],
            },

            "& h5": {
                textAlign: ["center", "left"],
                lineHeight: "125%",
            },
        },

        "& .navigation-content": {
            maxWidth: [400, "100%"],
            margin: ["0 auto", 0],
        },

        "& .navigation-list": {
            display: ["none", "block"],
        },
    }),
);

const SlideSection = styled("div")(
    mq({
        width: ["100%", "65%"],
        maxWidth: ["100%", "65%"],
        margin: [0, "0 2% 0 0"],
    }),
);

const getStartedButtonClass = css(
    {
        backgroundColor: `${theme.color.yellow} !important`,
        textTransform: "uppercase",
        padding: "10px 12px !important",
        height: "40px !important",
        fontWeight: "bold !important",
    },
    mq({
        width: ["100% !important", "150px !important"],
        margin: ["0 auto", 0],
        marginBottom: ["16px !important", "0px !important"],
    }),
);

const navigationList = [
    { id: 1, text: "GraphQL-based Headless CMS", selected: true },
    { id: 2, text: "Page Builder & Form Builder", selected: false },
    { id: 3, text: "Advanced roles & permissions", selected: false },
    { id: 4, text: "Multi-tenancy & multi-language", selected: false },
    { id: 5, text: "Powered by serverless", selected: false },
];

const navigationContent = [
    {
        id: 1,
        imgClass: "headless-img",
        mainLogo: graphQlImg,
        title: "GraphQL-based Headless CMS",
        description:
            "Full-featured headless CMS with a GraphQL API that runs on top of the serverless infrastructure.",
        relatedList: [
            "GraphQL API",
            "Publishing workflow",
            "Content versioning",
            "Customizable & expandable",
            "Powerful access control rules",
            "Multi-language & multi-tenancy",
        ],
    },
    {
        id: 2,
        imgClass: "pbfb-img",
        mainLogo: pageBuilderImg,
        title: "Page Builder & Form Builder",
        description:
            "Sometimes a headless solution is not enough, it only gets you part of the way. With the Page and Form builder you can build forms and landing pages. No need to code anything by hand.",
        relatedList: [
            "Build forms",
            "No need to redeploy or rebuild on changes",
            "Build landing pages",
            "Blazing fast performance",
            //"Build layouts for dynamic content",
            "Prerendered and SEO optimized",
            "Multi-language and multi-tenant",
        ],
    },
    {
        id: 3,
        imgClass: "acl-img",
        mainLogo: securityImg,
        title: "Advanced roles & permissions",
        description:
            "Using a powerful solution such as Hoola AI, requires an equal security layer and we have built one just for that purpose. On the backend Hoola AI uses AWS Cognito as an IdP, and for enterprise customers we provide additional implementations.",
        relatedList: [
            "Permission control matching business requirements",
            "Easily integrate 3rd parties like OKTA, Auth0 and others",
            "Ready-made security library to integrate into your own custom apps",
            "Fully customizable security workflow",
        ],
    },
    {
        id: 4,
        imgClass: "svg",
        mainLogo: multiTenancyImg,
        title: "Multi-tenancy & multi-language",
        description:
            "Run multiple projects or websites on a single install. Each of the tenants can manage their content on multiple locales. Multi-language is available as part of the open-source product, the multi-tenancy is available on the enterprise offering.",
        relatedList: [
            "Complete data separation between tenants",
            "Maintain only a single code-base",
            "Ideal for SaaS solutions",
            "Single user can access single or multiple tenants",
        ],
    },
    {
        id: 5,
        imgClass: "img",
        mainLogo: serverlessImg,
        title: "Powered by serverless",
        description:
            "Hoola AI, being a self-hosted solution, means you have the full control over your security parameter and your data is your own, no need to share it with a 3rd party SaaS provider. It also means there is no vendor lock-in and you're free to customize the solution to fits your exact need. Being serverless means you don't worry about how to scale the solution, it scales automatically and you don't worry about things like CPU, memory, load balancers, networking and so on. Serverless also brings up to 80% cost reduction when compared to VMs.",
        relatedList: [
            "Serverless",
            "Cheaper to operate",
            "Open-source",
            "Fully customizable",
            "Self-hosted",
        ],
    },
];

const useWindowWidth = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
};

const CMSSection = () => {
    const width = useWindowWidth();
    const [navigateItems, setNavigateItems] = useState(navigationList);
    const [selectedNav, setSelectedNav] = useState(navigationContent[0]);
    const updateNavigate = id => {
        setSelectedNav(navigationContent.find(item => item.id === id));
        setNavigateItems(
            navigateItems.map(item => {
                if (item.id === id) {
                    return { ...item, selected: !item.selected };
                } else {
                    return { ...item, selected: false };
                }
            }),
        );
    };

    return (
        <FrameworksSection>
            <SlideSection>
                {width > 1024 ? (
                    <SelectedNav content={selectedNav} />
                ) : (
                    <React.Fragment>
                        {navigationContent.map(item => (
                            <SelectedNav content={item} key={item.id} />
                        ))}
                        <Button type="outlineDark" arrow={true} link="/serverless-cms">
                            Learn more about the cms
                        </Button>
                    </React.Fragment>
                )}
            </SlideSection>
            <Navigation>
                <div className="navigation-header">
                    <img src={Logo} alt="" />
                    <h5>
                        Hoola AI
                        <br />
                        Serverless <span>CMS</span>
                    </h5>
                </div>
                <div className="navigation-content">
                    <p className="description">
                        Everything you need to manage your content needs and operate a website on
                        top of the serverless infrastructure.
                    </p>
                    <div className="navigation-list">
                        {navigateItems &&
                            navigateItems.map(item => (
                                <div className="navigation-item" key={item.id}>
                                    <div
                                        className={`navigation-item-content ${
                                            item.selected ? "active" : ""
                                        }`}
                                        onClick={() => updateNavigate(item.id)}
                                    >
                                        <div className="nav-circle">
                                            <span>{item.id}</span>
                                        </div>
                                        <p>{item.text}</p>
                                    </div>
                                    {item.id < 5 ? <div className="seperater" /> : ""}
                                </div>
                            ))}
                    </div>
                    <Button type="outlineDark" arrow={true} link="/serverless-cms">
                        Learn more about the cms
                    </Button>
                </div>
            </Navigation>
        </FrameworksSection>
    );
};

export default CMSSection;
