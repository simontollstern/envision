import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useCopyExample } from '../hooks/copyExample';
import BaseTemplate from './BaseTemplate';

export default function Template({
   data, // this prop will be injected by the GraphQL query below.
}) {
   const { markdownRemark, site, allMarkdownRemark } = data;
   const { frontmatter, html } = markdownRemark;
   const icons = frontmatter.extra.icons;
   const icons2 = frontmatter.extra.icons2;
   const content = useRef(null);
   useCopyExample(content);

   return (
      <BaseTemplate
         title={frontmatter.title}
         topMenuItems={site.siteMetadata.topMenuItems}
         menuItems={allMarkdownRemark.edges}
         menuCategories={site.siteMetadata.menuCategories}
      >
         <>
            <div className="icons-demo">
               <ul className="env-list env-list--horizontal--fixed env-list--horizontal--fixed--6">
                  {icons2.map((icon) => (
                     <li key={icon} className="env-list__item" title={icon}>
                        <svg className="env-icon env-icon--2">
                           <use
                              xlinkHref={`/sitevision/envision-icons.svg#${icon}`}
                           ></use>
                        </svg>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="icons-demo">
               <ul className="env-list env-list--horizontal--fixed env-list--horizontal--fixed--6">
                  {icons.map((icon) => (
                     <li key={icon} className="env-list__item" title={icon}>
                        <svg className="env-icon">
                           <use
                              xlinkHref={`/sitevision/envision-icons.svg#${icon}`}
                           ></use>
                        </svg>
                     </li>
                  ))}
               </ul>
            </div>
            <div ref={content} dangerouslySetInnerHTML={{ __html: html }} />
         </>
      </BaseTemplate>
   );
}

export const pageQuery = graphql`
   query($slug: String!) {
      site {
         siteMetadata {
            topMenuItems {
               label
               to
            }
            menuCategories {
               title
               slug
            }
         }
      }
      markdownRemark(fields: { slug: { eq: $slug } }) {
         html
         frontmatter {
            title
            extra {
               icons
               icons2
            }
         }
      }
      allMarkdownRemark {
         edges {
            node {
               id
               frontmatter {
                  title
               }
               fields {
                  slug
               }
            }
         }
      }
   }
`;

Template.propTypes = {
   data: PropTypes.object,
};
