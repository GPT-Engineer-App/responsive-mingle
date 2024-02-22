import React from "react";
import { Box, Flex, Text, Image, Button, VStack, Heading, Container, SimpleGrid, StackDivider, useBreakpointValue, IconButton, Input, Textarea, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowRight } from "react-icons/fa";

// Sample data for featured content and media gallery
const featuredContent = [
  { title: "Product One", description: "This is our first amazing product." },
  { title: "Service Two", description: "We offer excellent services." },
  { title: "Feature Three", description: "Check out this cool feature!" },
];

const mediaGalleryImages = ['https://images.unsplash.com/photo-1683009427500-71296178737f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHx8fHwxNzA4NjMxMTI5fDA&ixlib=rb-4.0.3&q=80&w=1080', 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5c2NhcGV8ZW58MHx8fHwxNzA4NjMxMTI5fDA&ixlib=rb-4.0.3&q=80&w=1080', 'https://images.unsplash.com/photo-1671726203454-5d7a5370a9f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5fGVufDB8fHx8MTcwODYzMTEzMHww&ixlib=rb-4.0.3&q=80&w=1080'];

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="blue.600" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">
              My Website
            </Heading>
            <Flex>
              <Link href="#introduction" px={3}>
                Home
              </Link>
              <Link href="#features" px={3}>
                Features
              </Link>
              <Link href="#gallery" px={3}>
                Gallery
              </Link>
              <Link href="#contact" px={3}>
                Contact
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Introduction Section */}
      <Box id="introduction" py={10} bg="gray.100">
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} align="center">
            <VStack spacing={5} align="flex-start">
              <Heading as="h2" size="xl">
                Welcome to Our Website!
              </Heading>
              <Text fontSize="lg">Discover our range of products and services designed to help you achieve more.</Text>
              <Button rightIcon={<FaArrowRight />} colorScheme="blue" variant="solid">
                Learn More
              </Button>
            </VStack>
            <Image src="https://images.unsplash.com/photo-1533745848184-3db07256e163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWxjb21lfGVufDB8fHx8MTcwODYzMTEzMHww&ixlib=rb-4.0.3&q=80&w=1080" />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Featured Content Section */}
      <Box id="features" py={10}>
        <Container maxW="container.lg">
          <VStack divider={<StackDivider borderColor="gray.200" />} spacing={8}>
            <Heading as="h3" size="lg">
              Featured Content
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
              {featuredContent.map((content, index) => (
                <Box key={index} bg="white" p={5} borderRadius="md" shadow="md">
                  <Heading as="h4" size="md">
                    {content.title}
                  </Heading>
                  <Text mt={3}>{content.description}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Media Gallery */}
      <Box id="gallery" py={10} bg="gray.100">
        <Container maxW="container.lg">
          <VStack spacing={8}>
            <Heading as="h3" size="lg">
              Media Gallery
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={5}>
              {mediaGalleryImages.map((imgSrc, index) => (
                <Image key={index} src={imgSrc} borderRadius="md" />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Contact Form */}
      <Box id="contact" py={10}>
        <Container maxW="container.lg">
          <VStack spacing={5}>
            <Heading as="h3" size="lg">
              Contact Us
            </Heading>
            <Box as="form" w="full" maxW="500px">
              <VStack spacing={3}>
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <Textarea placeholder="Your Message" />
                <Button colorScheme="blue" type="submit">
                  Send Message
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Social Media Integration */}
      <Box bg="blue.600" color="white" py={3}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 2, sm: 4 }} spacing={5} justifyItems="center">
            <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} variant="ghost" colorScheme="whiteAlpha" />
            <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} variant="ghost" colorScheme="whiteAlpha" />
            <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} variant="ghost" colorScheme="whiteAlpha" />
            <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} variant="ghost" colorScheme="whiteAlpha" />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.700" color="gray.200" py={5}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }}>
            <Text>&copy; {new Date().getFullYear()} My Website. All rights reserved.</Text>
            <Flex mt={{ base: 4, md: 0 }}>
              <Link href="#privacy" px={3}>
                Privacy Policy
              </Link>
              <Link href="#terms" px={3}>
                Terms of Service
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
