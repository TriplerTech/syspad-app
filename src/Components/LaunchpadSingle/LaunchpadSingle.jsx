import React from "react";
import { Link, NavLink } from "react-router-dom";
import {Tab,Row,Col,Nav  } from 'react-bootstrap';
import admin4 from "../../assets/img/admin4.png";
import img4 from "../../assets/img/projects4.png";

import "./LaunchpadSingle.scss";
import Description from "./Description"; 
import TokenSale from "./TokenSale";
import Metrics from "./Metrics";
import VestingSchedule from "./VestingSchedule";
const LaunchpadSingle = () => {
  return (
    <div className="LaunchpadSingle-area pt-5 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="sigle-pagination">
              <li>
                <Link to="/">Projects</Link>
              </li>
              <li>
                <span className="active">APENZZ</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="single-left">
              <div className="single-admin">
                <img src={admin4} alt="images" />
                <div className="text">
                  <div className="h4 text-white">CryptoCitizen</div>
                  <span>Become the Metaverse highest ranking citizen</span>
                </div>
              </div>
              <div className="single-img">
                <img src={img4} alt="images" width="100%" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-report">
              <div className="single-report-item">
                <span className="sold-btn">Sold out</span>
                <div className="h3 text-white mt-3">$2,030,000</div>
                <div className="single-hr"></div>
                <ul className="single-report-list">
                  <li>
                    <span>Price per token</span>{" "}
                    <span className="h5">$0.5</span>
                  </li>
                  <li>
                    <span>ATH ROI</span>{" "}
                    <span className="h6 ath-rol">+324%</span>
                  </li>
                </ul>
                <div className="report-btn">
                  <Link to="/">Research Report</Link>
                  <p>Funded and Launched successfuly on 1 Jun 2022</p>
                </div>
              </div>
              <Link to="/" className="sale-btn">
                token sale
              </Link>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="single-tab-border"></div>
          <div className="col-lg-8">
            <div className="single-tab"> 
              <Tab.Container defaultActiveKey="first"> 
                  <Nav variant="pills" className="single-title">
                      <Nav.Item>
                          <Nav.Link eventKey="first">Description </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link eventKey="second">Token Sale</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link eventKey="third">Contract Metrics </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link eventKey="fourth">Vesting Schedule</Nav.Link>
                      </Nav.Item>
                  </Nav> 
                  <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Description/>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <TokenSale/>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Metrics/>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <VestingSchedule/>
                      </Tab.Pane>
                  </Tab.Content> 
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchpadSingle;
