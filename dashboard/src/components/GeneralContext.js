import React, { useState } from "react";
import axios from "axios";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const API = process.env.REACT_APP_API_URL;

  // ================= BUY =================
  const handleOpenBuyWindow = async (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);

    try {
      await axios.post(`${API}/newOrder`, {
        name: uid,
        qty: 1,
        price: 100,
        mode: "BUY",
      });
    } catch (err) {
      console.log("BUY ERROR:", err.message);
    }
  };

  // ================= CLOSE =================
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // ================= SELL (SAFE - NO ERROR) =================
  const handleOpenSellWindow = (uid) => {
    console.log("SELL clicked:", uid);
    return; // no API call → no error
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}

      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;