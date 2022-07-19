import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import img4 from '../../../assets/img/projects4.png';
import admin from '../../../assets/img/admin4.png';
// import projects from "../../../assets/data/projects"; 

import { ethers } from 'ethers';
import contract_abi from '../../../contracts/IDO_abi.json';
import token_abi from '../../../contracts/Token_abi.json';
import CountDown from '../../../assets/data/project/CountDown';

import "./launchingProjects.scss";

const LaunchingProjects = () => {
    const projectName = "SYSPAD Project";
    const desc = "SYSPAD Token for Syscoin eco-system.";
    const IDOContractAddress = localStorage.getItem('IDOProjectContractAddress');
    const [totalSale, setTotalSale] = useState(0);
    const [maxBuy, setMaxBuy] = useState(0);
    const [tokenSymbol, setTokenSymbol] = useState("");
    const [timeData, setData] = useState("");
    const [tokenRate, setRate] = useState(1);

    const passData = {
        contract: IDOContractAddress,
        projectName: projectName,
        token: tokenSymbol,
        totalSale: totalSale,
        maxBuy: maxBuy,
        desc: desc,
        rate: tokenRate,
        start: timeData
    }

    useEffect(() => {
        if(typeof window.ethereum !== undefined) {
            async function contract() {
                await window.ethereum.enable();

                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();

                const IDOContract = new ethers.Contract(IDOContractAddress, contract_abi, signer);
                let tokenAddress = await IDOContract._token();
                let rate = await IDOContract._rate();
                setRate(rate.toString());
                let total = await IDOContract.availableTokensIDO();
                setTotalSale(total.toString()/(10**18) / rate.toString());
                let max = await IDOContract.maxPurchase();
                setMaxBuy(max.toString()/(10**18));
                let startTime = await IDOContract.startDate();
                setData(startTime.toString());

                const tokenContract = new ethers.Contract(tokenAddress, token_abi, signer);
                let symbol = await tokenContract.symbol();
                setTokenSymbol(symbol);
            }

            contract();
        }
    });

    return (
        <div className="launchingSoon-area pt-100 pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <div className="h2 text-white">Launched Projects</div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="projects-item mt-4">
                            <Link to='/launchpad_single' className='projects-images'>
                                <img src={img4} alt="images" />
                            </Link>
                            <div className="projects-text">
                                <img src={admin} alt="image" />
                                <div className="h4 text-white pt-3 pb-2">{projectName}</div>
                                <span>{tokenSymbol}</span>
                                <p>{desc}</p>
                                <ul>
                                    <CountDown data={timeData}></CountDown>
                                    <li><span>Fundraise Goal</span> <span>{totalSale} SYS</span></li>
                                    <li><span>Max Allocation </span> <span>{maxBuy} SYS</span></li>
                                </ul>
                            </div>
                            <div className="projects-btn">
                                <Link to="/launchpad_single" state={passData} >
                                    token sale
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LaunchingProjects