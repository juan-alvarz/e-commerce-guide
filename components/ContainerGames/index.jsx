import Grid from "@mui/material/Grid";
import CardGame from "./CardGame";
export default function ContainerGames({ games }) {
  return (
    <>
      <Grid sx={{ mt: 2 }} container spacing={2}>
        {games.map((game) => (
          <Grid key={game.id} item xs={12} md={4}>
            <CardGame game={game} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
