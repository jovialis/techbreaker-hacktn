/**
 * Created by jovialis (Dylan Hanson) on 3/13/22.
 */
import {Box, Button, Center, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import {useRouter} from "next/router.js";
import {useState} from "react";
import {ClickableButton} from "../components/clickableButton";

export default function ResultsPage() {
	const router = useRouter();

	const [budgetReady, setBudgetReady] = useState(false);
	const [timeframeReady, setTimeframeReady] = useState(false);
	const [posReady, setPosReady] = useState(false);

	return <>
		<Center w={"100%"} h={"100vh"}>
			<VStack spacing={20}>
				<VStack spacing={3}>
					<Heading size={"lg"}>
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						We think you're a natural Software Engineer (SWE)!
					</Heading>
					<Text color={"gray.500"} fontSize={20} mb={10}>
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						Now, let's customize your roadmap to get you ready for jobs at Amazon, Facebook, Google, and more.
					</Text>
				</VStack>
				<HStack alignItems={"flex-start"} justifyContent={"space-evenly"} spacing={20}>
					<Budget setReady={setBudgetReady} ready={budgetReady}/>
					<Timeframe setReady={setTimeframeReady} ready={timeframeReady}/>
					<CurrentPos setReady={setPosReady} ready={posReady}/>
				</HStack>
				<Button
					colorScheme={"orange"}
					disabled={!(budgetReady && timeframeReady && posReady)}
					onClick={() => router.push('/resources')}
				>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					Let's Pick Your Resources
				</Button>
			</VStack>

		</Center>
	</>
}

interface ComponentProps {
	setReady: (flag: boolean) => void;
	ready: boolean
}

function Budget(props: ComponentProps) {

	return <>
		<VStack bg={"gray.50"} p={4} w={300}>
			<Heading size={"sm"}>Your Budget</Heading>
			{/* eslint-disable-next-line react/no-unescaped-entities */}
			<Text fontSize={"sm"} color={"gray.500"} textAlign={"center"}>We'll connect you with opportunities within your means.</Text>
			<VStack>
				<ClickableButton onClick={() => props.setReady(true)}>Free</ClickableButton>
				<ClickableButton onClick={() => props.setReady(true)}>Freemium</ClickableButton>
				<ClickableButton onClick={() => props.setReady(true)}>$$$</ClickableButton>
			</VStack>
		</VStack>
	</>
}

function Timeframe(props: ComponentProps) {

	return <>
		<VStack bg={"gray.50"} p={4} w={300}>
			<Heading size={"sm"}>Your Timeframe</Heading>
			<Text fontSize={"sm"} color={"gray.500"} textAlign={"center"}>When do you want to be ready for your new career?</Text>
			<VStack>
				<ClickableButton onClick={() => props.setReady(true)}>Short Term (6-12 weeks)</ClickableButton>
				<ClickableButton onClick={() => props.setReady(true)}>Medium Term (4-6 months)</ClickableButton>
				<ClickableButton onClick={() => props.setReady(true)}>Long Term (6+ months)</ClickableButton>
				<ClickableButton onClick={() => props.setReady(true)}>Spring (under 4 weeks)</ClickableButton>
			</VStack>
		</VStack>
	</>
}

function CurrentPos(props: ComponentProps) {

	return <>
		<VStack bg={"gray.50"} p={4} w={300}>
			<Heading size={"sm"}>Who Are You Now?</Heading>
			<Text fontSize={"sm"} color={"gray.500"} textAlign={"center"}>Where are you coming from?</Text>
			<VStack mt={2}>
				<ClickableButton onClick={() => props.setReady(true)}>Student</ClickableButton>
				<ClickableButton onClick={() => props.setReady(true)}>Another Career</ClickableButton>
				<ClickableButton onClick={() => props.setReady(true)}>Returning to Work</ClickableButton>
				<ClickableButton onClick={() => props.setReady(true)}>Other</ClickableButton>
			</VStack>
		</VStack>
	</>
}