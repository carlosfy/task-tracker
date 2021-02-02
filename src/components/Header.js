import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onButton, open }) => {

    return (
        <header className='header' >
            <h1>{title}</h1>
            <Button color={open ? 'red' : 'green'} text={open ? 'Close' : 'Add'} onClick={onButton} />
        </header >
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headerStyle = {
//     backgroundColor: 'silver',
// }

export default Header
