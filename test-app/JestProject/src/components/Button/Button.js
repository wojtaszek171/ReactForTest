import PropTypes from 'prop-types'
import React from 'react'
import {
  Button as BootstrapButton
} from 'react-bootstrap'
import classes from './Button.module.scss'

export class Button extends React.Component {
  static propTypes = {
    icon: PropTypes.element,
    bsStyle: PropTypes.string
  }

  render () {
    const {
      children,
      icon,
      bsStyle,
      ...restProps
    } = this.props

    let iconClassName = classes.icon
    if (bsStyle) iconClassName += ' ' + classes.styled
    if (React.Children.count(children) > 0) iconClassName += ' ' + classes.margin
  
    return (
      <BootstrapButton
        {...restProps}
        bsStyle={bsStyle}
      >
        {icon &&
          React.cloneElement(icon, {
            className: icon.props.className ? icon.props.className + ' ' + iconClassName : iconClassName
          })
        }
        {children}
      </BootstrapButton>
    )
  }
}

export default Button

