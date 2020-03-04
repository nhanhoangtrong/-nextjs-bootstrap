import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button } from 'react-bootstrap';

const ErrorNotFound = ({ name, message }) => {
    return (
        <Container as="section" className="error-not-found">
            <h3>{name}</h3>
            <p>{message}</p>

            <Button as="a" href="/" variant="secondary">
                <i className="fas fa-chevron-left" style={{ fontSize: 14 }} />{' '}
                Back to Homepage
            </Button>

            <style jsx>{`
                .error-not-found {
                    padding-top: 4rem;
                    padding-bottom: 4rem;
                    text-align: center;
                }
            `}</style>
        </Container>
    );
};

ErrorNotFound.propTypes = {
    name: PropTypes.string,
    message: PropTypes.string,
};

export default ErrorNotFound;
