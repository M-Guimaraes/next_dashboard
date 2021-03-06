import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/SideBar';

export default function CreateUser() {
	return (
		<Box>
			<Header />

			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<Box flex="1" borderRadius={8} bg="gray.800" p={['8', '6']}>
					<Heading size="lg"> Criar usuário</Heading>

					<Divider my="6" bg="gray.700" />

					<VStack spacing={['8', '6']}>
						<SimpleGrid minChildWidth="240px" spacing={['8', '6']} w="100%">
							<Input name="name" label="Nome completo" />
							<Input name="email" type="email" label="E-mail" />
						</SimpleGrid>

						<SimpleGrid minChildWidth="240px" spacing={['8', '6']} w="100%">
							<Input name="password" type="password" label="Senha" />
							<Input name="password_confirmation" type="password" label="Confirmação de senha" />
						</SimpleGrid>
					</VStack>

					<Flex justify="flex-end" mt="8">
						<HStack spacing="4">
							<Link href="/users" passHref>
								<Button as="a" colorScheme="whiteAlpha">
									Cancelar
								</Button>
							</Link>
							<Link href="/users" passHref>
								<Button as="a" colorScheme="pink">
									Salvar
								</Button>
							</Link>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
