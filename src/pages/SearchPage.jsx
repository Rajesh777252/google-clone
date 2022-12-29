import React from "react";
import "./Searchpage.css";
import { useStateValue } from '../StateProvider';
import { Link } from "react-router-dom";
import  Search  from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/More";
//import useGoogleSearch from '../useGoogleSearch';

const SearchPage = () => {
  const [{ term= 'tesla' },dispatch] = useStateValue();
  //const { data } = useGoogleSearch{term};

  const data = Response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="logoimage"
            className="searchPage_logo"
          />
        </Link>
        <div className="searchPage_headerBody">
            <Search hideButtons />

            <div className="searchPage_options">
                <div className="searchPage_optionsLeft">
                   <div className="searchPage_option">
                    <SearchIcon />
                    <Link to='/all'>All</Link>
                   </div>
                   <div className="searchPage_option">
                    <DescriptionIcon />
                    <Link to='/news'>News</Link>
                   </div>
                   <div className="searchPage_option">
                    <ImageIcon />
                    <Link to='/images'>Images</Link>
                   </div>
                   <div className="searchPage_option">
                    <LocalOfferIcon />
                    <Link to='/shopping'>Shopping</Link>
                   </div>
                   <div className="searchPage_option">
                    <RoomIcon />
                    <Link to='/maps'>maps</Link>
                   </div>
                   <div className="searchPage_option">
                    <MoreVertIcon />
                    <Link to='/more'>more</Link>
                   </div>
                </div>
                <div className="searchPage_optionsRight">
                <div className="searchPage_option">
                    <Link to='/setting'>Setting</Link>
                   </div><div className="searchPage_option">
                    <Link to='/tools'>Tools</Link>
                   </div>
                </div>
            </div>
        </div>
      </div>

      {true && (
        <div className="searchpage_results">
          <p className="searchPage_resultCount" >
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds for {term})
          </p>

          {data?.item.map(item=> (
            <div className="searchPage_result">
              <a href={item.link} >{item.displayLink}</a>
               <p className="searchpage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default SearchPage;
