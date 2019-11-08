import React from 'react'
import Noticia from './Noticia'


const ListaNoticias = ({noticias}) => (
    <div className="row">
        {
            // cuando se manda un componente varias veces, debe pasarse un key
            noticias.map(item => (
                <Noticia
                    key = {item.url}
                    noticia = {item}
                />
            ))
        }
    </div>
)

export default ListaNoticias;
