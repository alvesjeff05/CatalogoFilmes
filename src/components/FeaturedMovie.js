import React from 'react';
import './FeaturedMovie.css';

export default ({item}) => {
    
    let firstDate = new Date(item.first_air_date);
    let generos = [];
    for(let i in item.genres){
        generos.push(item.genres[i].name);
    }
    

    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--name'>{item.original_name}</div>
                    <div className='featured--info'>
                        <div className='featured--pontos'>{item.vote_average} pontos</div>
                        <div className='featured--ano'>{firstDate.getFullYear}</div>
                        <div className='featured--temporadas'>{item.number_of_seasons} temporada{item.numer_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className='featured--descricao'>{item.overview}</div>
                    <div className='buttons'>
                        <a href={`/watch/${item.id}`} className='assistir'>Assitir</a>
                        <a href={`/list/add/${item.id}`} className='lista'>+ Minha Lista</a>
                    </div>
                    <div className='featured--generos'><strong>Gêneros: </strong>{generos.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}