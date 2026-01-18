import { SidebarProvider } from "@/components/ui/sidebar";

import TriggerButton from "@/components/TriggerButton";
import { AppSidebar } from "@/components/AppSidebar";

function App({ children }: { children?: React.ReactNode }) {
	return (
		<SidebarProvider>
			<main className="w-full">
				<div className="w-full h-full flex items-center justify-center">
					<TriggerButton />
				</div>
				{children}
			</main>
			<AppSidebar />
		</SidebarProvider>
	);
}

export default App;

