import React from 'react'

const Noticia = ({noticia}) => {
    const {author, content, description, publishedAt,title,url,urlToImage,source} = noticia;
    
    //cargar imaagen si esta disponible
    const imagen = (urlToImage) ?  
            <div className="card-image">
                <img src={urlToImage} alt={title}></img>
                <span className="card-title">{source.name}</span>
            </div>
            : null;

    return (
    <div className="col s12 m6 l4">
        <div className="card">
           {imagen}
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <a href={url} target="_blank" className="waves-effect waves-light btn" rel="noopener noreferrer">Ver noticia completa</a>
            </div>
        </div>
    </div>
    )
}

export default Noticia;
