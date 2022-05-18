


const consultarPokemon = (id,number) => 
{
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data);
      pintarPokemon(data,number)
    })

    .catch((error) => {
      console.log(error);
    });

   
};

const giftApi = ()=>{
  fetch('https://api.giphy.com/v1/gifs/random?api_key=JFxM4euCNTAHbogxeVRFErjY7WPPjv4r&goku')
  .then((res=>{
    return res.json();
  }))
  .then((data)=> {
     pintarGift(data)
   
    
  })
}

giftApi();



const btnSeleccionar = () => 
{
  let primerPokemon = Math.round(Math.random() * 150);
  let segundoPokemon = Math.round(Math.random() * 150);
  consultarPokemon(primerPokemon,1);
  consultarPokemon(segundoPokemon,2);
};

btnSeleccionar()

const lista = document.getElementById("listarpokemon")
let dataPokemon='';


const pintarPokemon = (data, id) =>
{
  
  let item = lista.querySelector(`#pok-${id}`);

  item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);

  item.getElementsByTagName("p")[0].innerHTML = data.name;

  let pokeUno=''
    for(let i=0;i<data.abilities.length;i++)
    {
      pokeUno+=`<li>${data.abilities[i].ability.name}</li>`
      //console.log(pokeuno)
    }
    item.getElementsByTagName(`ol`)[0].innerHTML=pokeUno


}
const pintarGift = (data)=>{
  //slet item = lista.querySelector(`#pok-1`);
  let item2 = lista.querySelector(`#pok-2`);
  //item.getElementsByTagName("img")[1].setAttribute('src', data.data.images.downsized.url);
  item2.getElementsByTagName("img")[1].setAttribute('src', data.data.images.downsized.url);
}



// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname2

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1