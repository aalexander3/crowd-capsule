import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const languageOptions = [
  { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
  { key: 'English ', text: 'English ', value: 'English '},
  { key: 'German', text: 'German', value: 'German' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish'},
  { key: 'Chinese', text: 'Chinese', value: 'Chinese'},
  { key: 'Hindi ', text: 'Hindi ', value: 'Hindi '},
  { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese'},
  { key: 'Bengali', text: 'Bengali', value: 'Bengali'},
  { key: 'Russian', text: 'Russian', value: 'Russian'},
  { key: 'Japanese', text: 'Japanese', value: 'Japanese'},
  { key: 'Punjabi', text: 'Punjabi', value: 'Punjabi'},
]

const LangDropDown = () => (
  <Dropdown
    button
    className='icon'
    floating
    labeled
    icon='world'
    options={languageOptions}
    search
    text='Select Language'
  />
)

export default LangDropDown
