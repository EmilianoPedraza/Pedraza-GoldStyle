# GoldStyle-Dates

`GoldStyle es una SPA que utiliza la libreria de React JS, SASS para pre-procesar codigo CSS, no incorpora librerias de estilo ni framewoorks, más que los metodos de la API rest de FireBase que contiene la información de productos y ordentes del proyecto. Estamos hablando de la primera versión del proyecto.`

## Componentes (rootsrccomponents)

```
Dato Funcionalidad de los componentes explicada
más adelante
```

- CartContainer
  - _CartContainer.js_
- Contacto
  - _Contacto.js_
- FormUser
  - _FormUser.js_
- Homee
  - _Home.js_
- NavBarContainer
  - CartWidgetContainer
    - _CartWidgetContainer.js_
  - _NavBarContainer.js_
- Productos
  - ItemCount
    - _ItemCount.js_
  - ItemDetail
    - _ItemDetail.js_
  - ItemList
    - _ItemList.js_
  - ItemList
    - _ItemList.js_
  - ItemListContainer
    - _ItemListContainer.js_

## Contexto

### CartContext

`Para facilitar el flujo de datos entre los componentes ItemDetail y CartContainer se declara un contexto para que estos ultimos dispongan de información actualizada y funciones para que los mismos usados por otros componentes(ItemDetail, CartContainer) puedan utilizar y actualizar. CartContext.js dispone de un custom provider llamado CartProvider para facilitar su uso, la estructura del contexto seria la siguiente...`

- CartContext.js
  - CartContext El contexto
  - CartProvider Componente Proveedor

#### CartProvider funciona en base a lo siguiente

##### \_Hooks usados en CartProvider

- useState

  - listProdCar `Array de objetos(listado de productos)`
  - totales `inicia vacio, pero mediante la ejecución de useEffect dentro de CartProvider procede a contener un objeto que contiene 2 propiedades con valor de tipo Number, una que funciona como contador de la cantidad de elementos de ListProdCar(listado de productos), esta propiedad recibe el nombre de cantidadItems y la otra propiedad acumula los valores númericos de la propiedad totalPrices de cada elemento(que son objetos) de ListProdCar.`

- useEffect`Usa como dependencia a listProdCar(array de objetos) para ejecutar un codigo cada que este ultimo reciba una actualización. Dicho codigo consiste en recorrer el array(mediante el metodo forEach) y acumular los valores de las propiedades de cada elemento(totalPrice y cantidad) en un nuevo objeto "newTotal" instianciado dentro del ambito de useEffect cuyas propiedades funcionan como acumuladores. Al final de la ejecución agrega a setTotales(metodo declarado para actualizar la variable de estado Totales) el objeto "newTotal" con las propiedades: totalPrices(acumulador del valor de la propiedad de cada elemento de listProdCar "totalPrice") y cantidadItems(acumulador del valor de la propiedad "cantidad" de cada elemento de listProdCar).`

##### \_Functions de CartProvider

- addItem()`Creada para agregar elementos(de tipo obj) a ListProdCar. Recibe dos paramentros cant(un valor númerico) y item(un objeto), este conciste en la delcaración de una variable que funciona como contador(con) y una constante newArray que funciona como copia de listProdCar y posteriormente una estructura condicional.`

  - Primer if En pocas palabras si listProdCar.length 0, es decir no está vacio, valida si existe un elemento que comparta el mismo valor de su propiedad e.id (siendo e un elemento de newArray) con la propiedad item.id(sientdo item un parametro recibido), en caso de que sea el caso, actualiza dos de las propiedades del objeto que pertenece a newArray, e.cantidad = cant y e.totalPrice = e.price cant, en caso contrario la variable contadora suma 1.
  - segundo condicional if se ejecuta si el contador(con) es igual a listProdCar.lenth, de esta forma la condición resulta verdadera solo si listProdCar está vacio o si en el primer condicional no encontro coincidencia con alguno de sus elementos del array copia(newArray) con respecto al parametro item, esto se debe a que las propiedades cantidad y totalPrice inicialmente no existen en el parametro item que se intentan agregar a listProdCar, por lo tanto, este segundo condicional if es el que se encarga de agregar las propiedades en una nueva constante itemCar declarada dentro del condicional y cuyo valor es igual a las propiedades de item con dos propiedades adicionales agregadas que son cantidad = cant y totalPrice = cant item.price, al final se ejecuta la siguiente linea de codigo setListProdCar([...newArray, ...itemCar])
  - else solo ejecuta setListProdCar(newArray), ya que se ejecuta solo en caso del que segundo condicional no lo haga significa que si se encontro coincidencia dentro del primer if, por lo tanto el array copia newArray recibio una actualización dentro de las propiedades de uno de sus elementos, y ahora se remplazara el array listProdCar original por el array copia cuyo contenido está actualizado.

  `De esta forma se puede ver como los productos se muestran en carrito con cada item mostrando la cantidad de el mismo que fue agregado más una propiedad de precio total que equivale al precio del producto la cantidad del mismo que fueron agregados`

