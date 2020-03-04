import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Head from 'next/head';

const DefaultPageLayout = ({ className, pageId, children, title }) => {
    return (
        <div
            id={pageId}
            className={classNames('default-page-layout', className)}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <main className="default-page-layout-main">{children}</main>

            <style jsx>{`
                .default-page-layout {
                    min-height: 100vh;
                    display: flex;
                    flex-flow: column nowrap;
                }

                .default-page-layout-main {
                    flex: 1;
                }
            `}</style>
        </div>
    );
};

DefaultPageLayout.propTypes = {
    pageId: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.any,
};

DefaultPageLayout.defaultProps = {
    title: 'Next.JS Bootstrap',
};

export default DefaultPageLayout;
