import { IPropsCompose } from "ts/interfaces/Report.interface";

export function Compose(props: IPropsCompose) {
	const { components = [], children } = props;

	return (
		<>
			{components.reduceRight((acc, Comp) => {
				return <Comp>{acc}</Comp>;
			}, children)}
		</>
	);
}
