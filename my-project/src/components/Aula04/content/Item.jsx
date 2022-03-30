import PropTypes from 'prop-types'

function Item({ brand, year }) {
    return (
        <>
            <li>
                <h2>{brand}</h2>
                <p>{year}</p>
            </li>
        </>
    )
}

Item.propTypes = {
    brand: PropTypes.string.isRequired,
    year: PropTypes.number
}

Item.defaultProps = {
    brand: 'Sem marca definida',
    year: 0
}

export default Item