- removeItem()`Encargado de eliminar elementos(productos) de listProdCar, está funcion recibe como parametro un string que correspondería a un id de un producto, la funcion realiza un filtrado de elementos(osea productos) de listProdCar mediante el metodo filter(), todos los elementos del array listProdCar cuya propiedad id sea distinta al parametro ingresado a la función pasan a formar parte de una constante arrowDifrnt en un nuevo array y este ultimo remplazara al array original de listProdCar.`
- clear()`Para eliminar todo el array de ListProdCar(osea eliminar productos) solo remplaza el mismo por un array vacio.`

## react-router-dom y la navegación entre los componentes del proyecto

### App

`App.js es padre de todos los componentes de todos los componentes, hay componentes funcionales que son padres de otros, pero en lo siguiente solo se mostrara aquellos que son importados a App.js`
import NavBarContaier from .componentsNavBarContainerNavBarContainer;
import ItemListContainer from .componentsProductosItemListContainerItemListContainer;
import Homee from .componentsHomeeHomee;
import Contacto from .componentsContactoContacto;
import ItemDetail from .componentsProductosItemDetailItemDetail;
import CartContainer from .componentsCartContainerCartContainer;
`Tambíen es necesario destacar el uso de react-router-dom especificamente los metodos BrowserRouter, Routes, Route, siendo las rutas establecidas las siguientes`
NavBarContaier (NavBarConteiner se encuentra fuera de routes dado que es la barra de navegación)
Routes
Route path= element={Homee }
Route path=contacto element={Contacto }
Route path=productos element={ItemListContainer }
Route path=productoscategoryId element={ItemListContainer }
Route path=productoscategoryIdid element={ItemDetail }
Route path=carrito element={CartContainer}
Routes

`BrowserRouter envuelve [div className=App] solo estando dentro de [CartProvider](componente proveedor del contexto). `

## componentes

### Componentes de Presentación

`Dado que son componentes de presentación no es necesario dar una explicación profunda en como funcionan y su uso, basta con decir que dichos componentes son usados como secciones de contacto e inicio ya que a simple vista resulta intuitivo comprenderlos si se accede a los mismos en su respectiva carpeta dentro del proyecto.`

- #### ContactoContacto.js
- #### HomeeHomee.js

### Functional Components

- #### ItemListContainer
  `Es el componente encargado de realizar peticion de la data del servidor(firebased),obteniendo objetos como resultado, muestra una barra de navegación también, que es para realizar un filtrado de productos por categoria mediante NavLink y useParams los params que se pasan a travez de estos NavLink corresponden a una propiedad categoria de los objetos que obtenemos a travez de la petición, siendo cada objeto un producto, para hacer breve la explicación se muestra a continuación las dependencias. Un dato importante es que dentro del proyecto se puede ver una variable de estado que se llama db la misma contiene los datos de la petición. Este componente retorna una barra de navegación que usa NavLink en sus opciónes para que el usuario pueda realizar el fintrado de productos por categoria y utiliza el metodo map para recorrer la variable de estado con la data de los componentes, por cada vuelta de map se llama a otro componente de la sigueinte forma-- ItemList key={- + item.id} prod={item} siendo item un elemento del array que contiene db(osea un producto). El filtrado mediante params se realiza en la petición, ya que la petición se realiza dentro de un useEffect cuya dependencia es categoryId que toma el valor de los params obtenidos de los NavLink en la barra de navegación por categoria que retorna nuestro componente en cuestión, por ende por cada selección nuestro componente se vuelve a reenderizar y realiza nuevamente la petición pero filtrando los productos.`
  import { useEffect, useState } from react;
  import { useParams, NavLink } from react-router-dom;
  import ItemList from ..ItemListItemList;
  import { where, query, collection, getDocs } from firebasefirestore;
  import { db } from ......utilsfireBase;
