import React from 'react';
import logo from './img/logo.png';

function Header(props) {
    return (
              <nav className="nav-bar green lighten-2">
                <div className="nav-wrapper">
                <img alt="logo" src={logo}/>
                Браузер по базе игры Genshin Impact написанный на основе неофициального API
                <a className="waves-effect green btn" href="https://genshinlist.com/developer-api">
                    GenshinList API</a>
                </div>
            </nav>
    );
}

export default Header;