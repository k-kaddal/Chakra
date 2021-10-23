import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                This is me
            </Box>
            <Box display={{ md: 'flex' }}></Box>
            <Box flexGrow={1}></Box>
            <Heading as="h2" variant="page-title">
                K-KAD
            </Heading>
            <p>Artist | Tech-Dev</p>
        </Container>
    )
}

export default Page
