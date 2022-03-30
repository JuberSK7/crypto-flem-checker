import React from "react";
import styled from 'styled-components'
import { Button, Container } from "../../GlobleStyle";

// using passing props with reuseble components  ////////

const DataBlock = ({ lightBg, ImgStart, lightTopLine, topsline, lightHeading, headingline, lightdisc, discription, img, alt, start, big, col, primary}) => {
    return (
        <>
            <DataBloc lightBg={lightBg}>
                <Container>
                    {/*<TopHeading ContaiHead={ContaiHead}>{containerHeading}</TopHeading>*/}
                    <DataRow ImgStart={ImgStart}>
                        <DataColumn>
                            <TextWrapper>
                                <Topline lightTopLine={lightTopLine}>{topsline}</Topline>
                                <Heading lightHeading={lightHeading}>{headingline}</Heading>
                                <SubLine lightdisc={lightdisc}>{discription} <span>Read More...</span></SubLine>
                                <Button big={big} col={col} primary={primary}>Get started</Button>
                            </TextWrapper>
                          
                        </DataColumn>
                       
                            <ImgWrapper start={start}>
                                 <Img src={img} alt={alt} />
                            </ImgWrapper>
                           
                    </DataRow>
                   
                </Container>

        
            </DataBloc>
        </>
    );
};
export default DataBlock;

// constant Style components properties   /////

const DataBloc = styled(Container)`
color: #fff;
padding: 100px 0;
background: ${({ lightBg }) => ( lightBg ?
'#fff' : '#101522' )};



`;

const DataRow = styled.div`
display: flex;
margin: 0px -15px -15px -15px;
flex-wrap: wrap;
align-item: center;
flex-direction: ${({ ImgStart }) => (ImgStart ? 'row-reverse' : 'row')}


`
const DataColumn = styled.div`
 margin-bottom: 15px;
 margin-right: 15px;
 padding-left: 15px;
 
 flex: 1;
 max-width: 50%;
 flex-basis: 50%;

@media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
    flex-basis: 100%;

};
`;
const TextWrapper = styled.div`
max-width: 540px;
padding-bottom: 60px;
padding-top: 0px;

@media screen and (max-width: 768px){
    padding-bottom: 65px;
};

`;
const Topline = styled.div`
color: ${({lightTopLine}) => (lightTopLine ? '#566573' : '#fff')};
font-size; 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;

`;
const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
color: ${({lightHeading}) => (lightHeading ?  '#17202A' : '#fff')};


`;
const SubLine = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({lightdisc}) => (lightdisc ?  '#212F3D' : '#fff')};

span {
    color: #00D395;
    font-size: 18px;
    cursor: pointer;
}
`;




const ImgWrapper = styled.div`
max-width: 555px;
display: flex;
justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};



`;

const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;



`;


