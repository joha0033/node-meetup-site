import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Contact = () => (
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
        let  organizer = data.meetupGroup.organizer
        
        return (<div>
            <p>
                <a href="mailto:brooks@brookzerker.com">{organizer.name}</a>
            </p>
            </div>)
    }
}
  />
)
export default Contact
