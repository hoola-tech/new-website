import React from "react";

import BaseLayout from "../layouts/base";
import Hero from "../components/events/hero";
import Events from "../components/events/events";
import Register from "../components/events/register";
import RegisterToAttend from "../components/events/register-to-attend";
import QuickStart from "../components/ui/quick-start/quick-start";

class IndexPage extends React.Component {
    scheduleTalkRef = React.createRef();

    goToScheduleTalkSection = () => {
        if (this.scheduleTalkRef && this.scheduleTalkRef.current) {
            const { offsetTop } = this.scheduleTalkRef.current;
            window.scrollTo({
                top: offsetTop,
                left: 0,
                behavior: "smooth",
            });
        }
    };

    render() {
        return (
            <BaseLayout title="Events" description="Hoola AI Online Meetups">
                <Hero />
                <Events />
                <Register handleTalkClick={this.goToScheduleTalkSection} />
                <QuickStart />
                <RegisterToAttend refFromParent={this.scheduleTalkRef} />
            </BaseLayout>
        );
    }
}

export default IndexPage;
