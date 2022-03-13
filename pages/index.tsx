/**
 * Created by jovialis (Dylan Hanson) on 3/12/22.
 */
import {Box, Button, Center, Heading, Text, useTimeout, VStack} from "@chakra-ui/react";
import {useRouter} from "next/router.js";
import {useEffect, useState} from "react";
import {ClickableButton} from "../components/clickableButton";

export default function Survey() {
	const router = useRouter();
	const [currentProgress, setCurrentProgress] = useState(0);

	useEffect(() => {
		window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
	}, [currentProgress]);

	const scrollToBottom = () => {
		setCurrentProgress(currentProgress + 1);
	};

	const questions = [
		{
			question: "Your friends would describe you as...",
			answers: [
				"Skeptical",
				"Empathetic",
				"A Storyteller",
				"A Problem Solver",
				"A Leader"
			]
		},
		{
			question: "What’s your favorite type of project?",
			answers: [
				"Making a diorama/art project",
				"Writing a research paper",
				"Preparing or giving a presentation",
				"Tinkering and making something work",
				"Planning a new program initiative or organizing a discussion group"
			]
		},
		{
			question: "How do you make important decisions?",
			answers: [
				"After carefully analyzing every option and the predicted results",
				"After checking with friends",
				"I make an executive decision and everyone follows",
				"Create a poll and ask social media",
				"Gut instinct",
				"Come up with the simplest possible solution"
			]
		},
		{
			question: "What does success mean to you?",
			answers: [
				"Earning enough to support my family and more",
				"Autonomy to make high-level decisions",
				"Ability to balance work and life",
				"Creative control of my projects"
			]
		},
		{
			question: "When you picture your ideal job, what are you doing?",
			answers: [
				"Working in a fast-paced role that pushes me to produce results",
				"Getting creative and coming up with new ideas",
				"Thinking big-picture and solving problems",
				"Figuring out how the company operates and finding ways to do it better",
				"Leading a team"
			]
		},
		{
			question: "How do you feel about working in groups?",
			answers: [
				"I love working in groups!",
				"I like working with a group as long as I can take the lead",
				"I can adapt to any situation",
				"I prefer to work by myself most of the time"
			]
		},
		{
			question: "Do you consider yourself an introvert or an extrovert?",
			answers: [
				"Extrovert all the way",
				"Mostly extroverted",
				"A balance between both",
				"Mostly introverted",
				"Introvert all the way"
			]
		},
		{
			question: "What is your strongest skill?",
			answers: [
				"Storytelling",
				"Logical Thinking",
				"Creativity",
				"Troubleshooting",
				"Persuasion",
				"Communication",
				"Math & Statistics"
			]
		},
	]

	let elements: JSX.Element[] = [];
	for (let i = 0 ; i < questions.length ; i++) {
		elements.push(<>
			{currentProgress >= i && <>
                <Center w={"100%"} h={"100vh"} position={"relative"}>
                    <VStack spacing={10}>
                        <Heading size={"md"}>{questions[i].question}</Heading>
                        <VStack>
	                        {i < questions.length - 1 ?
		                        (questions[i].answers.map(a => (
		                            <ClickableButton delay={true} onClick={scrollToBottom}>{a}</ClickableButton>
	                            ))) : (questions[i].answers.map(a => (
				                        <ClickableButton delay={true} onClick={() => {
					                        router.push('/results');
				                        }}>{a}</ClickableButton>
			                        ))
		                        )
							}
                        </VStack>
                    </VStack>
                    <Center w={"100%"} position={"absolute"} bottom={2}>
                        <Text color={"gray.500"}>{i + 1}/{questions.length} Questions</Text>
                    </Center>
                </Center>
            </>}
		</>)
	}

	return <>
		{elements}
	</>
}

