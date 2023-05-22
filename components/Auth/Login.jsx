import LayoutAuth from "@/layouts/auth@";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { login } from "@/features/usersSlice@";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(input));
    router.push("/");
  };

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
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ my: 1 }}
            label="Email"
            fullWidth
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <TextField
            sx={{ my: 1 }}
            label="Password"
            fullWidth
            name="password"
            type="password"
            value={input.password}
            onChange={handleChange}
          />
          <Button
            sx={{ my: 1 }}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </LayoutAuth>
    </>
  );
}
