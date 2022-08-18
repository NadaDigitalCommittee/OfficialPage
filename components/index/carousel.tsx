import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
import Typography from "@mui/material/Typography";
import { useState, type FC } from "react";

SwiperCore.use([Pagination, Autoplay]);

const images = ["1", "2", "3"];

export const Carousel: FC = () => {
	const [current, setCurrent] = useState(0);
	return (
		<>
			<Swiper
				pagination={{
					clickable: true,
				}}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				speed={900 * 2}
				loop={true}
				slidesPerView={2}
				spaceBetween={60}
				centeredSlides={true}
				onSlideChange={(c) => setCurrent(c.realIndex)}
				height={600}
				translate={"yes"}
			>
				{images.map((src: string, i: number) => {
					return (
						<SwiperSlide
							key={i}
							style={{
								display: "flex",
								alignItems: "center",
								marginTop: "auto",
								marginBottom: "auto",
								height: "480px",
								width: "720px",
								justifyContent: "center",
							}}
						>
							<Image
								src={`/images/${src}.png`}
								width={current === i ? 600 : 480}
								height={current === i ? 400 : 320}
								alt="top-image"
								style={{ transition: "width 2000ms ease-in-out" }}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<Typography
				fontFamily="Yu Gothic"
				fontSize="3vw"
				fontWeight="550"
				color="white"
				lineHeight="1.5"
				sx={{
					borderLeftStyle: "solid",
					borderLeftWidth: "0.8vw",
					borderColor: "white",
					boxShadow: "none",
					position: "absolute",
					px: "20px",
					ml: "3vw",
					zIndex: 1,
				}}
			>
				デジタルで、
				<br />
				誰もが活躍できる学校へ。
			</Typography>
		</>
	);
};
