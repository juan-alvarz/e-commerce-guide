import LayoutAuth from "@/layouts/auth@";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function Login() {
  return (
    <>
      <LayoutAuth>
        <Typography
          variant="h5"
          color="textPrimary"
          fontWeight={800}
          sx={{ my: 1 }}
        >
          Login
        </Typography>
        <TextField label="Email" fullWidth />
      </LayoutAuth>
    </>
  );
}
