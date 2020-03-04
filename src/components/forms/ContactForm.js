import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Button, Form } from 'react-bootstrap';
import IconInput from '../form-controls/IconInput';

const ContactForm = ({ onSubmit }) => {
    const [state, setState] = useState({
        phone: '',
        email: '',
        name: '',
    });
    const _handleFieldChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setState({
            ...state,
            [fieldName.substr(8)]: fieldValue,
        });
    };

    const { name, email, phone } = state;
    return (
        <Form
            className="contact-form"
            onSubmit={(e) => {
                e.preventDefault();

                onSubmit({
                    name,
                    email,
                    phone,
                });

                // After submit, clear state
                setState({
                    name: '',
                    phone: '',
                    email: '',
                });
            }}>
            <Form.Row>
                <Col xs={12} md={6} lg={3} className="pt-2 pb-2">
                    <Form.Label htmlFor="contact_name" srOnly>
                        Name
                    </Form.Label>
                    <IconInput
                        iconName="user"
                        placeholder="Input name"
                        name="contact_name"
                        onChange={_handleFieldChange}
                        value={name}
                        required
                    />
                </Col>
                <Col xs={12} md={6} lg={3} className="pt-2 pb-2">
                    <Form.Label htmlFor="contact_email" srOnly>
                        Email
                    </Form.Label>
                    <IconInput
                        name="contact_email"
                        iconName="envelope"
                        value={email}
                        onChange={_handleFieldChange}
                        placeholder="Input email address"
                    />
                </Col>
                <Col xs={12} md={6} lg={3} className="pt-2 pb-2">
                    <Form.Label htmlFor="contact_phone" srOnly>
                        Phone
                    </Form.Label>
                    <IconInput
                        required
                        name="contact_phone"
                        value={phone}
                        iconName="phone-alt"
                        onChange={_handleFieldChange}
                        placeholder="Input phone number"
                    />
                </Col>
                <Col xs={12} md={6} lg={3} className="text-center pt-2 pb-2">
                    <Button
                        className="rounded-0 w-100"
                        variant="warning"
                        type="submit">
                        <i className="fas fa-paper-plane mr-2" />
                        Submit
                    </Button>
                </Col>
            </Form.Row>
            <style jsx>{`
                .contact-form
                    .icon-input
                    .input-group-prepend
                    .input-group-text {
                    border-color: #afafaf;
                    color: #f1f1f1;
                    background-color: transparent;
                }
                .contact-form .form-control {
                    border-color: #afafaf;
                    color: #f5f5f5;
                    background-color: transparent;
                }
                .contact-form .form-control::placeholder {
                    color: #f0f0f0;
                }
            `}</style>
        </Form>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
