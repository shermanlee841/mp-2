import styled from 'styled-components'
import type { Person } from './App.tsx'

type PeopleProps = {
    data: Person[]
}

const PeopleContainer = styled.div`
    width: 80vw;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const PersonCard = styled.div`
    flex: 1 1 250px;
    padding: 20px;
    border: 2px solid black;
    border-radius: 10px;
`

const PersonName = styled.h2`
    margin-top: 0;
`
function People({ data }: PeopleProps) {
    return (
        <PeopleContainer>
            {data.map((person) => (
                <PersonCard key = {person.name}>
                    <PersonName>{person.name}</PersonName>
                    <p>Height: {person.height}</p>
                    <p>Mass: {person.mass}</p>
                    <p>Hair Color: {person.hair_color}</p>
                    <p>Eye Color: {person.eye_color}</p>
                    <p>Birth Year: {person.birth_year}</p>
                    <p>Gender: {person.gender}</p>
                </PersonCard>
            ))}
        </PeopleContainer>
    )
}

export default People