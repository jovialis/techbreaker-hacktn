import {Button} from "@chakra-ui/react";
import {useState} from "react";

/**
 * Created by jovialis (Dylan Hanson) on 3/13/22.
 */

export interface IClickableButton {
	delay?: boolean
	onClick?: () => void,
	children: JSX.Element
}

export function ClickableButton(props: IClickableButton) {
	const [clicked, setClicked] = useState(false);
	return <Button colorScheme={clicked ? "blue" : "gray"} onClick={() => {
		setClicked(!clicked);
		if (props.onClick) {
			setTimeout(() => {
				props.onClick!();
			}, props.delay ? 500 : 0);
		}
	}}>
		{props.children}
	</Button>
}