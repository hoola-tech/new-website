import theme from "../../utils/theme";

export const TASKS = [
    {
        id: 0,
        tag: { accent: theme.color.lightGreen, text: "released" },
        title: "DynamoDB support",
        body: "Add DynamoDB as one of the supported databases.",
        action: {
            label: "learn more",
            link: "https://github.com/webiny/webiny-js/projects/8",
        },
    },
    {
        id: 1,
        tag: { accent: theme.color.lightGreen, text: "released" },
        title: "Page builder i18n integration",
        body: "Add multi-language support to Hoola AI",
        action: {
            label: "learn more",
            link: "https://github.com/webiny/webiny-js/issues/765",
        },
    },
    {
        id: 2,
        tag: { accent: theme.color.darkWine, text: "help needed" },
        title: "Multi-cloud support",
        body: "Add support for GCP and Azure.",
        action: {
            label: "learn more",
            link: "https://github.com/webiny/webiny-js/issues/1150",
        },
    },
    {
        id: 3,
        tag: { accent: theme.color.secondaryDark, text: "approved" },
        title: "Plugin repository",
        body: "Public searchable repository of Hoola AI plugins.",
        action: {
            label: "learn more",
            link: "https://github.com/webiny/webiny-js/issues/1151",
        },
    },
    {
        id: 4,
        tag: { accent: theme.color.yellow, text: "in beta" },
        title: "Support 3rd party identity providers (Okta, Auth0)",
        body: "Manage access to Hoola AI using 3rd party identity providers",
        action: {
            label: "learn more",
            link: "https://github.com/webiny/webiny-js/issues/1152",
        },
    },
    {
        id: 5,
        tag: { accent: theme.color.secondaryDark, text: "approved" },
        title: "Amazon Aurora Serverless",
        body: "Run Hoola AI using an SQL database on Serverless Aurora",
        action: {
            label: "learn more",
            link: "https://github.com/webiny/webiny-js/issues/1153",
        },
    },
];
