import React, { useState } from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import SelectedContent from "./selected-content";
import vectorIcon from "./assets/onesizebg.svg";
import headlessImg from "./assets/tab1.svg";
import pbImg from "./assets/tab2.svg";
import fbImg from "./assets/tab3.svg";
import fmImg from "./assets/tab4.svg";

const StackCodeSection = styled("section")(
    {
        backgroundColor: theme.color.white,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 0,
        backgroundPosition: "bottom",
    },
    mq({
        padding: ["60px 15px 10px", "120px 15px"],
    }),
);

const ContainerClass = css(
    {
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
    }),
);

const Title = styled("h1")({
    maxWidth: 654,
    fontSize: 48,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.black,
    textAlign: "center",
    lineHeight: "48px",
    margin: "0 auto 26px",
});

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + vectorIcon + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const Description = styled("p")(
    {
        fontSize: 24,
        lineHeight: "40px",
        color: theme.color.black,
        margin: "0 auto",
        textAlign: "center",

        "& span": {
            color: theme.color.primaryDark,
        },
    },
    mq({
        maxWidth: [360, 1135],
    }),
);

const Navigate = styled("div")(
    {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 75,
        borderBottom: "1px solid #E7E8F0",

        "& .navigation-item": {
            textAlign: "center",
            cursor: "pointer",
            padding: "10px 0",

            "&.active": {
                borderBottom: `2px solid ${theme.color.primaryDark}`,
                padding: "10px 0 8px",

                "& h5": {
                    color: theme.color.primaryDark,
                },
            },

            "& h5": {
                color: "#292929",
                fontWeight: theme.fontWeight.semiBold,
            },

            "& p": {
                color: "#7B8097",
                fontWeight: theme.fontWeight.regular,
                fontSize: 16,
                lineHeight: "20px",
                margin: 0,

                "&.my-2": {
                    margin: "2px 0",
                },
            },
        },
    },
    mq({
        "& .navigation-item": {
            margin: ["0 10px", "0 30px"],

            "& h5": {
                fontSize: [17, 24],
                lineHeight: ["21px", "30px"],
            },
        },
    }),
);

const navigationList = [
    { id: 1, title: "Headless CMS", img: headlessImg, selected: true },
    { id: 2, title: "Page Builder", img: pbImg, selected: false },
    { id: 3, title: "Form Builder", img: fbImg, selected: false },
    { id: 4, title: "File Manager", img: fmImg, selected: false },
];

const OneSize = () => {
    const [navigateItems, setNavigateItems] = useState(navigationList);
    const [selectedNav, setSelectedNav] = useState(navigationList[0]);
    const updateNavigate = id => {
        setSelectedNav(navigationList.find(item => item.id === id));
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
        <StackCodeSection>
            <ContentContainer className={ContainerClass}>
                <Title>
                    <TitleHighlight>One size doesn't fit all</TitleHighlight>
                </Title>
                <Description>
                    It's a very different set of requirements a technical team has to a marketing
                    team to a business development team. <span>Hoola AI Serverless CMS</span> comes
                    with several different apps you can use independently, or together as part of a
                    cohesive solution.
                </Description>
                <Navigate>
                    {navigateItems &&
                        navigateItems.map(item => (
                            <div
                                className={`navigation-item ${item.selected ? "active" : ""}`}
                                key={item.id}
                                onClick={() => updateNavigate(item.id)}
                            >
                                <img src={item.img} alt="" />
                                <h5>{item.title}</h5>
                            </div>
                        ))}
                </Navigate>
                <SelectedContent selectedNav={selectedNav} />
            </ContentContainer>
        </StackCodeSection>
    );
};

export default OneSize;
