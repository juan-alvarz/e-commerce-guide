import ConfirmationCheckout from "@/components/ConfirmationCheckout@";
import { videogames } from "@/data/videogames@";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

export default function ConfirmationCheckoutPage(id) {
  const [currentGame, setCurrentGame] = useState(null);

  useEffect(() => {
    if (id) {
      console.log(id.id);
      const findGame = videogames.find((gm) => gm.id === Number(id.id));
      if (findGame) {
        setCurrentGame(findGame);
      }
      // console.log({ id });
    }
  }, [id]);

  if (!id || !currentGame) {
    return (
      <>
        <CircularProgress thickness={6} color="secondary" />
      </>
    );
  } else {
    return <ConfirmationCheckout game={currentGame} />;
  }
}

export async function getServerSideProps(ctx) {
  const { idGame } = ctx.query;

  const id = Number(idGame);
  return {
    props: {
      id,
    },
  };
}
