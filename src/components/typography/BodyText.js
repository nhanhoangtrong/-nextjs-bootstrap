import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BodyText = ({ className, children, as, ...props }) => {
    const clazz = classNames('body-text', className);
    const Tag = typeof as !== 'undefined' ? as : 'span';
    return (
        <Tag className={clazz} {...props}>
            {children}

            <style jsx>
                {`
                    .body-text {
                        color: var(--red);
                    }
                `}
            </style>
        </Tag>
    );
};

BodyText.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    as: PropTypes.any,
};

export default BodyText;
