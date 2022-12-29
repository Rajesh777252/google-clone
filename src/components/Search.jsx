import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
  const [, dispatch] = useStateValue();

  const [input, setInput] = useState();
  const history = useNavigate();

  const search = (e) => {
    e.preventDefault();
     
    console.log('You hit the search button >>', input)
    
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    })

    history.push('/search')
  };

  const enterSearch = e => {
    e.preventDefault();
    if (e.keyCode === 13) {
      history.push('/search');
    }
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
        <CameraAltIcon />
      </div>

      {!hideButtons ? (
         <div className="search_buttons">
         <Button type="submit" onClick={search} variant="outlined">
           google Search
         </Button>
         <Button variant="outlined">I'm Feeling Lucky</Button>
       </div>
      ): (
        <div className="search_buttons">
        <Button className="search_buttonHidden" type="submit" onClick={search} variant="outlined">
          google Search
        </Button>
        <Button className="search_buttonHidden" variant="outlined">I'm Feeling Lucky</Button>
      </div>
      ) }
       
      
    </form>
  );
};

export default Search;
