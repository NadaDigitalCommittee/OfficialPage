import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import type { NextPage } from "next";
import { Layout } from "../components/layout";
import { NewsList } from "../components/newslist";
import Box from "@mui/material/Box";

const News: NextPage = () => {
	const articles = new Array(4).fill({
		timestamp: Date.now(),
		title: "適当なタイトル適当なタイトル適当な",
	});
	return (
		<Layout>
			<Container maxWidth="md">
				<Box pt="15vh" pb="20vh">
					<Typography
						textAlign="center"
						fontFamily="urw-din, sans-serif"
						fontWeight="600"
						fontSize="4rem"
						lineHeight="100%"
						sx={{
							"&::before": {
								borderTopStyle: "solid",
								borderTopWidth: "2px",
								borderTopColor: "#00213b",
								transform: "translate(50%,2rem)",
								content: '""',
								position: "absolute",
								width: "25%",
								left: "50%",
							},
							"&::after": {
								borderTopStyle: "solid",
								borderTopWidth: "2px",
								borderTopColor: "#00213b",
								transform: "translate(-50%,2rem)",
								content: '""',
								position: "absolute",
								width: "25%",
								right: "50%",
							},
						}}
					>
						NEWS
					</Typography>
					<Typography textAlign="center" lineHeight="100%">
						お知らせ
					</Typography>
				</Box>
				<NewsList articles={articles} />
			</Container>
		</Layout>
	);
};

export default News;
