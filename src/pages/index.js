import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

import DefaultPageLayout from 'src/components/layouts/DefaultPageLayout';
import AlertDismissible from 'src/components/alerts/AlertDismissible';
import Breadcrumbs from 'src/components/breadcrumbs/Breadcrumbs';
import ContactForm from 'src/components/forms/ContactForm';
import SuccessModal from 'src/components/modals/SuccessModal';
import PaginationInfo from 'src/components/pagination/PaginationInfo';
import BodyText from 'src/components/typography/BodyText';

const HomePage = () => {
    const [show, toggleModal] = useState(false);
    return (
        <DefaultPageLayout
            pageId="indexPage"
            className="index-page"
            title="Homepage">
            <Container>
                <h2>Default page layout will, list all available components</h2>
                <AlertDismissible />

                <Breadcrumbs pageTitle="Index" />

                <ContactForm onSubmit={() => {}} />

                <Button varian="primary" onClick={() => toggleModal(true)}>
                    Open Success Modal
                </Button>
                <SuccessModal
                    title="Success"
                    message="Goodwork!"
                    show={show}
                    onClose={() => toggleModal(false)}
                />

                <PaginationInfo
                    pageInfo={{
                        page: 1,
                        totalPages: 5,
                        limit: 10,
                        total: 50,
                    }}
                />

                <BodyText as="h1">Hello world</BodyText>
            </Container>

            <style jsx>{`
                .index-page {
                    background-color: var(--light);
                }
            `}</style>
        </DefaultPageLayout>
    );
};

export default HomePage;
