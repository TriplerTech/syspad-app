import React from 'react';
import { Link } from "react-router-dom";
import socials from "../../assets/data/socials"; 
import Logo from '../../assets/img/logo-min.svg';
import Logo2 from '../../assets/img/logo.png';

import { IoMdClose,IoWalletOutline } from "react-icons/io";
import { RiDashboardFill, RiAccountCircleFill } from "react-icons/ri";
import { AiOutlineDollarCircle,AiOutlineMenu } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
 
import './header.scss';
const Header = () => {
  return (
    <nav className="navbar topMenu">
        <div className="container">
            <div className="left-head"> 
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <AiOutlineMenu/>
                </button>
                <a className="navbar-brand" href="/home">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>
            <div className="right-head"> 
                <Link to='/home'><BiWallet/> Connect Wallet</Link>
            </div>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header justify-content-center">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                        <img src={Logo2} alt="Logo" height={150} />
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <IoMdClose/>
                    </button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3"> 
                        <li className="nav-item">
                            <Link to='/dashboard'><RiDashboardFill/> Dashboard</Link>
                        </li>
                        <li className="nav-item dropdown">
                            {/* <Link to="/stake" className="nav-link dropdown-toggle show" id="offcanvasNavbarDropdown" role="button" aria-expanded="true"> */}
                            <Link to="/stake" id="offcanvasNavbarDropdown" role="button">
                            <AiOutlineDollarCircle/> Stake
                            </Link>
                            {/* <ul className="dropdown-menu show" aria-labelledby="offcanvasNavbarDropdown">
                                <li className='dropdown-list'><Link to='/stake'>Show Tiers</Link></li> 
                                <li className='dropdown-list'><Link to='/stake'>Integration to stake</Link> </li> 
                                <li className='dropdown-list-sub'>
                                    <ul>
                                        <li className='dropdown-list'><Link to='/stake'>Deposit</Link></li>
                                        <li className='dropdown-list'><Link to='/stake'>Withdraw</Link></li>
                                        <li className='dropdown-list'><Link to='/stake'>Rewards</Link></li> 
                                    </ul>
                                </li> 
                            </ul> */}
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle show" href="#" id="offcanvasNavbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                            <RiAccountCircleFill/> Accounts
                            </a>
                            <ul className="dropdown-menu show" aria-labelledby="offcanvasNavbarDropdown2">
                                <li className='dropdown-list'><Link to='/kyc'>KYC & Audit</Link></li>  
                                
                            </ul>
                        </li>
                    </ul> 
                    <ul className="menu-social">
                        <div className="menu-social-title">
                            Join the community
                        </div>
                        {socials.map(({ id, links, icon, text }) => (
                            <li key={id}>
                                <a href={links}>{icon} {text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header