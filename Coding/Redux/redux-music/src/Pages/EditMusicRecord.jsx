import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, useParams } from "react-router-dom";
import {getMusicRecord, updateMusicRecord} from "../Redux/AppReducer/action";

const EditMusicRecord = () => {

    const {id} = useParams();
    const albums = useSelector((store) => store.AppReducer.musicRecords);
    const [musicName, setMusicName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(albums.length === 0){
            dispatch(getMusicRecord());
        }
    },[albums.length,dispatch]);


    useEffect(() => {
        if(id){
            const currentMusic = albums.find(album => album.id === id);
            if(currentMusic){
                setMusicName(currentMusic.name);
            }
        }
    },[id,albums]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(musicName){
            const payload = {
                name: musicName,
            }
            dispatch(updateMusicRecord(id,payload))
            .then(() => {
                // dispatch(getMusicRecord);
                navigate("/");
            });
        }
    };

    return (
        <div>
            <h1>Edit Page</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Edit music name</label>
                        <input 
                           value={musicName}
                           onChange={(e) => setMusicName(e.target.value)}
                        />
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditMusicRecord;