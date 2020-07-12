map is not a function !!
revizar que el nuevo state sea un array

const [categories, setcategories] = useState(["goku", "dragk", "gay"]);

  const handleAdd = () => {
      //notese que se ponen los corchetes.
      //** El boludo se los comio **
    setcategories([...categories, "dd"]);
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

  {images.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))
  }

/**************************************
 * OPERADOR REST PARA PASAR ARGUMENTO *
 **************************************/

Gracias al rest, permite que le pase cada una de las propiedades como valores independiente. ej el id, title y la url.

  { images.map((eachElement) => (
            <GifGridItem key={eachElement.id} {...eachElement}></GifGridItem>
              //En vez de usar directamente los props.
              //<GifGridItem key={eachElement.id} img={eachElement}></GifGridItem> 
          ))
  }


#Encodeuri()
quita caracteres especiales para insertar en una url.


/***************
 * ANIMACIONES *
 ***************/
 animated css usado por cdn


video 77