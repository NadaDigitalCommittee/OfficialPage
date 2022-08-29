import NextLink from "next/link";
import Box from "@mui/material/Box";
import { type ReverseFC, resolve, type ReverseProps } from "./reverse";
import Typography from "@mui/material/Typography";
import { ArticlePreview } from "./types";

interface Props extends ReverseProps {
	articles: ArticlePreview[];
}

export const NewsList: ReverseFC<Props> = ({ reverse, articles }) => {
	const { base, back } = resolve(reverse);
	return (
		<>
			{articles.map((a, i) => {
				return (
					<NextLink key={i} href={`/news/${a.timestamp}`} passHref>
						<Box
							display="flex"
							alignItems="center"
							py="1.2rem"
							sx={{
								borderTopWidth: "1px",
								borderBottomWidth: "1px",
								borderColor: base,
								borderTopStyle: "solid",
								borderBottomStyle: "solid",
								cursor: "pointer",
							}}
						>
							<Typography
								bgcolor={base}
								color={back}
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
								color={base}
							>
								{a.title}
							</Typography>
						</Box>
					</NextLink>
				);
			})}
		</>
	);
};
