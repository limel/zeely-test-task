import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import PromptTextArea from "@/components/PromptTextArea";
import { Overlay } from "@/components/ui/overlay";
import { AiIcon } from "./AiIcon";
import { BackgroundPicker } from "@/components/BackgroundPicker";

export function AppSidebar() {
	const { setOpen, open } = useSidebar();
	return (
		<>
			<Overlay
				isOpen={open}
				onClick={() => {
					setOpen(false);
				}}
			/>
			<Sidebar
				side="right"
				variant="floating"
				style={
					{
						"--sidebar-width": "25rem",
					} as React.CSSProperties
				}
			>
				<SidebarHeader className="flex items-center justify-between flex-row mb-6">
					<h2>Change background</h2>
					<button onClick={() => setOpen(false)} aria-label="close sidebar" className="inline-flex">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 6L18 18" stroke="black" strokeWidth="1.6" strokeLinecap="round" />
							<path d="M18 6L6 18" stroke="black" strokeWidth="1.6" strokeLinecap="round" />
						</svg>
					</button>
				</SidebarHeader>
				<SidebarContent>
					<form
						action="generate-bg"
						onSubmit={(e) => {
							e.preventDefault();
							console.log("generate background");
						}}
					>
						<SidebarGroup>
							<PromptTextArea />
							<Button type="submit" className="mt-6 w-full" size="lg">
								<AiIcon />
								Generate BG for 1 credit
							</Button>
						</SidebarGroup>
					</form>
					<SidebarGroup>
						<BackgroundPicker />
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
		</>
	);
}

