import React from 'react'
import { shallow } from 'enzyme'
import KanBoIcon from '../KanBoIcon/index'
import { Button } from './Button'

describe('<Button />', () => {
  let props = {}
  it('renders without crashing', () => {
    shallow(<Button />)
  })

  it('has bsStyle prop', () => {
    props.bsStyle = 'primary'
    shallow(<Button {...props}/>)
  })

  it('has icon with className', () => {
    props.icon = <KanBoIcon fixedWidth className='classtest' name='kanbo-16-user' />
    let wrapper = shallow(<Button {...props}/>)
    expect(wrapper.find('KanBoIcon').length > 0).toBeTruthy()
  })

  it('has icon without className', () => {
    props.icon = <KanBoIcon fixedWidth name='kanbo-16-user' />
    let wrapper = shallow(<Button {...props}/>)
    expect(wrapper.find('KanBoIcon').length > 0).toBeTruthy()
  })

  it('has children', () => {
    shallow(<Button {...props}><i className="zmdi zmdi-mail-send"></i></Button>)
  })
})
