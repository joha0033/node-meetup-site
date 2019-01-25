import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Events from '../components/events'
import About from '../components/about'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>

    <h1>What we are About</h1>
      <About/>
    <p>
    Note that by attending any of our events you are agreeing to our <a href='https://github.com/BrooksPatton/node-meetup/blob/master/codeofconduct.md'>code of conduct </a>.
    </p>
    <hr/>
    <h1>
      Upcoming Events
    </h1>
    <Events/>
    <hr/>
    <h2>
      Contact
    </h2>
    <Contact/>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
