import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressRing } from "@/components/ui/progress-ring";
import { cn } from "@/lib/utils";

type BgItem =
	| { id: string; type: "image"; src: string; src2x?: string; isDefault?: boolean }
	| { id: string; type: "progress"; percent: number; estimate: string };

function BackgroundCard({
	item,
	selected,
	isDefault,
}: {
	item: BgItem;
	className?: string;
	selected: boolean;
	isDefault?: boolean;
}) {
	console.log(item);
	return (
		<Card
			className={cn(
				"w-full max-w-sm aspect-9/16 overflow-hidden relative cursor-pointer border-2 border-transparent transition-border duration-200 ease-in-out",
				!selected && item.type !== "progress" && "hover:border-gray-400",
				selected && "border-black",
				item.type === "progress" && "bg-black",
			)}
		>
			{isDefault && (
				<Badge asChild className="absolute top-1.5 left-1.25 z-20">
					<span className="leading-1">Default</span>
				</Badge>
			)}
			<CardContent className="h-full">
				{item.type === "image" && item.src && (
					<>
						<img
							src="./avatar.png"
							srcSet="
							./avatar.png 1x,
							./avatar@2x.png 2x,"
							sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
							alt="Avatar"
							className="absolute inset-0 h-full w-full object-cover z-10"
							loading="lazy"
							decoding="async"
							draggable={false}
						/>
						<img
							src={item.src}
							srcSet={`
							${item.src} 1x,
							${item.src2x} 2x`}
							sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
							alt="background"
							className="absolute inset-0 h-full w-full object-cover z-0"
							loading="lazy"
							decoding="async"
							draggable={false}
						/>
					</>
				)}

				{item.type === "progress" && (
					<div className="flex flex-col h-full items-center justify-end">
						<div className="flex items-center">
							<ProgressRing value={item.percent} size={65} stroke={3} labelClassName="text-sm" />
						</div>

						<p className="text-xs mt-8.5 text-white">{item.estimate}</p>
					</div>
				)}
			</CardContent>
		</Card>
	);
}


export default BackgroundCard;