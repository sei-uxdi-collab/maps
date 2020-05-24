import React, { Fragment, useState } from 'react'
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
import './Header.scss'
import Info from "../Info/Info";
import TopRated from "../TopRated/TopRated";
import MyFavorites from "../MyFavorites/MyFavorites";
import MyReviews from "../MyReviews/MyReviews";
import Settings from "../Settings/Settings";
import { avatar } from '../../helpers/avatarsArray'

const Header = ({ user, userLocation, allData, setApp }) => {
  const [expanded, setExpanded] = useState({
    favorites: false,
    reviews: false,
    topRated: false,
    info: false,
    settings: false,
  })

  const toggleExpand = section => {
    const newState = !expanded[section]
    setExpanded({
      favorites: false,
      reviews: false,
      topRated: false,
      info: false,
      settings: false,
      [section]: newState
    })

  }

  const userBanner = (
    <Fragment>
      <div className="d-flex mb-2" style={{ width: "100%"}}>
        <div >
          <a href="#avatar">
            { user && user.avatar ? <img src={avatar(user.avatar)} className="prof-pic" alt="profile pic"/> : <img src={avatar(0)} className="prof-pic" alt="profile pic" /> }
          </a>
        </div>
        <div className="ml-4">
          <Row>
            <div className="welcome">Welcome back, {user && (user.username || user.email)}</div>
          </Row>
        </div>
      </div>
    </Fragment>
  )

  const authenticatedOptions = (
    <Fragment>
    <Row>
      <Link to='/' className="p-0">
        <img src="close-x-white.png" className="close-x-white" alt="close"/>
      </Link>
      <div>
        { userBanner }
      </div>
    </Row>
      <Row>
        <div>
          <img src="your-favorites-heart-icon.png" className="icon" alt="Your Favorites"/>
        </div>
        <MyFavorites
          user={user}
          userLocation={userLocation}
          isExpanded={expanded.favorites}
          toggleExpand={() => toggleExpand('favorites')}
          allData={allData}
          setApp={setApp}
        />
      </Row>
      <Row>
        <div>
          <img src="my-reviews-icon.png" className="icon" alt="My Reviews"/>
        </div>
        <MyReviews
          user={user}
          isExpanded={expanded.reviews}
          toggleExpand={() => toggleExpand('reviews')}
          allData={allData}
          setApp={setApp}
        />
      </Row>
      <Row>
        <div>
          <img src="top-rated-star-icon.png" className="icon" alt="Top Rated"/>
        </div>
        <TopRated
          user={user}
          userLocation={userLocation}
          isExpanded={expanded.topRated}
          toggleExpand={() => toggleExpand('topRated')}
          allData={allData}
          setApp={setApp}
        />
      </Row>
      <Row>
        <div>
          <img src="settings-icon.svg" className="icon" alt="Settings"/>
        </div>
        <Settings isExpanded={expanded.settings} toggleExpand={() => toggleExpand('settings')}/>
      </Row>
      <div>
        <a className="btn sign-out" href="#sign-out" role="button">Sign Out</a>
      </div>
    </Fragment>
  )

  const unauthenticatedOptions = (
    <Fragment>
      <Row>
        <Link to='/' className="p-0">
          <img src="close-x-white.png" className="close-x-white" alt="close"/>
        </Link>
        <div>
          <a className="sign-in" href="#sign-in">Log In</a>
          <a className="sign-up" href="#sign-up">Sign Up</a>
        </div>
      </Row>
      <Row>
        <div>
          <img src="top-rated-star-icon.png" className="icon" alt="Top Rated"/>
        </div>
        <TopRated
          user={user}
          userLocation={userLocation}
          isExpanded={expanded.topRated}
          toggleExpand={() => toggleExpand('topRated')}
          allData={allData}
          setApp={setApp}
        />
      </Row>
      <Row>
        <div>
          <img src="info-icon.png" className="icon" alt="info"/>
        </div>
        <div className="list-item">
          <Info
            title="Info"
            content="This is our app info: It's great! That's all you need to know."
            isExpanded={expanded.info}
            toggleExpand={() => toggleExpand('info')}
          />
        </div>
      </Row>
    </Fragment>
  )

  return (
    <div className="header" fixed="top">
      <div id="">
        <div>
          { user ? authenticatedOptions : unauthenticatedOptions }
        </div>
      </div>
    </div>
  )
}
export default Header
