import { Chat, EmojiFlags, ExpandMore, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';
import userEvent from '@testing-library/user-event';
import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';

function Sidebar () {
  return (
    <div className="sidebar">
      <SidebarRow src='' title='Borbala Mester' />

      <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center' />
      <SidebarRow Icon={EmojiFlags} title='Pages' />
      <SidebarRow Icon={People} title='Friends' />
      <SidebarRow Icon={Chat} title='Messenger' />
      <SidebarRow Icon={Storefront} title='Marketplace' />
      <SidebarRow Icon={VideoLibrary} title='Videos' />
      <SidebarRow Icon={ExpandMore} title='Marketplace' />
    </div>
  )
}

export default Sidebar
