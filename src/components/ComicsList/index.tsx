import { Comic } from "@/models/comic-response";
import { Container, Title } from "./styles";
import { ComicCard } from "../ComicCard";

interface ComicsListProps {
  comics?: Comic[]
}

export function ComicsList({comics}: ComicsListProps):JSX.Element {
  return (
    <Container>
      <Title>Character Comics</Title>
      {comics ? comics.map(comic => (<ComicCard key={comic.id} comic={comic}/>)) : 'This character has no comics'}
    </Container>
  )
}