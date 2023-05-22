import { theme } from "@/utils/MUIConfig/theme@";
import { Box, Container, Divider, Icon, Typography } from "@mui/material";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

export default function LayoutAuth({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        align="center"
        maxWidth="md"
        sx={{
          maxHeight: "90vh",
          backgroundColor: "white",
          borderRadius: 2,
        }}
      >
        <Box align="center">
          <Icon sx={{ fontSize: "5rem" }}>
            <VideogameAssetIcon sx={{ fontSize: "5rem" }} />
          </Icon>
          <Divider>
            {/* <Typography variant="h6" color="textPrimary" fontWeight={800}>
              Videogames
            </Typography> */}
          </Divider>
        </Box>
        <Box>{children}</Box>
      </Container>
    </Box>
  );
}
