import React from 'react';
import PropTypes from 'prop-types';

import { Breadcrumb } from 'react-bootstrap';

const Breadcrumbs = ({ pageTitle, parts }) => {
    return (
        <Breadcrumb className="breadcrumbs">
            {(parts || []).map((part, idx) => {
                return (
                    <Breadcrumb.Item key={idx} href={part.href}>
                        {part.title}
                    </Breadcrumb.Item>
                );
            })}
            {!!pageTitle && (
                <Breadcrumb.Item active>{pageTitle}</Breadcrumb.Item>
            )}
            <style jsx>{`
                .breadcrumbs .breadcrumb {
                    background-color: transparent;
                }
            `}</style>
        </Breadcrumb>
    );
};

Breadcrumbs.propTypes = {
    pageTitle: PropTypes.string,
    parts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            href: PropTypes.stirng,
        })
    ),
};

export default Breadcrumbs;
