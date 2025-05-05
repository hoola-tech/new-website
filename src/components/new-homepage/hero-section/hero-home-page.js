import React from "react";

import Typed from "typed.js";

import HeroComponent from "./hero-section";
import {
    Bold,
    OrangeText,
} from "./hero.styled";

const HeroHomePage = () => {
    const el = React.useRef(null);
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Investment Research', 'Equity Analysts', 'Equity Associates', 'Portfolio Managers' ],
        typeSpeed: 200,
        backSpeed: 50,
        loop: true,
        fadeOut: true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  
    return (
        <HeroComponent
            buttonTopLink="https://studio.hoola.ai"
            buttonBottomLink="https://calendar.app.google/Pq9ezfFniULLaViNA"
            title={
                <>
                    Purpose-Built AI for{" "}
                    <OrangeText><span ref={el} /></OrangeText> Teams
                </>
            }
            subTitle={
                <>
                    {" "}
                    <Bold>Hoola</Bold> is an {" "}
                    <Bold>AI-powered research workspace</Bold> designed to save institutional investors <Bold>hours of time</Bold> preparing <Bold>investment research</Bold>.
                </>
            }
            codeFieldText="Hoola AI"
            buttonTopLabel="TRY IT NOW FOR FREE"
            buttomBottomLabel="Schedule a demo with our team"
        />
    );
};
export default HeroHomePage;
