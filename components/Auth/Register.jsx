import LayoutAuth from "@/layouts/auth@";
import Navbar from "../Navbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "@/features/usersSlice@";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();

  const dispatch = useDispatch();
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    password: "",
    age: 0,
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
    console.log({ input });
    dispatch(register(input));
    router.push("/auth/login");
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
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ my: 1 }}
            label="Full Name"
            value={input.fullName}
            onChange={handleChange}
            name="fullName"
            fullWidth
          />
          <TextField
            sx={{ my: 1 }}
            label="Email"
            value={input.email}
            onChange={handleChange}
            name="email"
            fullWidth
            type="email"
          />
          <TextField
            sx={{ my: 1 }}
            label="Password"
            type="password"
            value={input.password}
            onChange={handleChange}
            name="password"
            fullWidth
          />
          <TextField
            sx={{ my: 1 }}
            label="Age"
            type="number"
            value={input.age}
            onChange={handleChange}
            name="age"
            fullWidth
          />
          <Button
            sx={{ mb: 2 }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </form>
      </LayoutAuth>
    </>
  );
}
