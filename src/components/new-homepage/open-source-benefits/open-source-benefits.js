import React, {
    useEffect,
    useState,
} from "react";

import Prism from "../../utils/prism/index";
import {
    CodeSection,
    CodeSectionDescription,
    CodeSectionExample,
    CodeSectionTitle,
    Container,
    Frame,
    FrameDescription,
    FrameTitle,
    GridFramesContainer,
    P,
} from "./open-source-benefits.styled";

const pagePublishEvent = `// Add a \`ContextPlugin\` plugin to hook into the Page Builder events.
new ContextPlugin<PbContext>(async (context) => {
  // After a page was published, send a Slack message.
  context.pageBuilder.onAfterPagePublish.subscribe(
    async ({ publishedPage }) => {
      // Execute a custom function
      await sendMessageToSlack({
        id: publishedPage.id,
        title: publishedPage.title
      });
    }
  );
});`;

const newGraphQlResolver = `// Add a \`GraphQLSchemaPlugin\` plugin to extend the GraphQL schema.
new GraphQLSchemaPlugin({
  typeDefs: /* GraphQL */ \`
    extend type Query {
      myField: String!
    }
  \`,
  resolvers: {
    Query: {
      myField(root, args, context) {
        return "My field value!";
      }
    }
  }
});
`;

const changeAdminLogo = `import React from "react";
import { Admin, AddLogo } from "@webiny/app-serverless-cms";
​
// Import your logo image.
import logoPng from "./logo.png";
​
export const App = () => {
  return (
    <Admin>
      <AddLogo logo={<img src={logoPng} />} />
    </Admin>
  );
};​`;

const userAuthenticator = `// Add a \`ContextPlugin\` plugin to add a custom authenticator.
new ContextPlugin<SecurityContext>((context) => {
  context.security.addAuthenticator(async (token) => {
    // Verify the token.
    const tokenData = await verifyToken(token);
​
    // Return an Identity object.
    if (tokenData) {
      return {
        id: tokenData.sub,
        type: "custom-identity",
        displayName: tokenData.name
      };
    }
​
    return undefined;
  });
});`;

const FrameContainer = ({ image, title, description, link }) => {
    return (
        <Frame>
            <img src={image} alt="" />
            <FrameTitle
                style={{
                    fontWeight: "bold",
                    fontSize: "22px",
                    lineHeight: "32px",
                    color: "#FFFFFF",
                }}
            >
                {title}
            </FrameTitle>
            <FrameDescription>{description}</FrameDescription>
            {/* <FrameLink>
                {link ? (
                    <a target="_blank" rel="noreferrer" href={link}>
                        Explore more <img src={arrow} alt="" />
                    </a>
                ) : (
                    "(coming soon)"
                )}
            </FrameLink> */}
        </Frame>
    );
};

const Code = ({ code, language }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        Prism.highlightAll();
        setShow(true);
    }, []);

    return (
        <CodeSectionExample show={show} className={`Code line-numbers`}>
            <pre>
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </CodeSectionExample>
    );
};

const OpenSourceBenefits = () => {
    return (
        <Container>
            <CodeSection>
                <CodeSectionDescription>
                    <CodeSectionTitle>
                        Put the <span>power of Hoola AI </span> to work across your investment
                        process
                    </CodeSectionTitle>
                    <P>
                        <span>Hoola </span> is your AI-powered research co-pilot designed
                        specifically for the rigor and complexity of enterprise investment
                        workflows. Built with the skepticism{" "}
                        <span>
                            {" "}
                            of financial professionals in mind, Hoola does not replace your
                            expertise — it supercharges it.
                        </span>{" "}
                        By understanding your{" "}
                        <span> proprietary documents, financial models, and market data,</span>{" "}
                        Hoola helps your team move faster, work smarter, and uncover critical
                        insights that drive better decisions.
                    </P>
                </CodeSectionDescription>
            </CodeSection>
            <GridFramesContainer>
                <FrameContainer
                    title="Investment Research Automation"
                    description="Speed through 10-Ks, investor decks, and third-party research. Hoola extracts key metrics, sentiment shifts, forward guidance, and more — helping your analysts focus on interpretation, not information gathering."
                    link="#"
                />
                <FrameContainer
                    title="Due Diligence Acceleration"
                    description="Drop internal memos, diligence documents, contracts, and pitch decks into Hoola and instantly surface key summaries, compare targets, identify risks, and ask follow-up questions. Reduce weeks of manual review to minutes."
                    link="#"
                />
                <FrameContainer
                    title="Portfolio Company Monitoring"
                    description="Get real-time alerts and ongoing monitoring across portfolio companies. Automatically track press releases, news, regulatory filings, and performance metrics — all consolidated into a single dashboard."
                    link="#"
                />
                <FrameContainer
                    title="Market & Thematic Analysis"
                    description="Discover macro trends, cross-sector insights, and emerging opportunities by analyzing internal and external datasets together. Use Hoola to collaboratively build thematic investment theses across teams and offices."
                    link="#"
                />
                <FrameContainer
                    title="Client & LP Reporting"
                    description="Instantly generate customized updates for clients or LPs. Whether it’s a quarterly letter, deal briefing, or investment thesis, Hoola helps you structure and tailor content using natural language input and structured templates."
                />
                <FrameContainer
                    title="Knowledge Management"
                    description="Eliminate the pain of disconnected research. Hoola centralizes institutional memory — past memos, models, and analyses — into a structured, searchable knowledge base that gets smarter as your firm grows."
                />
                <FrameContainer
                    title="Team Collaboration & Workflow"
                    description="Assign research tasks, create shared workspaces, co-author memos, and track decision-making with full visibility. Hoola brings transparency and accountability to every step of the research lifecycle."
                />
                <FrameContainer
                    title="AI-Powered Document Search"
                    description="Go beyond keyword search. Ask questions and Hoola will semantically search across your documents — contracts, reports, filings, or emails — to find the most relevant passages, even if the words don’t exactly match."
                />
            </GridFramesContainer>
        </Container>
    );
};

export default OpenSourceBenefits;
