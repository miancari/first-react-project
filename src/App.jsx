import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/card'
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
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <div className='flex-box'>
      {cartas.map((carta) => <Card key={carta.key} title={carta.title} subtitle={carta.subtitle} text={carta.text}/>)}
      </div>
    </>
  )
}

export default App
