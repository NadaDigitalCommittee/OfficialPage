import type { FC } from "react";
import NextLink from "next/link";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

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
		<AppBar
			color="default"
			sx={{
				borderBottomStyle: "solid",
				borderBottomWidth: "12px",
				borderColor: "#00213B",
				color: "white",
				bgcolor: "white",
				boxShadow: "none",
				position: "relative",
				paddingLeft: "10px",
			}}
		>
			<Container maxWidth="xl" sx={{ height: "75px" }}>
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
						sx={{
							flexGrow: 1,
							display: "flex",
							flexDirection: "column",
							fontFamily: "monospace",
							letterSpacing: ".3rem",
							color: "#00213B",
							sx: { cursor: "pointer" },
						}}
					>
						<NextLink href="/" passHref>
							<>
								<Typography
									noWrap
									component="a"
									variant="h6"
									color="default"
									sx={{ fontWeight: 700 }}
								>
									灘校デジタル委員会
								</Typography>
								<Typography
									noWrap
									component="a"
									variant="body2"
									color="default"
								>
									DIGITAL COMMITTEE
								</Typography>
							</>
						</NextLink>
					</Box>

					<Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
						{NavItems.map((item) => (
							<NextLink href={item.href} passHref key={item.href}>
								<Button
									sx={{
										display: "block",
										fontSize: 15,
										px: item.isExternal ? 3 : 2,
										py: 1,
										mx: 1,
										color: item.isExternal ? "#fff" : "#00213B",
										bgcolor: item.isExternal ? "#00213B" : "#fff",
										borderColor: item.isExternal ? "#00213B" : "#fff",
										borderRadius: "50px",
										borderWidth: "1px",
										borderStyle: "solid",
										"&:hover": item.isExternal
											? {
													color: "#00213B",
											  }
											: null,
									}}
								>
									{item.text}
								</Button>
							</NextLink>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

/**
 * header>
	<Link href="/"><div className="header-left"><Image src="/favicon.ico" alt="logo" width="50" height="50" className="header-img"/>
		<div className="header-title"><h1>灘校デジタル委員会</h1><h2>DIGITAL COMMITTEE</h2></div></div>
		</Link>
	</header><div className="header-line"/>
 */
