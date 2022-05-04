import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    return (
        <button
        style={{backgroundColor: color }}
        className='btn'>{text}</button>            
    )
}

Button.defaultProps = {
    color: 'green'
}

//impt pour importer les PropTypes
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button
