import ButtonAddToCart from "@/components/ButtonAddToCart@";
import { Box, Card, CardActionArea, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CardGame({ game }) {
  const router = useRouter();
  return (
    <>
      <Card sx={{ p: 2 }} variant="outlined">
        <CardActionArea
          onClick={() => {
            router.push(`/game-detail/${game.id}`);
          }}
        >
          <Box align="center">
            <Image
              width={300}
              height={500}
              src={game.image}
              alt={`game-${game.id}-${game.name}`}
            />
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mt: 2 }}
              color="textPrimary"
            >
              {game.name} | ${game.price}
            </Typography>
          </Box>
        </CardActionArea>
        <ButtonAddToCart item={game} />
      </Card>
    </>
  );
}
