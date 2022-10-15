import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import getMusicRecord from "../Redux/AppReducer/action";
import { Link } from "react-router-dom";

const MusicAlbum = () => {

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
    const location = useLocation();

// console.log(location);
// whenever the filters in filtersort component changes the music album should re-render with the same filter
// (1) make the API call with the filter
// (2) filter the data before rendering then to  UI

    useEffect(() => {
        if(location || musicRecords.length === 0){
            const genre = searchParams.getAll("genre");
            const queryParams = {
                params: {
                    genre: genre,
                    _sort: searchParams.get("sortBy") && "year",
                    _order: searchParams.get("sortBy"),
                },
            }
            dispatch(getMusicRecord(queryParams));
        }
    },[location.search]);

    return (
        <>
            {musicRecords.length > 0 && 
            musicRecords.map((album) => {
                return (
                    <div 
                        key={album.id}
                        style={{
                            border: "1px solid black",
                            padding: "5px",
                            margin: "5px",
                            height: "auto",
                        }}
                        >
                        <div>{album.name}</div>
                        <div><img src={album.img} alt={album.name}/></div>
                        <div>{album.genre}</div>
                        <div>{album.year}</div>
                        <Link to={`/music/${album.id}/edit`}><button>Edit</button></Link>
                    </div>
                );
            })}
        </>
    )
};
export default MusicAlbum;