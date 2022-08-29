import { FC, useState } from "react";
import NextLink from "next/link";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { RightArrow } from "./index/rightarrow";

interface NavItem {
	text: string;
	href: string;
	isExternal?: boolean;
}

const NavItems: NavItem[] = [
	{
		text: "組織情報",
		href: "#",
	},
	{
		text: "お知らせ",
		href: "/news",
	},
	{
		text: "コンタクト",
		href: "/contact",
	},
	{
		text: "委員応募",
		href: "#",
		isExternal: true,
	},
	{
		text: "業務委託",
		href: "#",
		isExternal: true,
	},
];

export const Header: FC = () => {
	return (
		<>
			<Container
				maxWidth={false}
				sx={{
					width: "100%",
					height: "95px",
					borderBottomStyle: "solid",
					borderBottomWidth: "20px",
					borderColor: "#00213B",
					position: "relative",
				}}
			></Container>
			<AppBar
				color="default"
				sx={{
					borderColor: "#00213B",
					color: "white",
					bgcolor: "white",
					boxShadow: "0px 2px 4px gray",
					position: "fixed",
					paddingLeft: "10px",
				}}
			>
				<Container maxWidth={false} sx={{ height: "75px" }}>
					<Toolbar
						disableGutters
						sx={{ transform: "translate(0, -50%)", top: "50%" }}
					>
						<Box
							sx={{
								flexGrow: {
									xs: 1,
									md: 0.05,
								},
								display: "flex",
							}}
						>
							<NextLink href="/" passHref>
								<IconButton sx={{ p: 0 }}>
									<Avatar
										alt="Logo"
										src="/favicon.ico"
										sx={{ width: "48px", height: "48px" }}
									/>
								</IconButton>
							</NextLink>
						</Box>
						<Box
							display="flex"
							flexGrow="1"
							flexDirection="column"
							letterSpacing=".3rem"
							color="#00213B"
							sx={{ cursor: "pointer" }}
							pt="7px"
						>
							<NextLink href="/" passHref>
								<Typography
									noWrap
									component="a"
									variant="h5"
									color="default"
									lineHeight="100%"
									fontWeight="bold"
									sx={{ textDecoration: "none", color: "#00213B" }}
								>
									灘校デジタル委員会
								</Typography>
							</NextLink>
							<NextLink href="/" passHref>
								<Typography
									noWrap
									component="a"
									variant="body2"
									color="default"
									fontFamily="urw-din, sans-serif"
									fontWeight="demi"
									fontSize="12px"
									sx={{ textDecoration: "none", color: "#00213B" }}
								>
									DIGITAL COMMITTEE
								</Typography>
							</NextLink>
						</Box>

						<Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
							{NavItems.map((item, index: number) => (
								<NavButton key={index} {...item} />
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};

interface Props {
	href: string;
	isExternal?: boolean;
	text: string;
}

const NavButton: FC<Props> = (item) => {
	const [hovered, setHovered] = useState(false);
	return (
		<NextLink href={item.href} passHref>
			<Button
				sx={{
					display: "flex",
					fontSize: 15,
					px: hovered ? 1.8 : item.isExternal ? 2 : 1.8,
					py: 1,
					mx: 1,
					color: item.isExternal ? "#fff" : "#00213B",
					bgcolor: item.isExternal ? "#00213B" : "#fff",
					borderColor: item.isExternal ? "#00213B" : "#fff",
					borderRadius: "50px",
					borderWidth: "1px",
					borderStyle: "solid",
					transition: "padding-right 0.5s ease-in-out",
					width: item.isExternal ? "9rem" : "7rem",
					"&:hover": item.isExternal
						? {
								color: "#00213B",
								pr: "1.8rem",
						  }
						: null,
				}}
				onMouseOver={() => setHovered(true)}
				onMouseOut={() => setHovered(false)}
			>
				{item.text}
				{item.isExternal && (
					<RightArrow width={hovered ? "1.2rem" : "0px"} color="#00213B" />
				)}
			</Button>
		</NextLink>
	);
};

/**
 * header>
	<Link href="/"><div className="header-left"><Image src="/favicon.ico" alt="logo" width="50" height="50" className="header-img"/>
		<div className="header-title"><h1>灘校デジタル委員会</h1><h2>DIGITAL COMMITTEE</h2></div></div>
		</Link>
	</header><div className="header-line"/>
 */
