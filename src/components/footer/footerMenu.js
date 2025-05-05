import React from "react";

import { css } from "emotion";
import Link from "gatsby-link";
import styled from "react-emotion";

import ContentContainer from "../ui/content-container";
import mq from "../utils/breakpoints";
import theme from "../utils/theme";

const MenuBlock = styled("div")({
    width: "auto",
    display: "flex",
    flexDirection: "column",
    lineHeight: "30px",
    a: {
        color: theme.color.white,
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
});

const SectionTitle = styled("span")({
    fontWeight: theme.fontWeight.bold,
    display: "inline-block",
    marginBottom: 15,
});

const footerMenu = css(
    {
        maxWidth: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        color: theme.color.white,
        paddingBottom: 20,
    },
    mq({
        display: ["none", "none", "flex"],
    }),
);

const FooterMenu = () => (
    <ContentContainer className={footerMenu}>
        <MenuBlock>
            <SectionTitle>Products</SectionTitle>
            <Link to="#">Research Co-Pilot</Link>
            <Link to="#">Smart Document Search</Link>
            <Link to="#">Query Engine</Link>
            <Link to="#">Custom AI Agents</Link>
            <Link to="#">Collaboration & Workflow Tools</Link>
            <Link to="#">Reporting & Presentation Builder</Link>
            <Link to="#">Document Ingestion & Parsing</Link>
        </MenuBlock>
        <MenuBlock>
            <SectionTitle>Solutions</SectionTitle>
            <Link to="#">Investment Research Automation</Link>
            <Link to="#">Due Diligence Acceleration</Link>
            <Link to="#">Portfolio Monitoring</Link>
            <Link to="#">Thematic & Market Analysis</Link>
            <Link to="#">LP & Client Reporting</Link>
            <Link to="#">Knowledge Management</Link>
            <Link to="#">Team Collaboration & Audit</Link>
        </MenuBlock>
        {/* <MenuBlock>
            <SectionTitle>Resources</SectionTitle>
            <Link rel="prerender" to="#">
                Build Serverless Websites
            </Link>
            <Link rel="prerender" to="#">
                Build Serverless Apps
            </Link>
            <Link rel="prerender" to="#">
                Build Serverless APIs
            </Link>
            <Link rel="prerender" to="#">
                Build Microservices
            </Link>
            <Link rel="prerender" to="">
                Headless CMS Explained
            </Link>
            <Link rel="prerender" to="#">
                Knowledge Base
            </Link>
        </MenuBlock> */}
        <MenuBlock>
            <SectionTitle>Company</SectionTitle>
            <Link rel="prerender" to="#">
                About Hoola
            </Link>
            <Link rel="prerender" to="#">
                Careers
            </Link>
            <a href="mailto:contact@hoola.ai">Contact Us</a>
            <Link rel="prerender" to="#">
                Press
            </Link>
            <Link rel="prerender" to="/terms">
                Terms of Service
            </Link>
            <Link rel="prerender" to="/privacy">
                Privacy Policy
            </Link>
        </MenuBlock>
    </ContentContainer>
);

export default FooterMenu;
