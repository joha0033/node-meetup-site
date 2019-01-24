import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const About = () => (
  <StaticQuery
    query={graphql`
    query {
        meetupGroup {
          name
          link
          description
          city
          members
          organizer {
              name
              bio
          }
        }
      }
    `}
    render={data => {
        let  description = data.meetupGroup.description.replace(/(<([^>]+)>)/g, " ").replace(/&nbsp;/g, ' ')
        description = description.split('Note that by attending any of our events ')
        
        return (<div>
            <p>
                {description[0]}
            </p>
            </div>)
    }
}
  />
)
export default About
