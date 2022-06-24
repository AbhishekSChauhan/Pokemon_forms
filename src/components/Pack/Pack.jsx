import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddItemsModal from "../Modal/AddItemsModal";
import SubmitModal from "../Modal/SubmitModal";
import Chip from "./Chip";
// import "./Pack.css";
import EditItemsModal from "../Modal/EditItemsModal";

const Pack = ({ name, codeName, region, distance, poke }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openSubmitModal, setOpenSubmitModal] = useState(false);
  const [packItems, setPackItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [submitError, setSubmitError] = useState("");
  const [idForUpdate, setIdForUpdate] = useState(null);
  // console.log(packItems)

  useEffect(() => {
    const getPackTotal = () => {
      const { pTotal } = packItems.reduce(
        (packTotal, packItems) => {
          packTotal.pTotal += packItems.cartTotal;
          return packTotal;
        },
        {
          pTotal: 0
        }
      );
      setTotal(pTotal);
    };
    getPackTotal();
  }, [packItems, total]);

  const removeChip = (id) => {
    const filtered = packItems.filter((e) => id !== e.id);
    setPackItems(filtered);
  };

  const updateChip = (id) => {
    setOpenEditModal(true);
    setIdForUpdate(id);
  };

  const handleModalSubmit = (e) => {
    if (
      name === "" ||
      codeName === "" ||
      name.length < 3 ||
      codeName.length < 3
    ) {
      setSubmitError("Enter correct name and code name");
    } else if (distance <= 1) {
      setSubmitError("Select current pokemon center");
    } else if (region === "" || poke === "") {
      setSubmitError("Select a region and a pokemon");
    } else if (packItems.length < 1) {
      setSubmitError("Add items");
    } else {
      setSubmitError("");
      setOpenSubmitModal(true);
    }
  };

  return (
    <div className="relative">
      <div className="flex text-left pl-4 sm:pl-4 pt-4">What do you want to pack?</div>

      <AddCircleIcon
        className="absolute right-3 sm:right-6 bottom-56 top-2 "
        fontSize="large"
        onClick={() => setOpenModal(true)}
      />

      <AddItemsModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleClose={() => setOpenModal(false)}
        packItems={packItems}
        setPackItems={setPackItems}
      />

      <EditItemsModal
        openModal={openEditModal}
        setOpenModal={setOpenEditModal}
        handleClose={() => setOpenEditModal(false)}
        packItems={packItems}
        setPackItems={setPackItems}
        idForUpdate={idForUpdate}
      />

      <Chip
        packItems={packItems}
        removeChip={removeChip}
        setOpenModal={setOpenModal}
        updateChip={updateChip}
      />

      <div className="p-4 font-bold relative">
        Total Cost
        <span className="absolute right-5 sm:right-9 font-semibold">${total}</span>
      </div>

      <div className={submitError?"p-4 font-bold":''}>{submitError}</div>

      <div className="flex flex-col text-center p-2">
        <button
            type="submit"
            variant="contained"
            // style={{ backgroundColor: "#ff5349" }}
            onClick={handleModalSubmit}
            className="pl-4 bg-[#ff5349] hover:bg-[#ff5359] text-white font-bold py-2 px-4 rounded"
          >
            START MY JOURNEY
        </button>
      </div>
        

      <SubmitModal
        openSubmitModal={openSubmitModal}
        handleClose={() => setOpenSubmitModal(false)}
        name={name}
        codeName={codeName}
        region={region}
        distance={distance}
        packItems={packItems}
        poke={poke}
        total={total}
      />
    </div>
  );
};

export default Pack;
