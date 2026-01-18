import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

function TriggerButton() {
	const { toggleSidebar } = useSidebar();
	return (
		<Button onClick={toggleSidebar} size="lg" className="m-auto">
			open sidebar
		</Button>
	);
}

export default TriggerButton;

