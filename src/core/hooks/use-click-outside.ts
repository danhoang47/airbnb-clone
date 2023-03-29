import { useRef, useEffect } from "react";

function useClickOutside<ElementType extends HTMLElement>(
	handler: (args?: any) => void
) {
	const elementRef = useRef<ElementType>(null);

	const onClickHandler = (event: MouseEvent | TouchEvent) => {
		if (
			!elementRef.current ||
			event.composedPath().includes(elementRef.current)
		) {
			return;
		}

		handler();
	};

	useEffect(() => {
		document?.addEventListener("click", onClickHandler);
		document?.addEventListener("touchstart", onClickHandler);

		return () => {
			document?.removeEventListener("click", onClickHandler);
			document?.removeEventListener("touchstart", onClickHandler);
		};
	}, [elementRef, handler]);

	return elementRef;
}

export default useClickOutside;
