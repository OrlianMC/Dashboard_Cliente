// import React from 'react';
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbarContainer">
                <div className="search">
                    <input type="text" className="text" placeholder="Búsqueda"/>
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <Switch style={{color: "#210876"}} className="icon" />
                        <span>Tema</span>
                    </div>

                    <div className="item">
                        <LanguageIcon  className="icon"/>
                        <span>Español</span>
                    </div>

                    <div className="item">
                        <FullscreenIcon  className="icon"/>
                    </div>

                    <div className="item">
                        <AccountCircleIcon  className="icon"/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar