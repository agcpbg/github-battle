import React from 'react'
import PropTypes from 'prop-types'

const SelectLanguage = props => {

  let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <ul className='languages'>
      {
        languages.map(lang => {
          return (
            <li
              style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
              key={lang}
              onClick={() => props.onSelect(lang)}>
              {lang}
            </li>
          )
        })
      }
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default SelectLanguage
