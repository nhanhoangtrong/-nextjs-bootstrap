import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { createReactComponent } from '../../lib/react-utils';

export const FooterNavListItem = ({ path, name }) => {
    return (
        <li className="footer-nav-list-item">
            <Link href={path}>
                <a>{name}</a>
            </Link>
        </li>
    );
};

FooterNavListItem.propTypes = {
    path: PropTypes.string,
    name: PropTypes.string,
};

export const FooterNavList = createReactComponent(
    'FooterNavList',
    'ul',
    'footer-nav-list'
);

export const FooterNavTitle = createReactComponent(
    'FooterNavTitle',
    'h5',
    'footer-nav-title'
);
export const FooterNavIndicator = createReactComponent(
    'FooterNavIndicator',
    'div',
    'footer-nav-indicator'
);
const FooterNav = ({ title, items }) => {
    return (
        <div className="footer-nav">
            <FooterNavTitle>{title}</FooterNavTitle>
            <FooterNavIndicator />

            <FooterNavList>
                {items.map((it, idx) => {
                    return <FooterNavListItem key={idx} {...it} />;
                })}
            </FooterNavList>
            <style jsx>{`
                .footer-nav-title {
                    text-transform: uppercase;
                }
                .footer-nav-indicator {
                    width: 30px;
                    height: 3px;
                    margin: 1rem 0;
                    background: #c58933;
                }
                .footer-nav-list {
                    list-style: none;
                    padding-left: 0;
                }
                .footer-nav-list-item {
                    padding: 6px 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                }
                .footer-nav-list-item:last-child {
                    border-bottom: none;
                }
                .footer-nav-list-item a {
                    color: white;
                    font-weight: 300;
                }
            `}</style>
        </div>
    );
};

FooterNav.propTypes = {
    title: PropTypes.string,
    items: PropTypes.any,
};

export default FooterNav;
