import { FC, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NextLink from "next/link";
import Button from "@mui/material/Button";
import { RightArrow } from "./rightarrow";
const articles = new Array(4).fill({
	timestamp: Date.now(),
	title: "適当なタイトル適当なタイトル適当な",
});

export const News: FC = () => {
	return (
		<>
			<Box display="flex" bgcolor="#00213B" height="100%" width="100%">
				<Box
					display="flex"
					flexDirection="column"
					alignItems="center"
					height="30%"
					mr="3rem"
				>
					<Box
						display="flex"
						flexGrow="1"
						flexDirection="column"
						letterSpacing=".3rem"
						color="white"
						pt="7px"
						sx={{
							borderLeftWidth: "15px",
							borderLeftStyle: "solid",
							borderLeftColor: "white",
							pl: "20px",
							mx: "4.8rem",
							mt: "2.4rem",
							mb: "2rem",
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
							NEWS
						</Typography>
						<Typography
							noWrap
							component="p"
							variant="body2"
							color="default"
							fontFamily="urw-din, sans-serif"
							fontWeight="500"
							fontSize="1.2rem"
							mb="8px"
						>
							お知らせ
						</Typography>
					</Box>
					<But />
				</Box>
				<Box height="100%" flexGrow="1" display="flex" alignItems="center">
					<Box mb="2rem" mt="6rem">
						{articles.map((a, i) => {
							return (
								<NextLink key={i} href={`/${a.timestamp}`} passHref>
									<Box
										display="flex"
										alignItems="center"
										py="1.2rem"
										sx={{
											borderTopWidth: "1px",
											borderBottomWidth: "1px",
											borderColor: "white",
											borderTopStyle: "solid",
											borderBottomStyle: "solid",
											cursor: "pointer",
										}}
									>
										<Typography
											bgcolor="white"
											color="#00213B"
											borderRadius="50%"
											boxSizing="border-box"
											width="4.8rem"
											height="4.8rem"
											display="flex"
											alignItems="center"
											justifyContent="center"
										>
											{(() => {
												const d = new Date(a.timestamp);
												return (
													<>
														{d.getFullYear()}
														<br />
														{d.getMonth()}.{d.getDay()}
													</>
												);
											})()}
										</Typography>
										<Typography
											variant="h6"
											component="h2"
											fontFamily="urw-din, sans-serif"
											fontWeight="500"
											fontSize="1.2rem"
											pr="10rem"
											pl="2rem"
											color="white"
										>
											{a.title}
										</Typography>
									</Box>
								</NextLink>
							);
						})}
					</Box>
				</Box>
			</Box>
		</>
	);
};

const But: FC = () => {
	const [hovered, setHovered] = useState(false);
	return (
		<NextLink href={"/news"} passHref>
			<Button
				sx={{
					display: "flex",
					fontSize: 20,
					px: hovered ? "6.6rem" : "7.2rem",
					py: "1.2rem",
					mx: "1rem",
					color: "#00213B",
					bgcolor: "#fff",
					borderColor: "#fff",
					borderRadius: "50px",
					borderWidth: "1px",
					borderStyle: "solid",
					transition: "padding-right 0.5s ease-in-out",
					width: "9rem",
					fontWeight: "500",
					"&:hover": {
						color: "#fff",
						pr: "7.3rem",
					},
				}}
				onMouseOver={() => setHovered(true)}
				onMouseOut={() => setHovered(false)}
			>
				MORE
				<RightArrow width={hovered ? "1.8rem" : "0px"} color="#fff" />
			</Button>
		</NextLink>
	);
};
