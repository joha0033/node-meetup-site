import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './event.css'
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Events = () => (
  <StaticQuery
    query={graphql`
    query {
        meetupGroup {
          childrenMeetupEvent {
            name
            created
            duration
            status
            time
            local_date
            local_time
            description
            yes_rsvp_count
            link
            venue {
                name
                address_1
                city
                state
            }
          }
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
        return data.meetupGroup.childrenMeetupEvent.map((event, index) => {
            let  description = event.description.replace(/(<([^>]+)>)/g, " ").replace(/: /g, " ");
            const toStandardTime = (militaryTime) => {
                militaryTime = militaryTime.split(':');
                return (militaryTime[0].charAt(0) === '1' && militaryTime[0].charAt(1) > 2) ? (militaryTime[0] - 12) + ':' + militaryTime[1] + ' P.M.' : militaryTime.join(':') + ' A.M.'
            }
            console.log(event);
            
            return (
                <section 
                key={index}
                className='shadow'
                >
                    <h3>{event.name}</h3>
                    <div>
                        <blockquote><time>Time: {toStandardTime(event.local_time)}</time><br/>
                        <time>Date: {event.local_date}</time></blockquote>
                    </div>
                    <hr />
                    <div>
                        <h4>Description: </h4>
                        <p>{description}</p>
                    </div> 
                    <div>
                        <h4>Location: </h4>
                        <p>{event.venue.name}
                        <br/>Address: {event.venue.address_1}, {event.venue.city}</p>
                    </div> 
                    <div>RSVPs: {event.yes_rsvp_count}</div> 
                    <a href={event.link}>Event Page</a>
                </section>
            )
        })
    }
}
  />
)
export default Events
