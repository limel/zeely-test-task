import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupTextarea } from "@/components/ui/input-group";
import { AiIcon } from "./AiIcon";
import { Label } from "@/components/ui/label";
import { useUndoRedoText } from "@/hooks/useUndoRedo";

function PromptTextArea() {
	const { value, onChange, undo, redo, canUndo, canRedo } = useUndoRedoText("", { limit: 200 });

	return (
		<>
			<Label htmlFor="prompt" className="mb-3">
				Background idea
			</Label>
			<InputGroup className="min-h-48.75 resize-none">
				<InputGroupTextarea
					name="prompt"
					id="prompt"
					placeholder="Type AI prompt here..."
					onChange={(e) => onChange(e.target.value)}
					value={value}
					className="max-h-32.5 resize-none"
				/>
				<InputGroupAddon align="block-end" className="justify-between pr-4!">
					<InputGroupButton variant="plain-text" className="text-xs pl-1.75!" size="md">
						<AiIcon className="size-4.5" />
						Regenerate
					</InputGroupButton>
					<div className="flex items-center gap-2">
						<InputGroupButton variant="plain-text" className="p-1.75!" size="md" onClick={undo} disabled={!canUndo}>
							<svg
								width="20"
								height="20"
								className="size-5"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M7.05792 2.65359C7.31827 2.91394 7.31827 3.33605 7.05792 3.5964L4.31779 6.33653H12.3237C15.4179 6.33653 17.9263 8.84489 17.9263 11.9391C17.9263 15.0333 15.4179 17.5417 12.3237 17.5417H9.63139C9.2632 17.5417 8.96472 17.2432 8.96472 16.875C8.96472 16.5068 9.2632 16.2083 9.63139 16.2083H12.3237C14.6815 16.2083 16.5929 14.2969 16.5929 11.9391C16.5929 9.58126 14.6815 7.66987 12.3237 7.66987H4.31779L7.05792 10.41C7.31827 10.6704 7.31827 11.0925 7.05792 11.3528C6.79757 11.6132 6.37546 11.6132 6.11511 11.3528L1.7655 7.0032L6.11511 2.65359C6.37546 2.39324 6.79757 2.39324 7.05792 2.65359Z"
									fill="#CAD4DD"
								/>
							</svg>

							<span className="sr-only">undo</span>
						</InputGroupButton>
						<InputGroupButton variant="plain-text" className="p-1.75!" size="md" onClick={redo} disabled={!canRedo}>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="size-5"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12.6339 2.65359C12.3735 2.91394 12.3735 3.33605 12.6339 3.5964L15.374 6.33653H7.36807C4.27386 6.33653 1.76551 8.84489 1.76551 11.9391C1.76551 15.0333 4.27387 17.5417 7.36808 17.5417H10.0604C10.4286 17.5417 10.7271 17.2432 10.7271 16.875C10.7271 16.5068 10.4286 16.2083 10.0604 16.2083H7.36808C5.01025 16.2083 3.09884 14.2969 3.09884 11.9391C3.09884 9.58126 5.01024 7.66987 7.36807 7.66987H15.374L12.6339 10.41C12.3735 10.6704 12.3735 11.0925 12.6339 11.3528C12.8942 11.6132 13.3163 11.6132 13.5767 11.3528L17.9263 7.0032L13.5767 2.65359C13.3163 2.39324 12.8942 2.39324 12.6339 2.65359Z"
									fill="#CAD4DD"
								/>
							</svg>

							<span className="sr-only">redo</span>
						</InputGroupButton>
					</div>
				</InputGroupAddon>
			</InputGroup>
		</>
	);
}
export default PromptTextArea;



