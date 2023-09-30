import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import Cards from './components/Cards'

const cartas = [{title: "Mi carte", subtitle: "Subtitulo de mi carta", text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nulla quidem perspiciatis inventore? Non nulla mollitia, nihil accusamus culpa sunt itaque tenetur et omnis nesciunt repudiandae rerum ipsum dignissimos laudantium!'},
{key: '11s', title: "Mi carte", subtitle: "Subtitulo de mi carta", text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nulla quidem perspiciatis inventore? Non nulla mollitia, nihil accusamus culpa sunt itaque tenetur et omnis nesciunt repudiandae rerum ipsum dignissimos laudantium!'},
{key: '10s', title: "Mi carte", subtitle: "Subtitulo de mi carta", text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nulla quidem perspiciatis inventore? Non nulla mollitia, nihil accusamus culpa sunt itaque tenetur et omnis nesciunt repudiandae rerum ipsum dignissimos laudantium!'},
{key: '19s', title: "Mi carte", subtitle: "Subtitulo de mi carta", text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nulla quidem perspiciatis inventore? Non nulla mollitia, nihil accusamus culpa sunt itaque tenetur et omnis nesciunt repudiandae rerum ipsum dignissimos laudantium!'},
{key: '18s', title: "Mi carte", subtitle: "Subtitulo de mi carta", text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nulla quidem perspiciatis inventore? Non nulla mollitia, nihil accusamus culpa sunt itaque tenetur et omnis nesciunt repudiandae rerum ipsum dignissimos laudantium!'},
{key: '17s', title: "Mi carte", subtitle: "Subtitulo de mi carta", text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nulla quidem perspiciatis inventore? Non nulla mollitia, nihil accusamus culpa sunt itaque tenetur et omnis nesciunt repudiandae rerum ipsum dignissimos laudantium!'},
{key: '16s', title: "Mi carte", subtitle: "Subtitulo de mi carta", text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nulla quidem perspiciatis inventore? Non nulla mollitia, nihil accusamus culpa sunt itaque tenetur et omnis nesciunt repudiandae rerum ipsum dignissimos laudantium!'},
{key: '15s', title: "Mi carte", subtitle: "Subtitulo de mi carta", text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nulla quidem perspiciatis inventore? Non nulla mollitia, nihil accusamus culpa sunt itaque tenetur et omnis nesciunt repudiandae rerum ipsum dignissimos laudantium!'}
]

function App() {

  useEffect(() => {
    console.log('Me ejecute')
    //pedir los datos de las cartas
    if(!cartas) setcartas([resulatadDeLaPeticion])

  }, [textBuscador])
  
  return (
    <>
      <h1>Vite + React</h1>
      <div className='flex-box'>
        <Cards title={'Mis cartas'} cartasInfo={cartas}/>
      </div>
    </>
  )
}

export default App
