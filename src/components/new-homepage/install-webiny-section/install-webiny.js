import React from "react";

import InstallWebinySection from "./install-webiny-section";
import { OrangeText } from "./install-webiny-section.styled";

const InstallWebiny = () => {
    return (
        <InstallWebinySection
            title={
                <>
                    <OrangeText>Get started with Hoola AI</OrangeText> in 4 minutes
                </>
            }
            buttonLinkLabel="TRY IT NOW FOR FREE"
            buttonLink="https://studio.hoola.ai"
            demoLink="https://calendar.app.google/Pq9ezfFniULLaViNA"
            demoLinkLabel="Or schedule a demo with our team"
        />
    );
};
export default InstallWebiny;
