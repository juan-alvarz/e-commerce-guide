import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { addToCart, removeFromCart } from "@/features/usersSlice@";

export default function ButtonAddToCart({ item }) {
  const dispatch = useDispatch();
  const allItems = useSelector((state) => state.users.currentUser.cartItems);
  const [alreadyExists, setAlreadyExists] = useState(false);

  useEffect(() => {
    if (allItems.length) {
      const gameAdded = allItems.find((gm) => gm.id === item.id);
      gameAdded && setAlreadyExists(true);
    } else {
      setAlreadyExists(false);
    }
  }, [allItems]);

  const handleClick = () => {
    if (alreadyExists) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(addToCart(item));
    }
  };

  return (
    <Button
      fullWidth
      onClick={handleClick}
      variant="contained"
      color={alreadyExists ? "secondary" : "primary"}
      startIcon={alreadyExists ? <CheckCircleIcon /> : <ShoppingCartIcon />}
    >
      {alreadyExists ? "Added To Your Cart" : "Add To Cart"}
    </Button>
  );
}
