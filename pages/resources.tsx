/**
 * Created by jovialis (Dylan Hanson) on 3/13/22.
 */
import {Button, Center, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import {useRouter} from "next/router.js";
import {ClickableButton} from "../components/clickableButton";

export default function Resources() {
	const router = useRouter();

	const fundamentals = [
		"EdX - Harvard CS50",
		"Algorithms I - Princeton",
		"Programming For Everybody",
		"Algorithms - Stanford",
		"Programming & Data Structures",
		"Data Structures & Algorithms - Google"
	];

	const learning = [
		"CodeHack",
		"Vandy Hacks",
		"Nashville Software School Session",
		"HackTN"
	];

	const resources = [
		"Cracking the Coding Interview",
		"Algorithms Unlocked",
		"Slack Server",
		"Data Structures / Algorithms Made Easy",
		"Programming Throwdown"
	]

	return <>
		<Center w={"100%"} h={"100vh"}>
			<VStack spacing={20}>
				<Heading size={"lg"}>Pick your resources</Heading>
				<HStack spacing={10} alignItems={"flex-start"}>
					<VStack spacing={2} bg={"gray.50"} p={10} w={300}>
						<Heading size={"sm"}>Fundamentals</Heading>
						<Text size={"sm"} color={"gray.500"} textAlign={"center"}>Learn the fundamentals of SWE</Text>
						<VStack spacing={3}>
							{fundamentals.map(f => <ClickableButton key={f}>
								{f}
							</ClickableButton>)}
						</VStack>
					</VStack>
					<VStack spacing={2} bg={"gray.50"} p={10} w={300}>
						<Heading size={"sm"}>Learning</Heading>
						<Text size={"sm"} color={"gray.500"} textAlign={"center"}>Bring your knowledge to action</Text>
						<VStack spacing={3}>
							{learning.map(f => <ClickableButton key={f}>
								{f}
							</ClickableButton>)}
						</VStack>
					</VStack>
					<VStack spacing={2} bg={"gray.50"} p={10} w={300}>
						<Heading size={"sm"}>Resources</Heading>
						<Text size={"sm"} color={"gray.500"} textAlign={"center"}>Guides to help you throughout your journey</Text>
						<VStack spacing={3}>
							{resources.map(f => <ClickableButton key={f}>
								{f}
							</ClickableButton>)}
						</VStack>
					</VStack>
				</HStack>
				<Button colorScheme={"orange"} onClick={() => router.push('/dashboard')}>
					Go to Your Dashboard
				</Button>
			</VStack>
		</Center>
	</>
}
