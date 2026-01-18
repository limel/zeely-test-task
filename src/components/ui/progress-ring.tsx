import { cn } from "@/lib/utils";

type ProgressRingProps = {
	value: number;
	size?: number;
	stroke?: number;
	className?: string;
	trackClassName?: string;
	progressClassName?: string;
	labelClassName?: string;
};

export function ProgressRing({
	value,
	size = 65,
	stroke = 6,
	className,
	trackClassName,
	progressClassName,
	labelClassName,
}: ProgressRingProps) {
	const v = clamp(value, 0, 100);

	const r = (size - stroke) / 2;
	const c = 2 * Math.PI * r;

	const dash = (v / 100) * c;
	const gap = c - dash;

	return (
		<div
			className={cn("relative grid place-items-center", className)}
			style={{ width: size, height: size }}
			aria-label={`Progress ${v}%`}
			role="img"
		>
			<svg width={size} height={size} className="-rotate-90">
				{/* Track */}
				<circle
					cx={size / 2}
					cy={size / 2}
					r={r}
					fill="transparent"
					strokeWidth={stroke}
					strokeLinecap="round"
					className={cn("stroke-white/20", trackClassName)}
				/>
				{/* Progress */}
				<circle
					cx={size / 2}
					cy={size / 2}
					r={r}
					fill="transparent"
					strokeWidth={stroke}
					strokeLinecap="round"
					strokeDasharray={`${dash} ${gap}`}
					className={cn("stroke-emerald-300", progressClassName)}
				/>
			</svg>

			<div className={cn("absolute text-white font-semibold text-sm", labelClassName)}>{v}%</div>
		</div>
	);
}

function clamp(n: number, min: number, max: number) {
	return Math.max(min, Math.min(max, n));
}

