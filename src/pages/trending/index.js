import React, { useState, useEffect } from "react"
import axios from "axios"

const Trending = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios('https://api.giphy.com/v1/gifs/trending', {
                params: {
                    api_key: process.env.REACT_APP_GIPHY_KEY,
                    limit:10
                }
            });
            console.log(response);
            setData(response.data.data);
        };
        fetchData();
    }, [])

    const getGiff = () => {
        return data.map(d => {
            return(
                <div key={d.id}>
                    <img src={d.images.fixed_height.url} alt="gif" />
                </div>
            )
        })
    }

    return(
        <div>
            <p>Trending</p>
            {getGiff}
        </div>
    )   
}

export default Trending;
