import React, {useEffect, useState} from 'react';
import './App.css';
import Tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie.js';
import Header from './components/Header.js'

export default () => {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState([null]);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(()=>{
        const loadAll = async() => {
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            let originals = list.filter(i=>i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
        }

        loadAll();
    }, []);

    useEffect(()=>{
        const scrollListiner = () => {
            if(window.scrollY > 10){
                setBlackHeader(true);                
            } else{
                setBlackHeader(false);
            }
        }
        window.addEventListener('scroll', scrollListiner);
        return() => {
            window.removeEventListener('scroll', scrollListiner);
        }
    })

    return(
        <div className='page'>
            
            <Header black={blackHeader}/>

            {featuredData &&
                <FeaturedMovie item={featuredData}/>
            }


            <section className='lists'>
                {movieList.map((item, key)=>(
                    <MovieRow key={key} title={item.title} items={item.items}/>
                ))}
            </section>

            <footer>
                Direitos de imagem para Netflix
                Dados pegos do site Themoviedb.org
            </footer>
            
            {movieList.length <= 0&&
                <div className='carregando'>
                    <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='Carregando'></img>
                </div>
            }
        </div>
    )
}