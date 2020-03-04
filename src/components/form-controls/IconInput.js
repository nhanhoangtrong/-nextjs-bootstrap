import React from 'react';
import PropTypes from 'prop-types';

import { InputGroup, FormControl } from 'react-bootstrap';

const IconInput = ({ iconName, ...inputProps }) => {
    return (
        <InputGroup className="icon-input">
            <InputGroup.Prepend>
                <InputGroup.Text>
                    <i className={'fas fa-' + iconName} />
                </InputGroup.Text>
            </InputGroup.Prepend>

            <FormControl {...inputProps} />
        </InputGroup>
    );
};

IconInput.propTypes = {
    iconName: PropTypes.string.isRequired,
};

export default IconInput;
