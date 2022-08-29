import type { FC } from "react";

export interface ReverseProps {
	reverse?: boolean;
}

export type ReverseFC<T = ReverseProps> = FC<T>;

export const BASE = "#00213b" as const;

export const BACK = "white" as const;

export function resolve(reverse?: boolean) {
	const base = reverse ? BACK : BASE;
	const back = reverse ? BASE : BACK;
	return {
		base,
		back,
	};
}
