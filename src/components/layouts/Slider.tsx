import Slider from "react-slick";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { projects } from "../constants/PagesConstants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface ArrowProps {
  onClick?: () => void;
}

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <IconButton
    onClick={() => {
      console.log("PrevArrow clicked");
      onClick?.();
    }}
    sx={{
      position: "absolute",
      left: 10,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 9999,
    }}
  >
    <ArrowBackIcon sx={{ color: "#fff" }} />
  </IconButton>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: 10,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 9999,
    }}
  >
    <ArrowForwardIcon sx={{ color: "#fff" }} />
  </IconButton>
);

interface SliderItems {
  itemList: any[];
}

const ItemSlider: React.FC<SliderItems> = ({ itemList }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: () => (
      <Box
        sx={{
          width: 10,
          height: 10,
          backgroundColor: "grey.500",
          borderRadius: "50%",
          display: "inline-block",
          mx: 0.5,
          "&.slick-active": {},
        }}
      />
    ),
    dotsClass: "slick-dots custom-dots",
    appendDots: (dots: React.ReactNode) => (
      <Box
        sx={{
          "& .slick-active > div": {
            backgroundColor: "#90CAF9",
          },
        }}
      >
        {dots}
      </Box>
    ),
  };

  return (
    <Box sx={{ py: 4, position: "relative" }}>
      <Slider {...settings}>
        {itemList.map((item, index) => (
          <Box key={index} sx={{ textAlign: "center", px: 4 }}>
            <img
              src={item.src}
              className="tw:w-[30%] tw:object-cover tw:rounded-lg tw:block tw:mx-auto"
              loading="lazy"
            />
            <Typography
              variant="h6"
              sx={{ color: "#90CAF9", fontStyle: "italic", mb: 2 }}
            >
              "{item.title}"
            </Typography>
            <Typography variant="body2" sx={{ color: "#90CAF9" }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ItemSlider;
