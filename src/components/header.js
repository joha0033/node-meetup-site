import React from 'react'
import { Link } from 'gatsby'
import NodeLogo from './node-logo'

const Header = ({ siteTitle }) => (
<div>
  <div
    style={{
      textAlign: 'center',
      background: '#336600',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
      <p style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#99CC00',
            textDecoration: 'none',
          }}
        >
          Denver's Node.js meetup is hosted at Code Talent every third Thursday of every month.
        </Link>
      </p>
    </div>
  </div>


  <div
    style={{
      background: 'green',
      marginBottom: '1.45rem',
      paddingBottom: '.1rem',
    }}
  >
    <div
      style={{
        textAlign: 'center',
        margin: '0 auto',
        maxWidth: 960,
        paddingTop: '1rem',
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
        Welcome to the Community <br/>
        <div 
          style={{
            maxWidth: 350,
            display:'block',
            margin:'auto',
            paddingLeft: '1vw',
            marginTop: '-3vw',
            marginBottom: '-3vw'
          }}
        >
          <NodeLogo />
        </div>
        <h3>
        Denver - Ft.Collins - Boulder
        </h3>
        </Link>
      </h2>
    </div>
  </div>
</div>

  
)

export default Header
