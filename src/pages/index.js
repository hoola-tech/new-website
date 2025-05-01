import React from "react";

import HeroHomePage from "../components/new-homepage/hero-section/hero-home-page";
import InstallWebiny from "../components/new-homepage/install-webiny-section/install-webiny";
import Investors from "../components/new-homepage/investors/investors";
import OpenSourceBenefits
    from "../components/new-homepage/open-source-benefits/open-source-benefits";
import ProductOverview from "../components/new-homepage/product-overview/product-overview";
import NoCodeSuite from "../components/new-homepage/text-with-image/no-code-suite";
import SelfHosted from "../components/new-homepage/text-with-image/self-hosted";
import Serverless from "../components/new-homepage/text-with-image/serverless";
import DeliveryExcellence from "../components/new-homepage/view-big-tiles/delivery-excellence";
import BaseLayout from "../layouts/base";

class IndexPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="AI-Powered Research for Modern Investment Teams"
                description="Unify your data, supercharge collaboration, and unlock insights faster with Hoola — the intelligent copilot built for enterprise financial research."
            >
                <HeroHomePage />
                <Investors />
                <ProductOverview />
                <SelfHosted />
                <Serverless />
                <NoCodeSuite />
                <DeliveryExcellence />
                <OpenSourceBenefits />
                <InstallWebiny />
            </BaseLayout>
        );
    }
}

export default IndexPage;
