/**
 * Created by jovialis (Dylan Hanson) on 3/12/22.
 */
import {Badge, Box, Code, Container, Divider, Heading, HStack, Link, Tag, Text, VStack} from "@chakra-ui/react";

export default function DashboardPage() {
	return <>
		<Container maxW={"container.lg"} mt={4} pb={3}>
			<Heading size={"lg"} mb={2}>
				Your Roadmap to SWE
			</Heading>
			<Text color={"gray.500"} fontSize={20} mb={5}>
				<Code fontSize={16}>37 Days to Mastery</Code>
			</Text>
			<Divider/>
			<HStack spacing={3} mt={7} w={"100%"} alignItems={"flex-start"} justifyContent={"space-evenly"}>
				<Box>
					<Heading size={"sm"}>Learning</Heading>
					<VStack mt={5}>
						<Box bg={"orange.200"} px={3} py={2} w={"100%"}>
							<Link alignItems={"center"}>
								<Text fontSize={16} mb={1}><b>CS 50: Harvard University <Badge colorScheme={"blue"}>FREE</Badge></b></Text>
							</Link>
							<HStack>
								<Tag colorScheme={"orange"}>Course</Tag>
								<Tag colorScheme={"orange"}>Free</Tag>
								<Tag colorScheme={"orange"}>Harvard</Tag>
							</HStack>
						</Box>
						<Box bg={"orange.200"} px={3} py={2} w={"100%"}>
							<Link>
								<Text fontSize={16} mb={1}><b>Algorithms I: Coursera <Badge colorScheme={"blue"}>FREE</Badge></b></Text>
							</Link>
							<HStack>
								<Tag colorScheme={"orange"}>Course</Tag>
								<Tag colorScheme={"orange"}>Free</Tag>
								<Tag colorScheme={"orange"}>Princeton</Tag>
							</HStack>
						</Box>
					</VStack>
				</Box>
				<Box>
					<Heading size={"sm"}>Resources</Heading>
					<VStack mt={5}>
						<Box bg={"pink.200"} px={3} py={2} w={"100%"}>
							<Link alignItems={"center"}>
								<Text fontSize={16} mb={1}><b>The Coding Den <Badge colorScheme={"blue"}>FREE</Badge></b></Text>
							</Link>
							<HStack>
								<Tag colorScheme={"pink"}>Slack Server</Tag>
								<Tag colorScheme={"pink"}>Free</Tag>
							</HStack>
						</Box>
						<Box bg={"pink.200"} px={3} py={2} w={"100%"}>
							<Link>
								<Text fontSize={16} mb={1}><b>Data Structures & Algorithms Made Easy</b></Text>
							</Link>
							<HStack>
								<Tag colorScheme={"pink"}>Book</Tag>
								<Tag colorScheme={"pink"}>$$</Tag>
							</HStack>
						</Box>
					</VStack>
				</Box>
				<Box>
					<Heading size={"sm"}>Events Near <u>Nashville, TN</u></Heading>
					<VStack mt={5}>
						<Box bg={"blue.200"} px={3} py={2} w={"100%"}>
							<Link alignItems={"center"}>
								<Text fontSize={16} mb={1}><b>HackTN</b></Text>
							</Link>
							<HStack>
								<Tag colorScheme={"blue"}>Hackathon</Tag>
								<Tag colorScheme={"blue"}>Free</Tag>
							</HStack>
						</Box>
						<Box bg={"blue.200"} px={3} py={2} w={"100%"}>
							<Link>
								<Text fontSize={16} mb={1}><b>Amazon Career Fair</b></Text>
							</Link>
							<HStack>
								<Tag colorScheme={"blue"}>Career Fair</Tag>
							</HStack>
						</Box>
						<Box bg={"blue.200"} px={3} py={2} w={"100%"}>
							<Link>
								<Text fontSize={16} mb={1}><b>NSS Info Fair</b></Text>
							</Link>
							<HStack>
								<Tag colorScheme={"blue"}>Info Session</Tag>
							</HStack>
						</Box>
					</VStack>
				</Box>
			</HStack>
		</Container>
	</>
}