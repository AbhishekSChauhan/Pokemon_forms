import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

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
        className='p-4 sm:p-0 sm:mr-4'
      >
        <Box className='bg-gray-100 mt-24 sm:mt-28 p-4 md:p-10 mx-auto flex flex-col text-center 
        overflow-hidden max-w-sm sm:max-w-lg md:max-w-xl rounded-lg border-0'>
          <div className="p-4 font-semibold">
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

            <div className="flex flex-col text-center pt-4">
              <button
                  type="submit"
                  variant="contained"
                  // style={{ backgroundColor: "#ff5349" }}
                  onClick={handleClose}
                  className="bg-[#ff5349] hover:bg-[#ff5359] text-white font-bold py-2 px-4 rounded"
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
