import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'pt-br', label: 'Português do Brasil' },
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' }
]

const Dropdown = () => (
  <div style={{width: '30%'}}>

    <Select options={options} defaultValue={options[0]} style="width: 10px;"/>
  </div>
)
export default Dropdown;
