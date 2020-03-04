import React from 'react';
import PropTypes from 'prop-types';

import { pageInfoShape } from 'src/types/PageInfo';
import { Pagination } from 'react-bootstrap';

const renderItems = (formatHref, current, max) => {
    const hasPrev = current > 1;
    const hasNext = current < max;

    const items = [];

    items.push(
        <Pagination.First
            key="first"
            href={formatHref(1)}
            disabled={!hasPrev}
        />
    );
    items.push(
        <Pagination.Prev
            key="prev"
            href={hasPrev ? formatHref(current - 1) : formatHref(1)}
            disabled={!hasPrev}
        />
    );

    for (let i = 1; i <= max; ++i) {
        items.push(
            <Pagination.Item
                key={i}
                href={formatHref(i)}
                active={i === current}>
                {i}
            </Pagination.Item>
        );
    }

    items.push(
        <Pagination.Next
            key="next"
            href={hasNext ? formatHref(current + 1) : null}
            disabled={!hasNext}
        />
    );
    items.push(
        <Pagination.Last
            key="last"
            href={formatHref(max)}
            disabled={!hasNext}
        />
    );

    return items;
};

const PaginationInfo = ({ pageInfo, formatHref }) => {
    const { page, totalPages, total } = pageInfo;
    const items = renderItems(formatHref, page, totalPages);

    return (
        <div className="pagination-info">
            <Pagination className="pagination-info__paging">{items}</Pagination>

            <small className="pagination-info__limit">
                {total} items / {totalPages} pages
            </small>

            <style jsx>{`
                .pagination-info {
                }
            `}</style>
        </div>
    );
};

PaginationInfo.propTypes = {
    pageInfo: pageInfoShape,
    formatHref: PropTypes.func,
};

PaginationInfo.defaultProps = {
    formatHref: (pageIdx) => {
        return `?page=${pageIdx}`;
    },
};

export default PaginationInfo;
