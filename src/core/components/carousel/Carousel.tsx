import { useState, useRef, createRef, cloneElement } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { v4 as uuid } from "uuid";

function Carousel() {
	const [slide, setSlide] = useState({
		id: uuid(),
		message: 1,
		nodeRef: createRef<HTMLDivElement>(),
	});
	const classNames = useRef<string>("slide-forward");

	const onForward = () => {
		classNames.current = "slide-forward";
		setSlide({
			id: uuid(),
			message: Math.random(),
			nodeRef: createRef(),
		});
	};

	const onBackward = () => {
		classNames.current = "slide-backward";
		setSlide({
			id: uuid(),
			message: Math.random(),
			nodeRef: createRef(),
		});
	};

	return (
		<TransitionGroup
			className={"carousel"}
			childFactory={(child) => {
				return cloneElement(child, {
					classNames: classNames.current,
				});
			}}
		>
			<CSSTransition
				key={slide.id}
				nodeRef={slide.nodeRef}
				classNames={classNames.current}
				timeout={{ enter: 2000, exit: 2000 }}
			>
				<div className="list-item" ref={slide.nodeRef}>
					{slide.message}
				</div>
			</CSSTransition>
		</TransitionGroup>
	);
}
