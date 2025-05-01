import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";

import heroBg from "./assets/hero-bg.svg";
import webinyBg from "./assets/webiny-hallmark.svg";

const HeroSection = styled("section")(
    {
        backgroundColor: theme.color.backgroundGray,
        position: "relative",
        zIndex: 0,
        backgroundImage: "url(" + heroBg + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
    },
    mq({
        backgroundSize: ["cover", "auto", "100%"],
        padding: ["0px 0px 110px", "0"],
        "@media (min-width: 1460px)": {
            backgroundPosition: "bottom",
            paddingTop: 0,
        },
    }),
);

const heroContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        position: "relative",
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%", 525],
        padding: ["75px 0px 0px", "85px 0px 0px"],
        "@media (min-width: 2000px)": {
            paddingBottom: 80,
        },
    }),
);

const HeroSectionWrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
    },
    mq({
        width: ["100%", 1100],
        alignItems: ["center"],
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 768,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.white,
        textAlign: "center",
        lineHeight: "48px",
        marginBottom: 20,
        marginTop: 40,
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const SubTitle = styled("h3")(
    {
        fontSize: theme.fontSize["2xl"],
        fontWeight: theme.fontWeight.regular,
        lineHeight: "34px",
        marginTop: 0,
        marginBottom: 26,
        color: theme.color.white,
        textAlign: "center",
    },
    mq({
        maxWidth: [337, 590],
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const WebinyHallMarkImage = styled("img")(
    {
        position: "absolute",
        zIndex: 1,
        top: 0,
    },
    mq({
        width: ["auto", "100%"],
        height: ["100%", 756],
        left: ["-45%", 0],
    }),
);

const HeroComponent = props => {
    return (
        <HeroSection {...props}>
            <ContentContainer className={heroContainerClass}>
                <WebinyHallMarkImage src={webinyBg} alt={""} />
                <HeroSectionWrapper>
                    <Title>Single platform for all your serverless use-cases</Title>
                    <SubTitle>
                        All Hoola AI features work together, so you can focus on the parts that matter
                        to your business the most.
                    </SubTitle>
                </HeroSectionWrapper>
            </ContentContainer>
        </HeroSection>
    );
};

export default HeroComponent;
