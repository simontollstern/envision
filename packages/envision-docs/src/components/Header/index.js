import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Link from '../Link';

const Header = ({ title, menuItems }) => {
   return (
      <>
         <Helmet>
            <html lang="en" className="sv-js" />
            <meta charset="utf-8" />
            <meta name="viewport" content="width=1050" />
            <title>{`${title} \u00B7 Envision by Sitevision`}</title>
            <link
               rel="icon"
               type="image/png"
               href="/images/envision_logo.png"
               sizes="32x32"
            />
         </Helmet>
         <div className="env-w-100 sv-header">
            <header className="header env-p-top--small env-p-bottom--small">
               <div className="logo">
                  <a href="https://www.sitevision.se">
                     <img src="/images/sitevision-logo.svg" alt="Sitevision" />
                  </a>
               </div>
               <nav className="header-nav env-m-right--medium">
                  <ul
                     className="env-nav env-nav--menubar env-nav--border"
                     role="menubar"
                  >
                     {menuItems.map(({ label, to }) => (
                        <li
                           className="env-nav__item"
                           key={label}
                           role="menuitem"
                        >
                           <Link to={to} activeClassName="active">
                              {label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </nav>
            </header>
         </div>
      </>
   );
};

Header.propTypes = {
   title: PropTypes.string,
   menuItems: PropTypes.array,
};

export default Header;
