import React from 'react'
import PropTypes from 'prop-types'
// Assets
import Arrow from 'src/assets/icons/Arrow.svg'
// Components
import MenuDesktop from 'src/components/MenuDesktop'
import SocialLinks from 'src/components/SocialLinks'
// Views
import Landing from './Landing'

import styles from 'src/views/styles.module.scss'

const Home = ({ location }) => {
  return (
    <div className={styles.view_root}>
      <div className={styles.view_menu}>
        <MenuDesktop
          location={location}
        />
      </div>
      <section className={styles.view_content}>
        <Landing/>
      </section>
      <div className={styles.view_social_links}>
        <SocialLinks/>
        <div className={styles.view_explore_more}>
          <div>
            <small>EXPLORE</small>
          </div>
          <img src={Arrow} alt='Explore more' />
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  location: PropTypes.object
}

export default Home
