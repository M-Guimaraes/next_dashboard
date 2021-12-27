import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

interface ProfileProps {
	showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Marcelo Guimarães</Text>
					<Text color="gray.300" fontSize="small">
						marceloguimaraes@outlook.com.br
					</Text>
				</Box>
			)}

			<Avatar
				size="md"
				name="Marcelo Guimarães da Silva"
				src="https://github.com/M-Guimaraes.png/"
			/>
		</Flex>
	);
}
