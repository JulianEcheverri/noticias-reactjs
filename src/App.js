import React, {Component, Fragment} from 'react';
import Header from './components/Header'

//pagina para la api
// https://newsapi.org/
//e08a406edb954b47b53ef91b609850ec
//https://newsapi.org/v2/top-headlines?country=co&category=sports&apiKey=e08a406edb954b47b53ef91b609850ec

class App extends Component {
  state = {
    noticias: []
  }


  //es recomendable consumir la api en el metodo de ciclo de vida componentDidMount
  // usamos async para realizar la tarea asincrona y no tener que realziar promises en el momento de cargar la pagina
  componentDidMount() {
    this.consultarNoticias();
  }


  //funcion para consumir la api de forma asincrona y asignar la noticia al state del component. Llamada en el metodo componentDidMount: cuando carga la pagina
  consultarNoticias = async () =>{
    const urlApi = `https://newsapi.org/v2/top-headlines?country=co&category=sports&apiKey=e08a406edb954b47b53ef91b609850ec`;
    
    //La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas. También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
    // Este tipo de funcionalidad se conseguía previamente haciendo uso de XMLHttpRequest. Fetch proporciona una mejor alternativa que puede ser empleada fácilmente por otras tecnologías como Service Workers. Fetch también aporta un único lugar lógico en el que definir otros conceptos relacionados con HTTP como CORS y extensiones para HTTP.
    // La especificación fetch difiere de JQuery.ajax() en dos formas principales:
    // El objeto Promise devuelto desde fetch() no será rechazado con un estado de error HTTP incluso si la respuesta es un error HTTP 404 o 500. En cambio, este se resolverá normalmente (con un estado ok configurado a false), y  este solo sera rechazado ante un fallo de red o si algo impidió completar la solicitud.
    // Por defecto, fetch no enviará ni recibirá cookies del servidor, resultando en peticiones no autenticadas si el sitio permite mantentener una sesión de usuario (para mandar cookies, credentials de la opción init deberan ser configuradas). Desde el 25 de agosto de 2017. La especificación cambió la politica por defecto de las credenciales a same-origin. Firefox cambió desde la versión 61.0b13.
    // Una petición básica de fetch es realmente simple de realizar. Eche un vistazo al siguente código:
    // https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch
    const respuesta = await fetch(urlApi);

    const noticias = await respuesta.json();
    this.setState({
      noticias: noticias.articles
    })
  }

  render() {
    return (
      <Fragment>
        <Header
          titulo = 'Noticias React API'
        />
        <div className="container white contenedor-noticias">

        </div>
      </Fragment>
    )
  }
}

export default App