- #### ItemList

  `Recibe como parametro un item que corresponde a un producto, se declara una variable de estado que inicia con el valor tipo string cargando, luego mediante el uso de promesas una validación de la prop recibida(correspondiente a un objeto que representa un producto) y dentro de un useEffect que se ejecuta antes de que se reenderize el componente, se pueden ejecutar dos cosas dentro del mismo, si la promesa había resultado un resolve quiere decir que el producto es un objeto que existe y se procede a pasar el mismo a la variable de estado, si la promesa retorna un rejected la variable de estado recibira como valor una variable boolean false. Ahora quda explicar dos funciones que contiene el componente en cuestion, la primera es mostrar(), mostrar rebcibe un parametro boolean, si es true, retorna codigo JSX con la estructura que tendra el producto a la hora de ser mostrado en el navegador, usando las propiedades del mismo para ello(estaría en la variable de estado el producto dependiendo de la validación del inicio), si se paso como parametro un false retorna la variable de estado product así sin más. por que recordemos que la misma inicia con el valor cargando, la segunda función es rendering() la misma ejecuta la siguiente linea de codigo`

  ```
  return product === cargando  mostrar(false)  mostrar(true);
  ```

  `realmente es por una cuestion de simplificación que fue creada y es así dado que luego en el return de nuestro componente, se ejecuta lo siguiente`
  return {product && rendering()};
  `Que significa esto recordemos que en si la validación mediante el uso de una promesa que se realizo al objeto que recibe como prop nuestro componente resultaba en un rejected y eso significaba que la variable de estado terminaba con el valor de false, por lo tanto, si surge algun problema no se reenderiza nada, en caso contrario va con rendering() para que mientras carga el producto salga el texto cargando en tanto termine de crearse, ya que si la promesa resulta correcta tiene que cambiar el valor de la variable de estado hasta que suceda seguira teniendo el valor cargando.Por ultimo queda mencionar que dentro de la función mostrar() dentro de lo que se retorna cuando el parametro que recibe es true tiene el siguiente link de react-router-dom para reenderizar otro componente si se hace click en el.`

  ```
        Link to={`productos${product.categoria}${product.id}`}
          button className=--btnDetailsver más detallesbutton
        Link
  ```

  `Corresponde al componente itemDetail(que si se fija en la explicación de App.js se puede ver como element de un route).`
  `Dependencias de este componente funcional`
  import { useEffect, useState } from react;
  import { Link } from react-router-dom;

- #### ItemDetail

  `El componente ItemDetail cumple la función de mostrar más detalles del producto en el sitio, este componente cabe aclarar que al inicio de está sección de documentos en la explicación de App.js fue mostrado dentro de un route de la siguiente forma`

  ```
      Route path=productoscategoryIdid element={ItemDetail }
  ```

  `Y no menos importante recuerde que tambíen se menciono en que fue utilizado en itemList especificamente fue utilizado dentro de lo que el mismo termina por reenderizar un producto cuando el mismo no viene con ningun inconveniente de la siguiente forma...`

  ```
      Link to={`productos${product.categoria}${product.id}`}
          button className=--btnDetailsver más detallesbutton
      Link
  ```

  `Habiendo dejado en claro lo anterior se puede ver como cuando el usuario hace click en el ver más detalles está pasando params y uno corresponde a un id, mismo que usa nuestro componente en cuestion para realizar una petición al servidor usando como id el id de useParams y posteriormente realizar un reenderizado del mismo.`
  `Este componente tambíen se encarga de utilizar otro, estamos hablando de ItemCount, al cual se le envía como prop una función que ItemDetail(componente del cual estamos hablando) utiliza invocandola de nuestro proveedor de contexto, estamos hablando de ddItem() que se encarga de agregar productos al carrito. La razón para mejor entendimiento sera explicada junto con la explicación del componente ItemCount`

  `Consta de las siguientes dependencias para su funcionamiento`

  import { useParams } from react-router-dom;
  import ItemCount from ..ItemCountItemCount;
  import { useState, useContext, useEffect } from react;
  import { CartContext } from ......contextCartContext;
  import { doc, getDoc } from firebasefirestore;
  import { db } from ......utilsfireBase;

