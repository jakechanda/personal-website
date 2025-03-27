import React, { useState } from 'react';
import { Menu, Image, Icon, Sidebar } from 'semantic-ui-react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    setSidebarVisible(false); // Close sidebar when item is clicked
  };

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  return (
    <>
      <Menu fixed='top' inverted stackable size="large" className="main-nav">
        <Menu.Item header className="brand-item">
          <Image
            src="/sungodchanda.png"
            size="small"
            style={{ marginRight: '1em' }}
            alt="Logo"
          />
          <span className="brand-name">Jake Chanda</span>
        </Menu.Item>

        <Menu.Menu position='right' className="desktop-menu">
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
            className="nav-item"
          />
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={handleItemClick}
            className="nav-item"
          />
          <Menu.Item
            name='projects'
            active={activeItem === 'projects'}
            onClick={handleItemClick}
            className="nav-item"
          />
          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={handleItemClick}
            className="nav-item"
          />
        </Menu.Menu>

        {/* Mobile Menu Button */}
        <Menu.Item position='right' className="mobile-only" onClick={toggleSidebar}>
          <Icon name='bars' size='large' />
        </Menu.Item>
      </Menu>

      {/* Mobile Sidebar */}
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible={sidebarVisible}
        width='thin'
        className="mobile-sidebar"
      >
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={handleItemClick}
        />
      </Sidebar>
    </>
  );
};

export default Navbar; 