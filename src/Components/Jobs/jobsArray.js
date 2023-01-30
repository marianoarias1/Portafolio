import Living from '../Images/jobsImg/Living Photography.png'
import Shift from '../Images/jobsImg/ShiftKeys.png'
import Simpsons from '../Images/jobsImg/simpsons.png'

export const jobs=[
    {
        id:'1',
        name:'Living Photography',
        desc:'Un fake e-commerce realizado en mis inicios solo con HTML&CSS. Diseño responsive usando meadia queries.',
        url:Living,
        link:'https://proyecto-integrador-five.vercel.app/',
    },
    {
        id:'2',
        name:'ShiftKeys',
        desc:'Fake e-commerce realizado con HTML, CSS Y JAVASCRIPT. Manejo de DOM realizado con JS, carrito hecho con JS y uso de Local Storage para persistir los datos del usuario.',
        url:Shift,
        link:'https://shiftkeys.vercel.app/',
    }, 
    {
        id:'3',
        name:'API-Simpons',
        desc:'Una página que utiliza una api para consultar los datos de personajes de los Simpsons, tales como el nombre, la imagen, y una frase aleatoria.',
        url:Simpsons,
        link:'https://api-simpons.vercel.app/',
    }
]