- #### ItemCount
  `Este componente contiene las siguientes dependencias para su funcionamiento`
  ```
  import { useState } from react;
  ```
  `Y es la unica, dado que el mismo cumple la función de realizar un conteo mediante eventos, almacenar dicha cantidad en un estado y posteriormente utiliza una función que recibe como prop, para enviar a la misma la variable de estado que lleva la cuenta, y en terminos simples si nos fijamos en el componente padre, osea el que se explico anteriormente estamos hablando de una función que provee el contexto.`
- #### NavbarContainer

  `Es la barra de navegación del sitio para ir a cada no recibe ninguna prop, utiliza NavLink en conjunto con un componente que será explicado posteriormente en la documentación, tiene como dependencias imagenes vectoriales que son las siguientes`
  import bag from ....assetsicosbag.svg
  import contact from ....assetsicoscontact.svg
  import home from ....assetsicoshome.svg
  import car from ....assetsicoscar.svg
  `Las mismas son utilizadas para enviar como props a un componente hijo que reenderiza cada opción de la barra de navegación de la siguiente forma...`

  ```
  NavLink to= className={({isActive})=isActive  --navOpY  --navOpN}
          CartWidgetContaier rutImg={home} descriptionImg=home
              h3Inicioh3
          CartWidgetContaier
  NavLink
  ```

  `A su vez este componente tiene las siguientes dependencias`
  import CartWidgetContaier from .CartWidgetContainerCartWidgetContainer;
  import {NavLink} from 'react-router-dom'
  import { useContext } from react
  import {CartContext} from ....contextCartContext
  `Y como vemos utiliza useContext para poder hacer lo siguiente con un estado que ya mencionamos totales que provee nuestro contexto CartContext()`

  ```
   CartWidgetContaier rutImg={car} descriptionImg=carrito
          {totales.cantidadItems  0  h3{totales.cantidadItems}h3  h3Vacioh3}
  CartWidgetContaier
  ```

  `Como se puede ver es para que se muestre la cantidad de items que se agregaron a nuestro carrito.`

