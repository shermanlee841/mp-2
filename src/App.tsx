import { useEffect, useState } from 'react'
import People from './People'
import styled from 'styled-components'

export type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App() {
    const [data, setData] = useState<Person[]>([])

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch('https://swapi.dev/api/people')
            const {results}: { results: Person[] } = await rawData.json()
            setData(results)
        }

        fetchData()
            .then(() => console.log('Data fetched successfully'))
            .catch((e: Error) => console.log('There was an error: ' + e))
    }, [data.length])

    return (
        <ParentDiv>
            <People data={data}/>
        </ParentDiv>
    )
}