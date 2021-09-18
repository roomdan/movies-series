import { GetAxios } from "../https/gets";
import { useEffect, useState } from "react"
import CardMovie from "./card-movie";
import "./main.scss"
import ResultNotFound from "../notFoundsPages/result-notFound";
import LoaderGeneral from "../Loaders/loader-general-content";

const MoviesView = ({name, type})=>{

    const [video, setVideo] = useState('');
    const [short, setShort] = useState({i:0,f:4})
    const [page, setPage] = useState(1);
    const [response, setResponse] = useState(true);

    const validate = (e)=>{if(e==='True'){return true} else {return false}}
    

    useEffect(
        ()=>{
            try {
                const movies = async ()=>{
                    const url = `http://www.omdbapi.com/?apikey=88b0e0ac&s=${name}&page=${page}&t=${type}`;
                    const ac = await GetAxios(url);
                    switch(validate(ac.data.Response)){
                        case true:
                            setResponse(true)
                            setVideo(ac.data.Search)
                            break
                        default:
                            setResponse(false);
                    }
                }
                movies()
             } catch (error) {
                 console.log(error);
             }
        }, [name,type,page]
    )

    const addView = ()=>{
        if(video) {
            if(short.f < video.length) {
                setShort({i:short.i+1,f:short.f+1})
            }
            else {
                setPage(page+1);
                setShort({i:0,f:4});
            }
        }
    }

    const addViewBack = ()=>{
        if(video) {
            if(short.i > 0) {
                setShort({i:short.i-1,f:short.f-1})
            }
            else if (page !== 1) {
                setPage(page-1);
            }

            else {
                setPage(page+0);
                setShort({i:0,f:4});
            }
        }
    }


    const onSearch = video?video.slice(short.i,short.f).map(
        v=>{
            return <CardMovie src={v.Poster} title={v.Title} subtitle={v.Year} key={Math.random()} ></CardMovie>
        }
    ):<LoaderGeneral/>

    return (

        <> { response?
            <div className='content-principal'>
                <div className='title-section'>
                    <h2>What movie are you looking for?</h2>
                </div>
                <div className='sub-nav-sticky'>
                </div>
            <div className='results-movies'>
            <div className='folloging-movie'>
                    <button onClick={addViewBack} className='btn-next-img-back'></button>
                </div>
                <div className='grid-movies'>
                    {onSearch}
                </div>
                <div className='folloging-movie'>
                    <button onClick={addView} className='btn-next-img'></button>
                </div>
            </div>
        </div>:<ResultNotFound search={name}/>}
        </>

    )
}

export default MoviesView