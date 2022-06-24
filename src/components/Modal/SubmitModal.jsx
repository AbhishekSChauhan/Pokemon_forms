import React from "react";
import Button from "@mui/material/Button";
import "./Modal.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
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
const SubmitModal = ({
  openSubmitModal,
  handleClose,
  name,
  total,
  codeName,
  region,
  distance,
  poke,
  packItems
}) => {
  return (
    <>
      <Modal
        open={openSubmitModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='bg-gray-100 mt-36 sm:mt-32 p-4 mx-auto flex flex-col text-center 
          overflow-hidden max-w-sm sm:max-w-md md:max-w-lg rounded-lg border-0'>
          <div className="submit-modal">
            <div>Name: {name}</div>
            <div>Code Name: {codeName}</div>
            <div>Nearest pokemon center: {distance} km</div>
            <div>Starting region: {region}</div>
            <div>Pokemon : {poke}</div>
            <div>
              Selected Pack:
              {packItems.map((pack) => (
                <div key={pack.id}>
                  {pack.quantity} {pack.item}
                </div>
              ))}
            </div>
            <div>Total cost: ${total}</div>

            <div className="flex flex-col text-center p-4">
              <button
                  type="submit"
                  variant="contained"
                  // style={{ backgroundColor: "#ff5349" }}
                  onClick={handleClose}
                  className="pl-4 bg-[#ff5349] hover:bg-[#ff5359] text-white font-bold py-2 px-4 rounded"
                >
                  CLOSE
              </button>
            </div>
            
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default SubmitModal;
