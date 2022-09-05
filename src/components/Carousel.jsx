import React, { useRef } from "react";
import { Box, Fab } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  const scrollRef = useRef(null);
  // const maxScroll =
  // scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

  // const slides = [1, 2, 3, 4, 5, 6, 7, 8];
  const handlePrev = () => {
    scrollRef.current.scrollLeft -= 200;
  };
  const handleNext = () => {
    scrollRef.current.scrollLeft += 200;
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "max-content",
      }}>
      <Fab
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 0,
          borderRadius: 0,
          background: "rgba(255, 255, 255, 0.5)",
        }}>
        <ArrowBackIosIcon />
      </Fab>
      <Box
        ref={scrollRef}
        sx={{
          width: "100%",
          height: "100%",
          whiteSpace: "nowrap",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            position: "relative",
            width: "100%",
            height: "85vh",
            borderRadius: "10px",
            background: "#ddd",
            "&::before": {
              content: `""`,
              position: "absolute",
              zIndex: 2,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, rgba(43,45,57,1) 50%, rgba(255,255,255,0) 100%)",
            },
          }}>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/topgun.jpg`}
            sx={{ width: "50%" }}
          />
        </Box>
      </Box>
      <Fab
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 0,
          borderRadius: 0,
          background: "rgba(255, 255, 255, 0.5)",
        }}>
        <ArrowForwardIosIcon />
      </Fab>
    </Box>
  );
};

export default Carousel;
