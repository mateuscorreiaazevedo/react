import PropTypes from 'prop-types'

function Button({ place, event }) {

    return (
        <button type="submit" onClick={event}>
            {place}
        </button>
    )
}

Button.propTypes = {
    place: PropTypes.string
}

export default Button
//