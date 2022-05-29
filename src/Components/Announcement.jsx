import styled from "styled-components";
import React from "react";
import { ContactMail,PhonePaused,WhatsApp } from "@material-ui/icons";




const Text = styled.div`

  font-size: 5vw;
  background-image: url("https://img.freepik.com/foto-gratis/bandera-argentina-sobre-fondo-blanco_532129-292.jpg?w=900");
  background-size: 20vw;
  background-repeat: no-repeat;
  background-position: center; 
`

const P = styled.div`
  font-size: 3vw;
`

const F = styled.div`
    
    font-size: 2vw;
    margin-left: 90%;
  
`;

const Button=styled.div`
  
  cursor: pointer;
  
    
`;


const Sup=styled.div`
  width: 20%;
  margin-left: 5%;
`;

const Tex=styled.div`
  margin-top: -15%;
  margin-left: 20%;
  
`;

var d = new Date();


const Announcement = () => {
  
  return (
    <>
    <Text>
        <F>{(d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear())}</F>
       <Sup>
       <a href="./index1.html">
      <Button>
        <ContactMail />
      </Button>
      </a>
      <Button>
      <PhonePaused />
      </Button>
      <Button>
      <WhatsApp />
    </Button>
    </Sup>
    <Tex>
        Wellcome to Miss Argentina...
        <P>
          the most beautifull footwear ever!
        </P>
    </Tex>
      </Text></>
    
  )
} 

export default Announcement
