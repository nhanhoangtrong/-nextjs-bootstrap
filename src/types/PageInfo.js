import PropTypes from 'prop-types';

export const pageInfoShape = PropTypes.shape({
    page: PropTypes.number,
    totalPages: PropTypes.number,
    total: PropTypes.number,
    limit: PropTypes.number,
});
