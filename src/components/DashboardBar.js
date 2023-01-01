import { useState, useEffect } from 'react';

import { Navbar, Button, Badge, Avatar } from "flowbite-react";

import { GetImage } from './Utilities';

import NewSplit from "./NewSplit";
import AddFriend from "./AddFriend";

import logo from "../assets/logo.png";

const DashboardBar = ({ account }) => {
  const [visible, setVisible] = useState(false);
  const [friend, setFriend] = useState(false);
  const [picture, setPicture] = useState(null);

  const getData = async () => {
    const image = await GetImage()
    const url = URL.createObjectURL(image[0])
    setPicture(url)
  };

  useEffect(() => {
    getData();
  }, []);

  const toggle = () => {
    visible ? setVisible(false) : setVisible(true)
  }

  const toggleFriend = () => {
    friend ? setFriend(false) : setFriend(true)
  }

  return (
    <Navbar fluid={true} rounded={true} className="bg-stone-800 gap-4">
      <Navbar.Brand>
        <img src={logo} className="mr-3 h-6 sm:h-9 rounded-lg" alt="Logo" />
        <span className="self-center text-4xl font-bold text-white py-3">
          ChainSplit
        </span>
      </Navbar.Brand>
      <div className="flex text-xl gap-4 items-center">
      <Avatar img={picture} />
        <Badge
          size="lg"
          color="dark"
          className={
            "text-white bg-gradient-to-r from-blue-600 to-fuchsia-600 font-mono"
          }
        >
          {account && account.slice(0, 5) + '...' + account.slice(38, 42)}
        </Badge>
        <Button
          size="2xl"
          gradientMonochrome="purple"
          className={"text-2xl py-2 px-3"}
          onClick={() => toggleFriend()}
        >
          Add Friends
        </Button>
        {friend && <AddFriend toggle={toggleFriend} /> }
        <Button
          size="2xl"
          gradientMonochrome="success"
          className={"text-2xl py-2 px-3"}
          onClick={() => toggle()}
        >
          Start a New Split
        </Button>
        {visible && <NewSplit toggle={toggle} account={account}/> }
      </div>
    </Navbar>
  );
};

export default DashboardBar;
