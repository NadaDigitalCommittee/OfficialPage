import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import type { NextPage } from "next";
import { Layout } from "../components/layout";

const News: NextPage = () => {
	return (
		<Layout description="404 ページが見つかりませんでした">
			<Container
				sx={{
					height: "calc(100vh - 105px)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography variant="h2" sx={{ fontWeight: 600 }}>
					404ページが見つかりませんでした
				</Typography>
			</Container>
		</Layout>
	);
};

export default News;
