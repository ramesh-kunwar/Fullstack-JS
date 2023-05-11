import React from 'react'
import PropTypes from 'prop-types'

const Header = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

Header.defaultProps = {
    text : "Feeback UI"
}

Header.propTypes = {
    text: PropTypes.string,

}

export default Header