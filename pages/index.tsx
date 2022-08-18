import Box from "@mui/material/Box";
import { Carousel } from "../components/index/carousel";
import { About } from "../components/index/about";
import type { NextPage } from "next";
import { Layout } from "../components/layout";
import { Recuruit } from "../components/index/recruit";
import { News } from "../components/index/news";

const Home: NextPage = () => {
	return (
		<Layout>
			<Box
				minHeight={"calc(100vh - 95px)"}
				width="100%"
				display="flex"
				justifyContent="center"
				alignItems="center"
				position="relative"
			>
				<Carousel />
			</Box>
			<Box height={"calc(100vh - 75px)"} width="100%" position="relative">
				<About />
			</Box>
			<Box height={"calc(100vh - 75px)"} width="100%" position="relative">
				<Recuruit />
			</Box>
			<Box height={"calc(100vh - 75px)"} width="100%" position="relative">
				<News />
			</Box>
		</Layout>
	);
};

export default Home;
