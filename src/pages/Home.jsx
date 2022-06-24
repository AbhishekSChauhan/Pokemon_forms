import React, { useState } from 'react'
import Form from '../components/Form/Form'
import Heading from '../components/Heading/Heading'
import Pack from '../components/Pack/Pack'
import Region from '../components/Region/Region'

const Home = () => {
  const [name, setName] = useState('')
  const [codeName, setCodeName] = useState('')
  const [region, setRegion] = useState('')
  const [distance, setDistance] = useState(1)
  const [poke, setPoke] = useState('')

  return (
    <div className='bg-gray-400 flex flex-col p-1 mx-auto'>
        <Heading />
        <Form 
          name={name} setName={setName} 
          codeName={codeName} setCodeName={setCodeName} 
        />
        <Region 
          poke={poke} setPoke={setPoke}
          region={region} setRegion={setRegion}
          distance={distance} setDistance={setDistance}
        />
        <Pack 
          name={name}
          codeName={codeName}
          region={region}
          distance={distance}
          poke={poke}
        />
    </div>
  )
}

export default Home