import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import "./Pack.css";

const Chip = ({ packItems, removeChip, setOpenModal, updateChip }) => {
  return (
    <div>
      {packItems.length === 0 ? (
        <div className="no-pack">No packs selected</div>
      ) : (
        <div className="packs">
          {packItems.map((pack) => (
            <div
              key={pack.id}
              className="chip-items"
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
                className="cancel-btn"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chip;
