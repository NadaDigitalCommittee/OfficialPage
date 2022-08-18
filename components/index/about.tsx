import type { FC } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const images = ["4", "5", "6", "7"];

export const About: FC = () => {
	return (
		<>
			<Box display="flex" mb="20px">
				<Box
					display="flex"
					flexGrow="1"
					flexDirection="column"
					letterSpacing=".3rem"
					color="#00213B"
					pt="7px"
					sx={{
						borderLeftWidth: "15px",
						borderLeftStyle: "solid",
						borderLeftColor: "#00213B",
						pl: "20px",
						ml: "60px",
						mt: "12px",
						mb: "20px",
					}}
				>
					<Typography
						variant="h1"
						noWrap
						component="h2"
						color="default"
						fontFamily="urw-din, sans-serif"
						fontWeight="600"
						fontSize="4.2rem"
						lineHeight="101%"
					>
						ABOUT US
					</Typography>
					<Typography
						noWrap
						component="p"
						variant="body2"
						color="default"
						fontFamily="urw-din, sans-serif"
						fontWeight="600"
						fontSize="1.2rem"
						mb="8px"
					>
						組織情報
					</Typography>
				</Box>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					width="100%"
				>
					<Typography
						component="p"
						variant="body2"
						color="default"
						fontFamily="urw-din, sans-serif"
						fontWeight="600"
						fontSize="20px"
						mb="8px"
						maxWidth="720px"
					>
						デジタル委員会では、各学校行事・生徒会・クラブなどのホームページの作成や運用などに加えて、動画の撮影や編集などを行っています。
					</Typography>
				</Box>
			</Box>
			<Box
				height="calc(100% - 192px)"
				sx={{
					borderColor: "#00213B",
					borderTopWidth: "15px",
					borderBottomWidth: "15px",
					borderStyle: "solid",
					display: "flex",
				}}
			>
				{images.map((image, index) => {
					return (
						<Box
							key={index}
							height="100%"
							width="25%"
							sx={{
								backgroundImage: `url(/images/${image}.png)`,
								backgroundPosition: "center",
								backgroundSize: "cover",
							}}
						>
							a
						</Box>
					);
				})}
			</Box>
		</>
	);
};
