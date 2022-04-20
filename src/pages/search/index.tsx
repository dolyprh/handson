import { ChangeEventHandler, useState } from 'react'
import SearchGiff from "../../component/SearchGiff";
import Giff from '../../component/Giff'
import { setQuery } from '../../store/queryAction'
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'
import { TRootState } from '../../store';
import './style.css'

const Search = () => {
  const currentQuery: String = useSelector((state: TRootState) => state.query.value);
  const dispatch = useDispatch();
  const [results, setResult] = useState([])
  
  const handleSubmit: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    getData();
  }

  const handleSearch = (e) => {
    dispatch(setQuery(e.target.value))
  };

  const getData = () => {
    axios
      .get(`https://api.giphy.com/v1/gifs/search?&api_key=OR4IVlVHh6IdUJWvUsGakpG1BUOXqQTL&q=${currentQuery}&limit=12`)
      .then((response) => {
        console.log(response.data.data)
        setResult(response.data.data)
      });
  }
  
  return (
    <div className='search-content'>
      <SearchGiff 
        query={currentQuery}
        onChange={handleSearch}
        onSubmit={handleSubmit}
      />
      {results.map((res: any) => {
        return(
          <Giff key={res.id} source={res.images.original.url} title={res.title} />
          );
        })}
    </div>
  );
}

export default Search
