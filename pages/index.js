import Head from 'next/head';
import { Button, Flex, Text, Icon, Link } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      maxW="400px"
      margin="0 auto"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                window.location.href = "/dashboard"
              }
            `
          }}
        />
        <title>Everglade</title>
      </Head>
      <Icon color="black" name="logo" size="42px" mb={2} />
      <Text mb={4}>
        <Text as="span" fontWeight="bold" display="inline">
          Everglade
        </Text>
        {' is a part of '}
        <Link
          href="https://harsimran.org"
          isExternal
          textDecoration="underline"
        >
          Harsimran Singh's Resume
        </Link>
        {`. It's the easiest way to add comments to your static site. It's still a work-in-progress, but you can try it out by logging in.`}
      </Text>
      {auth.user ? (
        <Button as="a" size="sm" fontWeight="medium" href="/dashboard">
          View Dashboard
        </Button>
      ) : (
        <Button
          mt={4}
          size="sm"
          fontWeight="medium"
          onClick={(e) => auth.signinWithGitHub()}
        >
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;