- #### CartWidgetContainer(componente hijo de NavBarContainer)

  `No cuenta con dependencias dado que es de presentación, pero es inclido recien en este punto dado que solo se usa en el componente que se explico anteriormente y en este punto quedaría más claro.Es para mostrar una imagen con una descripción y children que se reciben como prop y lo hace de la siguiente forma...`

  ```
   div className=--cardWidgetC
      img src={rutImg} alt={descriptionImg}
      {children}
  div
  ```

  - #### CartContainer

    `Dependencias de CartContainer:`
    import { useEffect } from "react";
    import { useState } from "react";
    import { useContext } from "react";
    import { CartContext } from "../../context/CartContext";
    import trashDelete from "../../assets/icos/trashDelete.svg";
    import FormUser from "../FormUser/FormUser"

    `CartContainer es un componente cuya función principal es la de mostrar la sección de carrito.Se basa le saca provecho al contexto CartContext utilizando la totalidad de las funciones e información del proveedor de este ultimo. El componente en cuestión tambien utiliza dos estados`

    ```
    const [msj, setMsj] = useState();
    const [desOn, setDesOn] = useState(false);
    ```

    `El primero recibe su valor mediante un useEffect cuyas dependencia relevante es listProdCar de CartContext. como msj, si listProdCar(array de productos correspondiente a elementos Obj correspondientes a productos agregados al carrito) es mayor a cero, quiere decir que se agregaron productos, por lo tanto al estado msj mediante setMsj se le pasa como valor codigo JSX que fundamentalmente tiene 2 elementos de tipo button con eventos para "vaciar el carrito"(que utiliza la función clear del componente proveedor de cartContext) y "Finalizar compra" cuyo evento ejecuta la función desplegar(), si ListProdCar`
    `La variable de estado "desOn" se utliza para realizar un reenderizado condicional del componente, estrictamente hablando para decirle al mismo que el usuario quiere finalizar la compra, por tanto nuestro componente CartContainer al final del codigo JSX que retorna, analiza mediante un condicional la variable de estado, si resulta true, el mismo se encarga de reenderizar un componente hijo FormUser(formulario de datos) y ya que estamos de paso se le pasa a msj el valor uno en caso contrario, por que? porque tambíen existe otro condicional que reenderiza nuestro componente,cuyo retorno es un mensaje "No se encuentran productos en el carrito".`

    - desplegar():
      `Cambia el valor por defecto que contiene la variable de estado "desOn" que inicialmente comienza valiendo false.`

  - #### FormUser
    `FormUser es el componente encargado de mostrarle al usuario un formulario para que llene al finalizar una compra. Como funciona FormUser? FormUser primero recibe una prop correspondiente a una función de estado, ya que FormUser es un componente hijo de CartContainer estamos hablando de una función de variable de estado declarada dentro de este ultimo, por otro lado FormUser usa el contexto CartContext, inlcuyendo funciones de su proveedor como tambíen hooks del mismo. Tambíen es importante aclarar que nuestro componente en cuenstion usa hooks de estado, especificamente hablando el siguiente...`
    ```
      const [codId, setCodId] = useState("");
    ```
    `Tambíen cuenta con la funcíon form() que se encarga de retornar el formulario, se hizo así para facilitar un poco la comprensión de FormUser nada más. El formulario retornado cuando se presiona el boton de enviar activa la función dates() y en caso de presionar el boton de calncelar envia el parametro de valor boleano false a la prop que recibe FormUser correspondiente a la variable una función para cambiar estado, ya FormUser es un componente hijo de CartContainer dicha función de este ultimo le indica al mismo cuando no reenderizar FormUser. dates() es una función que aparte de prevenir el evento por default del formulario, pasa los datos ingresados del mismo en propiedades de un objeto declarado dentro de su ambito, dentro de una propiedad el array listProdCar, la fecha y hora mediante new Date() y el precio total mediante "totales.totalPrices". Para que al final de la función se suba nuestro objeto en cuestion a una coleción orders y le pase a nuestro hook de estado "codId" el id de la colección. Por otro lado cuenta con un useEffect cuya dependencia relevante es "codId", ya que si se cumple codId !== "" significa que contiene el id de una orden por lo tanto si se finalizo una compra y dado el caso se procede a ejecutar un setTimeut() dentro de una promesa, cuando pase el tiempo declarado dentro de setTimeut() la promesa pasa como resultado un false, en el siguiente paso se ejecuta un then() que ejecuta close()->(prop que recibe FormUser) para finalizr el reenderizado del formulario y luego en otro then ejecuta clear() para eliminar los productos agregados al carrito siendo clear() una función del proveedor de nuestro contexto CartContext.`
    `Algo que tambíen se puede ver es que el componente FormUser retorna un elemento div y dentro otro div hijo, es así por cuestiones de diseño, el elemento div padre tiene un evento onClick cuyo proposito es que si se hace click en el mismo se ejecuta la prop recibida como children y se le pasa el valor false a CartContainer para que el componente FormUser se cierre, dentro del div hijo se tiene un evento para prevenir la propagación de eventos de su contenido que refiere al valor retornado por la función form() que corresponde al formulario o un mensaje con el id de la colección donde fue a parar el pedidom, Como se logra esto? es sencillo, si nuestra variable de estado codId !== "" significa aún no se envio el formulario ya que no se genero nigun id de una colleción correspondiente, por lo tanto cuando se llena el formulario y se envia el pedido con todos los datos, codId cambiaria su valor y entoces se vuelve a renderizar FormUser pero está vez mostrando el mensaje en cuestion. En el componente se utilizan las siguientes dependencias`
    import { useContext, useEffect, useState } from "react";
    import { addDoc, collection } from "firebase/firestore";
    import { db } from "../../utils/fireBase";
    import { CartContext } from "../../context/CartContext";


## Para ver la funcionalidad del proyecto ⬇⬇

### versión base(opcional mirar, es una versión vieja y desactualizada)

https://drive.google.com/file/d/1Di1FNocVbWfbYWjTMXwJDzTuzCBj1eVA/view?usp=sharing

### Versión > optimizacion-3(version actualizada) ⭐

https://drive.google.com/file/d/1I6a0dqDTsfzPgTzMxmCUMexoGUuCeueD/view?usp=sharing

## Diagrama con la travesía del usuario ⬇⬇

https://drive.google.com/file/d/1I5sK3mYnSzNbTQcLL_DnFJ91d61fRHlW/view?usp=sharing

### Puedes probar el sitio directamente en el siguiente enlace a modo de prueba ⬇⬇
https://cool-rugelach-1a052d.netlify.app/
