import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

// TODO: Update <Search> usage after its will be implemented

const TopMenu = () => (
  <div>
    <Menu attached='top'>
      <Menu.Item>
        <img src="/js_logo.png" />
      </Menu.Item>

      <Menu.Menu position='right'>
        
        <Dropdown item text='Position' simple>
          <Dropdown.Menu>
            <Dropdown.Item>RB</Dropdown.Item>
            <Dropdown.Item>WR</Dropdown.Item>
            <Dropdown.Item>RB/WR</Dropdown.Item>
            <Dropdown.Item>QB</Dropdown.Item>
            <Dropdown.Item>TE</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className='ui right aligned category search item'>
          <div className='ui transparent icon input'>
            <input
              className='prompt'
              type='text'
              placeholder='Search by Name...'
            />
            <i className='search link icon' />
          </div>
          <div className='results' />
        </div>
      </Menu.Menu>
    </Menu>
  </div>
)

export default TopMenu