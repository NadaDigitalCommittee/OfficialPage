import type { FC } from "react";
import Box from "@mui/material/Box";

interface Props {
	width?: string;
	height?: string;
	color?: string;
}

export const RightArrow: FC<Props> = ({ width, height, color }) => {
	return (
		<Box
			width={width}
			height={height}
			display="flex"
			justifyContent="center"
			alignItems="center"
			ml="0.6rem"
			mb="0.4rem"
			sx={{}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="53.471"
				height="16.068"
				viewBox="0 0 53.471 16.068"
			>
				<path
					id="パス_21"
					data-name="パス 21"
					d="M44.415,3660h49.85l-13.508-13.508"
					transform="translate(-44.415 -3645.432)"
					fill="none"
					stroke={color ?? "#fff"}
					strokeWidth="3"
				/>
			</svg>
		</Box>
	);
};
