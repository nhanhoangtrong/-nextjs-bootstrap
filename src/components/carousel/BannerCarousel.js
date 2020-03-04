import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Carousel } from 'react-bootstrap';

const BannerCarousel = ({ banners }) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Carousel
            className="banner-carousel"
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}>
            {banners.map((item, idx) => {
                const { title, description, id, url, photoPC } = item;
                return (
                    <Carousel.Item key={id}>
                        <img
                            className="d-block w-100"
                            src={photoPC}
                            alt={idx + 1 + ' slide'}
                        />
                        <Link href={url}>
                            <Carousel.Caption>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                );
            })}

            <style jsx>{`
                .carousel-caption {
                    text-shadow: 2px 2px 3px #000;
                }
            `}</style>
        </Carousel>
    );
};

BannerCarousel.propTypes = {
    banners: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            photoPC: PropTypes.string,
            photoMobile: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            url: PropTypes.string,
        })
    ).isRequired,
};

export default BannerCarousel;
