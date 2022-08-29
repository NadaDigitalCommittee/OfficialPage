import { FC, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { RightArrow } from "./rightarrow";
import NextLink from "next/link";
const images = [
	{
		bg: "6.png",
		text: "デジタル業務に強くない方でも大歓迎ですので気軽にご応募ください！",
		href: "/recruit",
		overtext: "委員応募",
	},
	{
		bg: "7.jpg",
		text: "クラブや同好会、サークルなどのHP作成の委託等を承っています。",
		href: "/recruit",
		overtext: "業務委託",
	},
];

export const Recuruit: FC = () => {
	return (
		<>
			<Box display="flex" pt="2rem">
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
						RECRUIT
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
						委員募集
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
						デジタル委員会では、随時新規委員を募集しています。
						<br />
						また、HP作成などの業務委託も承っています。
					</Typography>
				</Box>
			</Box>
			<Box
				height="calc(100% - 160px)"
				display="flex"
				justifyContent="center"
				alignItems="center"
				sx={{ background: "linear-gradient(0deg, #00213B 50%, white 50%)" }}
			>
				{images.map((v, index: number) => {
					return <RecruitImgRender key={index} {...v} />;
				})}
			</Box>
		</>
	);
};

interface RecuruitProps {
	bg: string;
	text: string;
	href: string;
	overtext: string;
}

const RecruitImgRender: FC<RecuruitProps> = ({ bg, text, href, overtext }) => {
	const [hovered, setHovered] = useState(false);
	return (
		<Box
			height="80%"
			width="30%"
			mx="3rem"
			sx={{
				backgroundImage: `url(/images/${bg})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				borderRadius: "20%",
			}}
		>
			<Box my="4.5rem" mx="3rem" textAlign="center">
				<Typography
					variant="h5"
					color="white"
					mb="4.2rem"
					fontFamily="urw-din, sans-serif"
				>
					{text}
				</Typography>
				<NextLink href={href} passHref>
					<Button
						onMouseOver={() => setHovered(true)}
						onMouseOut={() => setHovered(false)}
						variant={hovered ? "outlined" : "contained"}
						sx={{
							bgcolor: "white",
							color: "#00213B",
							borderRadius: "40px",
							height: "4.8rem",
							width: "15rem",
							"&:hover": {
								background: "transparent",
								color: "white",
								borderColor: "white",
								pr: "2rem",
							},
							fontSize: "1.44rem",
							fontWeight: "550",
							transition: "padding-right 0.5s ease-in-out",
							fontFamily: "urw-din, sans-serif",
						}}
					>
						{overtext}
						{<RightArrow width={hovered ? "30px" : "0px"} height="12px" />}
					</Button>
				</NextLink>
			</Box>
		</Box>
	);
};
