import React from "react";
import {Link} from 'react-router-dom';
import './Home.css';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import Avatar from '@mui/material/Avatar';
import Search from "../components/Search";


const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to='/about' >About</Link>
          <Link to='/store' >Store</Link>
        </div>
        <div className="home_headerRight">
        <Link to='/gmail' >Gmail</Link>
          <Link to='/images' >Images</Link>
          <ViewCompactIcon />
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="logo img" />
        <div className="home_inputContainer">
           <Search hideButtons />
        </div>
      </div>
    </div>
  );
};

export default Home;
