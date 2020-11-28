import React, { useRef } from "react";
import { Row } from 'react-bootstrap';

import "./Settings.scss";

function Settings(props) {
  const { isExpanded, toggleExpand } = props
  const content = useRef(null);
  const maxHeight = isExpanded ? `${content.current.scrollHeight}px` : "0px"

  return (
    <div className="settings-section">
      <div className={`settings settings-title ${isExpanded ? 'active' : ''}`} onClick={toggleExpand}>
        Settings
      </div>
      <div
        ref={content}
        style={{ maxHeight }}
        className="settings-content"
      >
        <div className="settings-text">
          <Row>
            <a href="#change-password" className="settings-options"><u>Change Password</u></a>
          </Row>
          <Row>
            <a href="#avatar" className="settings-options"><u>Update Avatar</u></a>
          </Row>
          <Row>
            <div className="email-us settings-options"><a href = "mailto: info@workfromroam.co">Questions? Comments? Email us at <u>info@workfromroam.co</u></a></div>
          </Row>
          <Row>
            <div className="settings-options version-info">WorkFromRoam v0.1.2 alpha</div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Settings;
