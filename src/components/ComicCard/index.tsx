import { Comic } from "@/models/comic-response";
import { Body, Container, Name, Thumb } from "./styles";

interface ComicCardProps {
  comic: Comic
}

export function ComicCard({comic}:ComicCardProps): JSX.Element {
  const {title, thumbnail} = comic;
  return (
    <Container>
      <Thumb src={`${thumbnail?.path}/portrait_fantastic.${thumbnail?.extension}`} alt={`${title} thumb`} />
      <Body>
        <Name>{title}</Name>
      </Body>
    </Container>
  )
}