import axios from 'axios';
import { useState } from 'react';
import { FetchState, RacesPostData, Race } from '../types';

export function useGetPosts() {
    const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
    const [posts, setPosts] = useState<Array<Race>>([]);
    const getPosts = async () => {
        try{
            setFetchState(FetchState.LOADING);

            const res = await axios.get('http://www.dnd5eapi.co/api/races');
            const resData = res.data as RacesPostData;


            setPosts(resData.results);
            setFetchState(FetchState.SUCCESS);
        } catch (err){
            setFetchState(FetchState.ERROR);
        }
    };

    return[posts, fetchState, getPosts] as const;
}