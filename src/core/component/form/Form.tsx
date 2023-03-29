import { FC, forwardRef, FormEvent } from "react";
import { ContainerProps } from "_types/props";

export type FormProps = ContainerProps & {
	onFormSubmit: (args?: any) => void;
};

const Form = forwardRef<HTMLFormElement, FormProps>(
	({ onFormSubmit, children }, ref) => {
		const handleFormSubmit = (event: FormEvent) => {
			event.preventDefault();
			onFormSubmit();
		};

		return (
			<form onSubmit={handleFormSubmit} ref={ref}>
				{children}
			</form>
		);
	}
);

export default Form;
