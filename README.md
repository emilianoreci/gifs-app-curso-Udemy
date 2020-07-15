map is not a function !!
revizar que el nuevo state sea un array

const [categories, setCategories] = useState(["goku", "dragk", "gay"]);

  const handleAdd = () => {
      //notese que se ponen los corchetes en el setCategories.
      //** El boludo se los comio **
    setCategories([...categories, "dd"]);
    Es lo mismo pero no necesito pasarle la props categories    
    setCategories((cate) => [...cate, inputValue]);

    console.log(categories);
  };

Pasando un callback a funcion del useState
/***************************************************
 * SETCATEGORIES((CATE) => [...CATE, INPUTVALUE]); *
 ***************************************************/


/**************
 * IMPORTANTE *
 **************/

Si no se pone nada en el useState, tiene undefined y hace que el componente se renderice incontrolablemente, por lo que hay q ponerle siempre un valor.
useState() //undefined  ---> MAL
BIEN:
  useState('')
  useState(null)
  useState([])

/************************
 * DESTRUCTURING EN MAP *
 ************************/
SIN DESTRUCTURING:
  {
    images.map((each) => (<li key={each.id}>{each.title}</li>))
  }

CON DESTRUCTURING:
  {
    images.map(({ id, title }) => (<li key={id}>{title}</li>))
  }

/**************************************
 * OPERADOR REST PARA PASAR ARGUMENTO *
 **************************************/

Gracias al rest, permite que le pase cada una de las propiedades como valores independiente. ej el id, title y la url.

  { images.map((eachElement) => (
            <GifGridItem key={eachElement.id} {...eachElement}></GifGridItem>
              //En vez de usar directamente los props.
              //<GifGridItem key={eachElement.id} img={eachElement.img}></GifGridItem> 
          ))
  }


#EncodeURI()
quita caracteres especiales para insertar en una url.


/***************
 * ANIMACIONES *
 ***************/
 animated css usado por cdn


/********
 * TEST *
 ********/

/************************************************************
 * ACCEDER A ATRIBUTO DE UNA ETIQUETA HTML EN FORMATO STRING *
 ************************************************************/
  const img = wrapper.find("img");
    console.log(img.html());
    //<img src="https://localhost/algo" alt="La musica de hoy"/>

Y EN FORMATO OBJETO:
  const img = wrapper.find("img");
    console.log(img.props());
    // {src="https://localhost/algo" alt="La musica de hoy"}

     console.log(img.props().src);
    // src="https://localhost/algo" 


/****************************************************************************************
 * AL DIA DE LA FECHA NO HAY UNA FORMA DE TESTEAR LOS USESTATE, YA QUE NO TIENEN UN ID. *
 ****************************************************************************************/

video 99