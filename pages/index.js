import Head from 'next/head'
import { useAuth } from '@/lib/auth'

import { Button, Heading, Text, Code, Icon, Flex } from '@chakra-ui/core';





export default function Home() {
  const auth = useAuth();

  return (


      <Flex
      as="main" 
      direction = "column" 
      align = "center" 
      justify = "center"
      h = "100vh"
      >

        <Head>
          <title>Everglade</title>
        </Head>
        <Heading >
          Everglade
        </Heading>
        <Icon color = "black" name = "logo" size = "48px"/>



        {auth?.user ? (
          <Button as="a" href="/dashboard">View Dashboard</Button>
      
          ):(
            
          <Button 
          mt = {4}
          size ="sm"
          onClick = {(e) => auth.signinWithGithub()}>
             Sign In
          </Button> 

        )}


      </Flex>



  )
}
