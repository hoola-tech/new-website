import React from "react";

import { css } from "emotion";
import styled from "react-emotion";

import ContentContainer from "../ui/content-container";
import mq from "../utils/breakpoints";
import theme from "../utils/theme";
import EmailIcon from "./assets/contact-icon.svg";
import logo from "./assets/logo.png";
import TwitterIcon from "./assets/twitter-icon.svg";
import FooterMenu from "./footerMenu";
import Newsletter from "./newsletter";

const Wrapper = styled("div")(
    {
        backgroundColor: theme.color.footerBg,
        "--nl-text-color": "white",
        "--nl-text-align": "right",
    },
    mq({
        padding: ["16px 16px 20px 16px", "16px 25px 20px 25px", "50px 0 5px"],
    }),
);

const FlexDisplay = css(
    {
        maxWidth: "100%",
        justifyContent: "space-between",
        boxSizing: "border-box",
    },
    mq({
        display: ["block", "block", "flex"],
    }),
);

const Box = styled("div")(
    {
        boxSizing: "border-box",
    },
    mq({
        width: ["100%", "100%", "33%"],
    }),
);

const textRight = css(
    {},
    mq({
        textAlign: ["center", "center", "right"],
        marginTop: [20, 20, 0],
    }),
);

const Logo = styled("img")(
    {
        height: "32px",
        width: "auto"
    },
    mq({
        margin: ["0 auto 30px auto", "0 auto 30px auto", "0 0 25px 0"],
        display: ["block", "block", "inline"],
        maxHeight: ["62px", "62px", "50px"],
    }),
);

const IconList = styled("ul")(
    {
        listStyle: "none",
        display: "grid",
    },
    mq({
        gridTemplateColumns: ["repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(2, 1fr)"],
        width: ["190px", "190px", "85px"],
        margin: ["0 auto 0 auto", "0 auto 0 auto", "0 0 0 0"],
        columnGap: ["10px", "10px", "15px"],
    }),
);

const IconItem = styled("li")({
    width: "40px",
});

const Bottom = styled("div")(
    {
        width: "100%",
        clear: "both",
        lineHeight: "200%",
        marginTop: 25,
        marginBottom: 25,
    },
    mq({
        borderTop: ["none", "none", "1px solid #3B3E45"],
        paddingTop: [0, 0, 25],
    }),
);

const Paragraph = styled("span")(
    {
        fontSize: "14px",
        color: "hsl(0,0%,86%)",
    },
    mq({
        display: ["none", "none", "block"],
    }),
);

const Footer = () => (
    <Wrapper>
        <FooterMenu />

        <Bottom>
            <ContentContainer className={FlexDisplay}>
                <Box>
                    <Logo src={logo} alt="Hoola AI Logo" />
                    <IconList>
                        <IconItem>
                            <a
                                title="Twitter"
                                href="https://x.com/hoola_ai"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={TwitterIcon} alt="" />
                            </a>
                        </IconItem>
                        <IconItem>
                            <a
                                title="Email Us"
                                href="mailto:mark@hoola.ai"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={EmailIcon} alt="" />
                            </a>
                        </IconItem>
                    </IconList>
                    <Paragraph>Hoola Technology Ltd © {new Date().getFullYear()}</Paragraph>
                </Box>
                <Box className={textRight}>
                    <Newsletter />
                </Box>
            </ContentContainer>
        </Bottom>
    </Wrapper>
);

export default Footer;
