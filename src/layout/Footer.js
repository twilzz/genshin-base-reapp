import React from 'react';

function Footer(props) {
    return (
        <footer className="page-footer green lighten-3">
        <div className="footer-copyright">
          <div className="container">
            <div className="footer-wrapper">
            © {new Date().getFullYear()} Сладков Алексей
          <a className="waves-effect green btn" href="https://genshinlist.com/developer-api">
                    Github</a>
            </div>
         
          </div>
        </div>
      </footer>
    );
}

export default Footer;