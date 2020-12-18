import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
import StarRatingComponent from "react-star-rating-component";
import "./TopRated.scss";
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { calculateDistanceMiles } from '../../helpers/calculateDistance.js'
import { getAddressLine1 } from '../../helpers/getAddressLine1.js'
import { getAddressLine2 } from '../../helpers/getAddressLine2.js'

function TopRated(props) {
  const { userLocation, isExpanded, toggleExpand, showWorkspace } = props
  const [workplaces, setWorkplaces] = useState([])

  const content = useRef(null);
  const maxHeight = isExpanded ? `${content.current.scrollHeight}px` : "0px"


  // console.log(props)

  useEffect(() => {
      axios({
        url: apiUrl + '/work_spaces/top_rated',
        method: 'GET'
      })
        // .then(response => console.log(response.data))
        .then(response => {
          setWorkplaces(response.data.work_spaces)
        })
        .catch((error) => console.log(error))
    }, [])

  // takes formatted phone number and removes everything that's not a number
  // this allows us to pass it into an href and make the number "callable"
  // const formatPhone = function(phone) {
  //   return "tel:" + phone.replace(/[ ()\\s-]+/g, "")
  // }

  // used for figuring out calculated distance
  const workplaceLocation = function(workplace) {
    return {
      lat: workplace.lat,
      lng: workplace.lng
    }
  }

  const topRatedJsx = workplaces.map(workplace => (
    <li
      key={workplace.id}
      href={`#workplace/${workplace.id}`}
    >
    <div className="top-rated-card">
      <div className="card-content">
        <Row>
          <div className="workplace-title"> {workplace.name}</div>
        </Row>
        <Row>
          <span className="plain-text address-ellipsis"> {getAddressLine1(workplace.addresscomponent)}</span>
        </Row>
        <Row>
          <span className="plain-text address-ellipsis"> {getAddressLine2(workplace.addresscomponent)}</span>
        </Row>
        <Row>
          <div className="top-rated-stars">
            <StarRatingComponent
             name='name'
             value={workplace.avgrating}
             editing={false}
             renderStarIcon={(nextValue, prevValue) =>
               (nextValue <= prevValue) ?
                 <img src="star-icon.svg" className="top-rated-star" alt="star"/> :
                 <img src="star-icon-empty-gray.svg" className="top-rated-star" alt="star"/>}
            />
          </div>
        </Row>
        <Row className="pb-2">
          <Col xs={11} className="m-0 p-0">
            <span className="plain-text">{userLocation && (calculateDistanceMiles( userLocation, workplaceLocation(workplace) ))} miles away</span>
          </Col>
          <Col xs={1} className="m-0 p-0" onClick={() => showWorkspace(workplace.id)} >
          <span><svg  className="top-rated-right-arrow" width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.40573 0.293723C8.4999 0.200617 8.61177 0.126747 8.73492 0.076345C8.85808 0.0259431 8.99011 0 9.12345 0C9.25679 0 9.38882 0.0259431 9.51198 0.076345C9.63514 0.126747 9.74701 0.200617 9.84118 0.293723L15.9236 6.29242C16.018 6.38529 16.0929 6.49561 16.144 6.61708C16.1951 6.73854 16.2214 6.86876 16.2214 7.00026C16.2214 7.13177 16.1951 7.26198 16.144 7.38345C16.0929 7.50491 16.018 7.61524 15.9236 7.70811L9.84118 13.7068C9.65082 13.8945 9.39265 14 9.12345 14C8.85426 14 8.59608 13.8945 8.40573 13.7068C8.21538 13.5191 8.10844 13.2644 8.10844 12.999C8.10844 12.7335 8.21538 12.4788 8.40573 12.2911L13.7724 7.00026L8.40573 1.70941C8.31133 1.61654 8.23643 1.50622 8.18532 1.38475C8.13422 1.26329 8.10791 1.13307 8.10791 1.00157C8.10791 0.870063 8.13422 0.739849 8.18532 0.618385C8.23643 0.496921 8.31133 0.386594 8.40573 0.293723Z"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M0 7.00076C0 6.7356 0.106804 6.4813 0.296916 6.29381C0.487028 6.10631 0.744874 6.00098 1.01373 6.00098H14.1923C14.4611 6.00098 14.719 6.10631 14.9091 6.29381C15.0992 6.4813 15.206 6.7356 15.206 7.00076C15.206 7.26592 15.0992 7.52022 14.9091 7.70771C14.719 7.89521 14.4611 8.00054 14.1923 8.00054H1.01373C0.744874 8.00054 0.487028 7.89521 0.296916 7.70771C0.106804 7.52022 0 7.26592 0 7.00076Z"/>
          </svg></span>
          </Col>
        </Row>
      </div>
    </div>
    </li>
  ))

  return (
    <div className="toprated-section">
      <div className={`toprated toprated-title ${isExpanded ? 'active' : ''}`} onClick={toggleExpand}>
        Top Rated
      </div>
      <div
        ref={content}
        style={{ maxHeight }}
        className="toprated-content"
      >
      <ul>
        {topRatedJsx}
      </ul>
      </div>
    </div>
  );
}

export default TopRated;
