import GameDetail from "@/components/GameDetail@";
import { videogames } from "@/data/videogames@";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function GameDetailPage({ idGame }) {
  const [currentGame, setCurrentGame] = useState(null);

  useEffect(() => {
    if (idGame) {
      const findGame = videogames.find((gm) => gm.id === Number(idGame));
      if (findGame) {
        setCurrentGame(findGame);
      }

      console.log({ findGame });
    }
  }, [idGame]);

  if (!idGame) {
    return <CircularProgress />;
  } else {
    if (!currentGame) {
      return (
        <Typography variant="body1" color="textPrimary">
          No se han encontrado Juegos con id {idGame}
        </Typography>
      );
    } else {
      return (
        <>
          <GameDetail game={currentGame} />
        </>
      );
    }
  }
}

export async function getServerSideProps(ctx) {
  const { game } = ctx.query;

  const idGame = Number(game);

  return {
    props: {
      idGame,
    },
  };
}
