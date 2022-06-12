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
        <Box sx={style}>
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

            <Button variant="contained" onClick={handleClose}>
              CLOSE
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default SubmitModal;
