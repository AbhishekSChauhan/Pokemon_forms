import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

const Chip = ({ packItems, removeChip, setOpenModal, updateChip }) => {
  return (
    <div>
      {packItems.length === 0 ? (
        <div className="p-4 text-[#ff5349]">No packs selected</div>
      ) : (
        <div className="p-4 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-3 ">
          {packItems.map((pack) => (
            <div
              key={pack.id}
              className="px-4 py-2.5 mx-auto list-none rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center items-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
              style={{
                backgroundColor:
                  pack.toggle === true ? "lightblue" : "lightgray"
              }}
            >
              <li onClick={() => updateChip(pack.id)}>
                {pack.quantity} {pack.item}
              </li>

              <CancelIcon
                fontSize="small"
                onClick={() => removeChip(pack.id)}
                
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chip;
