import "../src/css/oldCardList.css";
import Card from "./oldCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { px, transform } from "framer-motion";
import { Translate } from "@mui/icons-material";

function CardList() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  // ==============================================================

  // ==============================================================

  useEffect(() => {
    // if (Objects.length === 0) return;
    const cardContainer = document.querySelector(".CardList");
    setContainerWidth(cardContainer.offsetWidth);

    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const maxScroll = cardContainer.scrollWidth - containerWidth;
        if (prevPosition >= maxScroll) {
          return 0; // Reset to first position if end is reached
        }
        return prevPosition + containerWidth / 4; // Scroll by the width of one card
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [containerWidth]);

  // ==============================================================

  // ==============================================================

  useEffect(() => {
    const cardContainer = document.querySelector(".CardList");
    cardContainer.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }, [scrollPosition]);
  // ==============================================================

  // ==============================================================

  return (
    <div className="CardList">
      <Card />
    </div>
  );
}
export default CardList;
