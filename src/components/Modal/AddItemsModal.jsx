import React, { useState } from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import "./Modal.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Selection from "../Select/Select";
import Switch from "@mui/material/Switch";
import Slide from "../Slider/Slider";
import uuid from "react-uuid";

const style = {
  position: "relative",
  padding: "10px",
  top: "50%",
  left: "51%",
  transform: "translate(-50%, -50%)",
  width: "588px",
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
  textAlign: "center"
};

const options = [
  {
    label: "Poke Ball",
    value: "Poke Ball",
    price: 5
  },
  {
    label: "Great Ball",
    value: "Great Ball",
    price: 10
  },
  {
    label: "Super Potion",
    value: "Super Potion",
    price: 10
  },
  {
    label: "Hyper Potion",
    value: "Hyper Potion",
    price: 20
  }
];

const AddItemsModal = ({
  openModal,
  handleClose,
  packItems,
  setPackItems,
  setOpenModal,
  idForUpdate
}) => {
  const [cartTotal, setcartTotal] = useState(0);
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  // For calculating total amount
  useEffect(() => {
    const getCartTotal = () => {
      if (item === "Poke Ball") {
        setcartTotal(quantity * 5 + (toggle ? 2 : 0));
      }
      if (item === "Great Ball") {
        setcartTotal(quantity * 10 + (toggle ? 2 : 0));
      }
      if (item === "Super Potion") {
        setcartTotal(quantity * 10 + (toggle ? 2 : 0));
      }
      if (item === "Hyper Potion") {
        setcartTotal(quantity * 20 + (toggle ? 2 : 0));
      }
    };
    getCartTotal();
  }, [quantity, item, toggle]);

  // To disable a button
  useEffect(() => {
    if (cartTotal === 0) {
      setIsDisabled(true);
    }
    if (cartTotal !== 0) {
      setIsDisabled(false);
    }
  }, [cartTotal, isDisabled]);

  const addToCart = () => {
    const newCartItem = [
      ...packItems,
      {
        id: uuid(),
        item,
        quantity,
        toggle,
        cartTotal
      }
    ];
    setPackItems(newCartItem);
    setOpenModal(false);
    setItem("");
    setQuantity(0);
    setToggle(false);
    setcartTotal(0);
  };

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2 className="heading">{"Place Your Order"}</h2>

        <p>We'll use this info to pack your order! Muhahahahahaha</p>
        <Selection
          options={options}
          value={item}
          setValue={setItem}
          defaultValue={"Choose item"}
        />

        <Slide value={quantity} setValue={setQuantity} min={1} max={10} />
        <div className="quantity">Select Quantity</div>

        <p className="bag">
          I need a bag for that!
          <Switch
            className="switch"
            style={{ color: "#ff5349" }}
            color="warning"
            checked={toggle}
            onClick={() => setToggle(!toggle)}
          />
        </p>

        <div className="cost">
          Cost
          <span className="cartTotal">${cartTotal}</span>
        </div>

        <Button
          disabled={isDisabled}
          variant="contained"
          onClick={() => addToCart()}
          style={{ backgroundColor: "#ff5349" }}
        >
          {"ADD TO CART"}
        </Button>
      </Box>
    </Modal>
  );
};

export default AddItemsModal;
