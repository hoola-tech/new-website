import React from "react";

import { graphql } from "gatsby";

import KnowledgeBase from "../components/knowledge-base/knowledgeBase";
import BaseLayout from "../layouts/base";

export default ({ data, location }) => {
    const knowledgeBasePosts = data.knowledgeBase.nodes;

    return (
        <BaseLayout title="Knowledge Base">
            <KnowledgeBase data={knowledgeBasePosts} location={location} />
        </BaseLayout>
    );
};

export const listBlogsQuery = graphql`
    query AllKnowledgeBaseMdxQuery {
        knowledgeBase: allMdx(
            limit: 1000
            sort: { fields: frontmatter___date, order: DESC }
            filter: { frontmatter: { slug: { regex: "/knowledge-base/" } } }
        ) {
            nodes {
                id
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    author
                    description
                    slug
                    title
                    tags
                    featureImage {
                        name
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 800) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;
