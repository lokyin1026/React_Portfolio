import Slider from "react-slick";
import { Box, Typography, IconButton, Link } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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
          width: 7,
          height: 7,
          backgroundColor: "grey.500",
          borderRadius: "50%",
          display: "inline-block",
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
          marginBottom: -2,
        }}
      >
        {dots}
      </Box>
    ),
  };

  return (
    <Box
      sx={{
        py: 4,
        position: "relative",
        paddingBottom: 0,
      }}
    >
      <Slider {...settings}>
        {itemList.map((item, index) => (
          <Box key={index} sx={{ textAlign: "center" }}>
            <img
              src={item.src}
              className="tw:max-w-[50%] tw:aspect-[16/9] tw:object-cover tw:rounded-lg tw:block tw:mx-auto"
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
            <Link
              href="#"
              underline="hover"
              sx={{ display: "block", marginTop: 1 }}
            >
              {"View more"}
              <span className={`bi bi-arrow-right tw:ml-1`}></span>
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ItemSlider;
