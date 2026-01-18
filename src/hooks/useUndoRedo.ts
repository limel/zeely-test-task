import { useCallback, useEffect, useRef, useState } from "react";

type Options = {
	limit?: number;
	debounceMs?: number;
};

export function useUndoRedoText(initialValue = "", options: Options = {}) {
	const { limit = 100, debounceMs = 300 } = options;

	const [value, setValue] = useState(initialValue);

	const undoStack = useRef<string[]>([]);
	const redoStack = useRef<string[]>([]);

	const pending = useRef<string | null>(null);
	const timer = useRef<number | null>(null);

	const commitPending = useCallback(() => {
		if (pending.current !== null) {
			undoStack.current.push(pending.current);
			if (undoStack.current.length > limit) undoStack.current.shift();
			pending.current = null;
		}
	}, [limit]);

	useEffect(() => {
		return () => {
			if (timer.current) clearTimeout(timer.current);
		};
	}, []);

	const onChange = useCallback(
		(next: string) => {
			if (pending.current === null) pending.current = value;

			redoStack.current = [];
			setValue(next);

			if (timer.current) clearTimeout(timer.current);
			timer.current = window.setTimeout(() => {
				commitPending();
				timer.current = null;
			}, debounceMs);
		},
		[commitPending, debounceMs, value]
	);

	const undo = useCallback(() => {
		if (timer.current) {
			clearTimeout(timer.current);
			timer.current = null;
			commitPending();
		}

		if (!undoStack.current.length) return;
		const prev = undoStack.current.pop()!;
		redoStack.current.push(value);
		setValue(prev);
	}, [commitPending, value]);

	const redo = useCallback(() => {
		if (timer.current) {
			clearTimeout(timer.current);
			timer.current = null;
			commitPending();
		}

		if (!redoStack.current.length) return;
		const next = redoStack.current.pop()!;
		undoStack.current.push(value);
		if (undoStack.current.length > limit) undoStack.current.shift();
		setValue(next);
	}, [commitPending, limit, value]);

	const record = useCallback(() => {
		if (timer.current) {
			clearTimeout(timer.current);
			timer.current = null;
		}
		commitPending();
		undoStack.current.push(value);
		if (undoStack.current.length > limit) undoStack.current.shift();
		redoStack.current = [];
	}, [commitPending, limit, value]);

	return {
		value,
		setValue,
		onChange,
		undo,
		redo,
		record,
		// eslint-disable-next-line react-hooks/refs
		canUndo: undoStack.current.length > 0 || pending.current !== null,
		// eslint-disable-next-line react-hooks/refs
		canRedo: redoStack.current.length > 0,
	};
}

