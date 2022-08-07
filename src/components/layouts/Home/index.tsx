import { useQuery } from "@tanstack/react-query";
import DogService from "../../../services/DogService";
import Loading from "../../Loading";
import Image from "next/image";
import { Background, Container, FactArea, ImageArea, TitleArea } from "./styles";

const Home = () => {
  const { isLoading: isLoadingFact, data: facts } = useQuery(
    ['listFacts'], DogService.listFacts, { refetchOnWindowFocus: false }
  );
  const { isLoading: isLoadingImage, data: dogImage } = useQuery(
    ['getImage'], DogService.getImage, { refetchOnWindowFocus: false }
  );

  if (isLoadingFact || isLoadingImage) return (
    <Container>
      <Background />
      <TitleArea>
        <h2>DogsFacts</h2>
      </TitleArea>
      <Loading />
    </Container>
  );

  return (
    <Container>
      <Background />
      <TitleArea>
        <h2>DogsFacts</h2>
      </TitleArea>
      <ImageArea>
        <Image
          height={500}
          width={720}
          src={dogImage.message}
          alt='Dog Picture'
          quality={100}
          unoptimized
          style={{ userSelect: 'none' }}
        />
      </ImageArea>
      <FactArea>
        <span>{facts.facts[0]}</span>
      </FactArea>
    </Container>
  )
}

export default Home
