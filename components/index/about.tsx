import { type FC, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import { RightArrow } from "./rightarrow";

const orgs = [
	{
		src: "3",
		name: "情報システム部",
		text: (
			<>
				Webサイト作成、
				<br />
				生徒会のサーバーの管理、
				<br />
				生徒会のシステム開発
				<br />
				などを行っています
			</>
		),
		href: "",
	},
	{
		src: "4",
		name: "動画部",
		text: (
			<>
				学校行事における
				<br />
				機材の設営に加え、
				<br />
				動画の撮影、編集、公開
				<br />
				を行なっています。
			</>
		),
		href: "",
	},
	{
		src: "5",
		name: "総務部",
		text: (
			<>
				直接デジタル業務には
				<br />
				携わっていませんが、
				<br />
				委員会をスムーズに
				<br />
				運営するための
				<br />
				要となっています。
			</>
		),
		href: "",
	},
];

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
				height="calc(100% - 172px)"
				sx={{
					borderColor: "#00213B",
					borderTopWidth: "15px",
					borderBottomWidth: "15px",
					borderStyle: "solid",
					display: "flex",
				}}
			>
				{orgs.map(({ src, name, text, href }, index) => {
					return (
						<Box
							key={index}
							height="100%"
							width="calc(100% / 3)"
							sx={{
								backgroundImage: `url(/images/${src}.png)`,
								backgroundPosition: "center",
								backdropFilter: "blur(12px)",
								textAlign: "center",
							}}
						>
							<Typography
								color="white"
								variant="h4"
								mt="40px"
								fontFamily="urw-din, sans-serif"
							>
								{name}
							</Typography>
							<Typography
								color="white"
								variant="h6"
								mt="40px"
								sx={{ lineHeight: name === "総務部" ? "160%" : "200%" }}
								fontFamily="Yu Gothic"
							>
								{text}
							</Typography>
							<NextLink href={href} passHref>
								<Bt />
							</NextLink>
						</Box>
					);
				})}
			</Box>
		</>
	);
};

const Bt: FC = () => {
	const [hovered, setHovered] = useState(false);
	return (
		<Button
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			sx={{
				borderRadius: "50%",
				mt: "20px",
				width: "100px",
				height: "100px",
				borderColor: "white",
				bgcolor: hovered ? "white!important" : "transparent",
			}}
			variant={hovered ? "contained" : "outlined"}
		>
			<RightArrow color={hovered ? "black" : "white"} />
		</Button>
	);
};
