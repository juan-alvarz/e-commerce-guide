import ContainerGames from "../ContainerGames";
import Navbar from "../Navbar";
import { videogames } from "@/data/videogames@";

export default function Home() {
  return (
    <>
      <Navbar />
      <ContainerGames games={videogames} />
    </>
  );
}
