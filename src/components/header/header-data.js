import advancedPublishingIcon from "./assets/advancedPublishingIcon.svg";
import BlogIcon from "./assets/blogIcon.svg";
import ControlPanelIcon from "./assets/controlPanelIcon.svg";
import FileManagerIcon from "./assets/fileManagerIcon.svg";
import FormBuilderIcon from "./assets/formBuilderIcon.svg";
import GitHubIcon from "./assets/gitHubIcon.svg";
// product icons
import HeadlessIcon from "./assets/headlessIcon.svg";
import MeetupIcon from "./assets/meetupIcon.svg";
import PageBuilderIcon from "./assets/pageBuilderIcon.svg";
// resources
import SlackIcon from "./assets/slackIcon.svg";

export const MAIN_MENU = {
    id: 0,
    label: "Why Hoola AI",
    // link: "/why-hoola",
    link: "#",
};

export const PRODUCTS_MENU = {
    id: 1,
    label: "Products & Solutions",
    link: null,
    className: "one-row",
    primarySection: {
        title: "APPLICATIONS",
        menuItems: [
            {
                id: 0,
                label: "Document Intelligence",
                text:
                    "Securely import, index, and search your firm's proprietary research, models, and memos.",
                // link: "/enterprise-serverless-cms/headless-cms",
                link: "#",
                image: HeadlessIcon,
            },
            {
                id: 2,
                label: "Smart Analysis Workspace",
                text:
                    "Collaborate with your team on investment theses and market views in a shared workspace.",
                // link: "/docs/overview/applications/apw",
                link: "#",
                image: advancedPublishingIcon,
                isComingSoon: false,
            },
            {
                id: 1,
                label: "Multi-Source Data Connector",
                text:
                    "Seamlessly connect internal data (documents, spreadsheets, memos) and external sources (filings, news, market data).",
                // link: "/enterprise-serverless-cms/page-builder",
                link: "#",
                image: PageBuilderIcon,
            },
            {
                id: 5,
                label: "Audit & Compliance",
                text:
                    "Maintain transparency with full query logs, citation tracking, and data lineage.",
                // link: "/docs/overview/applications/control-panel",
                link: "#",
                image: ControlPanelIcon,
                isComingSoon: true,
            },
            {
                id: 4,
                label: "Research Automation",
                text:
                    "Rapidly analyze earnings reports, investor presentations, and industry research.",
                // link: "/enterprise-serverless-cms/file-manager",
                link: "#",
                image: FileManagerIcon,
            },
            {
                id: 3,
                label: "Market & Thematic Analysis",
                text:
                    "Explore emerging trends and conduct cross-sector analysis using internal and public data.",
                // link: "/enterprise-serverless-cms/form-builder",
                link: "#",
                image: FormBuilderIcon,
                isComingSoon: true,
            },
        ],
    },
    secondarySection: {},
};

export const PRICING_MENU = {
    id: 2,
    label: "Pricing",
    link: "/pricing",
};

export const RESOURCES_MENU = {
    id: 4,
    label: "Resources",
    className: "two-rows",
    link: null,
    mainSection: {
        title: "RESOURCES",
        menuItems: [
            {
                id: 0,
                label: "Privacy Policy",
                link: "https://www.hoola.ai/privacy-policy",
                image: SlackIcon,
            },
            {
                id: 1,
                label: "Terms of Service",
                link: "https://hoole.ai/terms-of-service",
                image: GitHubIcon,
            },
            {
                id: 2,
                label: "About Us",
                link: "/about-us",
                image: BlogIcon,
            },
            {
                id: 3,
                label: "Contact Us",
                link: "mailto:mark@hoola.ai?subject=Hoola%20AI%20Contact",
                image: MeetupIcon,
            },
        ],
    },
    secondarySection: {
        title: "FROM THE BLOG",
    },
};

export const DROPDOWN_MENUS = [MAIN_MENU, PRODUCTS_MENU, PRICING_MENU, RESOURCES_MENU];
