import styled from "react-emotion";

import mq from "../../utils/breakpoints";

export const SubTitle = styled("div")({
    display: "inline-block",
    paddingTop: "4px",
    paddingBottom: "4px",
    paddingLeft: "16px",
    paddingRight: "16px",
    borderRadius: "6px",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "18px",
    textTransform: "uppercase",
    color: "#374E94",
    backgroundColor: "rgba(250, 90, 40, 0.1)",
});

export const Title = styled("h1")(
    {
        fontWeight: 700,
        lineHeight: "44px",
        marginTop: "20px",
    },
    mq({
        fontSize: ["36px", "36px", "42px"],
    }),
);

export const Highlight = styled("span")({
    color: "#374E94",
});

export const Content = styled("p")(
    {
        fontWeight: 400,
        marginTop: "20px",
    },
    mq({
        fontSize: ["16px", "16px", "20px"],
        lineHeight: ["26px", "26px", "32px"],
    }),
);

export const Bold = styled("span")({
    fontWeight: 700,
});
export const TextContainer = styled("div")({
    maxWidth: "400px",
});

export const ArrowLinkWrapper = styled("a")({
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "23px",
    color: "#374E94",
    marginTop: "30px",
    textDecoration: "none",
    "&:hover": {
        textDecoration: "underline",
    },
});

export const ArrowImage = styled("img")({
    marginLeft: "10px",
});
