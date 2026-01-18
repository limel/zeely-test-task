import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import BackgroundCard from "@/components/BackgroundCard";

type BgItem =
	| { id: string; type: "image"; src: string; src2x?: string; isDefault?: boolean }
	| { id: string; type: "progress"; percent: number; estimate: string };

const items: BgItem[] = [
	{ id: "progress", type: "progress", percent: 50, estimate: "1 minute left" },
	{ id: "2", type: "image", src: "./bg-6.jpg", src2x: "./bg-6@2x.jpg", isDefault: true },
	{ id: "3", type: "image", src: "./bg-3.jpg", src2x: "./bg-3@2x.jpg" },
	{ id: "4", type: "image", src: "./bg-4.jpg", src2x: "./bg-4@2x.jpg" },
	{ id: "5", type: "image", src: "./bg-5.jpg", src2x: "./bg-5@2x.jpg" },
	{ id: "6", type: "image", src: "./bg-6.jpg", src2x: "./bg-6@2x.jpg" },
];

function BackgroundPicker() {
	const [value, setValue] = React.useState("2");

	return (
		<section className="w-full">
			<h3 className="mb-2.5">Your backgrounds</h3>

			<RadioGroup value={value} onValueChange={setValue} className=" grid grid-cols-3 gap-3 px">
				{items.map((item) => (
					<RadioGroupItem value={item.id} className="col-span-1" key={item.id}>
						<BackgroundCard
							item={item}
							selected={value === item.id}
							isDefault={item.type === "image" ? item.isDefault : undefined}
						/>
					</RadioGroupItem>
				))}
			</RadioGroup>
		</section>
	);
}

export { BackgroundPicker };

