import React, { useState } from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Selection from "../Select/Select";
import Switch from "@mui/material/Switch";
import Slide from "../Slider/Slider";
import uuid from "react-uuid";


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
      <Box className='bg-gray-100 mt-20 sm:mt-32 p-4 mx-auto flex flex-col text-center 
        overflow-hidden max-w-sm sm:max-w-md md:max-w-lg rounded-lg border-0'>
       
        <div className="flex flex-col text-center">
          <h2 className="p-4 text-3xl font-bold underline">{"Place Your Order"}</h2>
          <p className="p-4 font-semibold mx-auto">We'll use this info to pack your order! Muhahahahahaha</p>
        </div>

         <Selection
          options={options}
          value={item}
          setValue={setItem}
          defaultValue={"Choose item"}
        />

        <Slide value={quantity} setValue={setQuantity} min={1} max={10} />
        <div className="flex flex-col text-center -mt-7">Select Quantity</div>

        <p className="p-4 text-left relative">
          I need a bag for that!
          <Switch
            style={{ color: "#ff5349" }}
            color="warning"
            checked={toggle}
            onClick={() => setToggle(!toggle)}
            className='absolute left-28 sm:left-44 md:left-60'
          />
        </p>

        <div className="p-4 font-bold text-left relative">
          Cost
          <span className="absolute right-7 sm:right-7 font-semibold">${cartTotal}</span>
        </div>

        <div className="flex flex-col text-center p-2">
          <button
              disabled={isDisabled}
              type="submit"
              variant="contained"
              // style={{ backgroundColor: "#ff5349" }}
              onClick={() => addToCart()}
              className={isDisabled?'bpl-4 bg-[#ff5349] text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed':"pl-4 bg-[#ff5349] text-white font-bold py-2 px-4 rounded"}
            >
              ADD TO CART
          </button>
        </div>

        
      </Box>
    </Modal>
  );
};

export default AddItemsModal;
