import axios from 'axios'
import React, {useState} from 'react'
import SearchGiff from '../../component/SearchGiff/index'
import Giff from '../../component/Giff/index'
import setQuery from '../../store/queryAction'
import { useSelector, useDispatch } from "react-redux";


export default function SearchAPI() {
  const [query, setQuery] = useState([])
  const [results, setResult] = useState([])

  const currentAmount = useSelector((state) => state.account.value);
  const dispatch = useDispatch();
  const [changeAmount, setChangeAmount] = useState(0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  const handleSearch = (e) => {
    setQuery(e.target.query)
  };

  const getData = () => {
    axios
      .get(`https://api.giphy.com/v1/gifs/search?&api_key=OR4IVlVHh6IdUJWvUsGakpG1BUOXqQTL&q=${query}&limit=12`)
      .then((response) => {
        console.log(response.data.data)
        setResult(response.data.data)
      });
  }
  
  return (
    <div>
      <SearchGiff 
        query={query}
        onChange={handleSearch}
        onSubmit={handleSubmit}
      />
      {results.map((res) => {
        return(
          <Giff key={res.id} source={res.images.original.url} title={res.title} />
          );
        })}
    </div>
  );
}
