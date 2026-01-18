import { cn } from "@/lib/utils";

function Overlay(props: React.ComponentProps<"div"> & { isOpen: boolean; onClick?: () => void }) {
	return (
		<div
			className={cn(
				"fixed inset-0 bg-black/70 z-10 transition-opacity duration-300",
				props.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
			)}
			onClick={props.onClick}
		/>
	);
}

export { Overlay };

