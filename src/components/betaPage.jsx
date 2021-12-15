import React from 'react'
import './beta.css';
import { Body, Button, Container, ContainerPhoto, FootTitle, Icon, Logo, LogoButton, MiniWrapper, Nav, Sns, Title, Wrapper } from './BetaStyle';
import blog from '../img/blog.svg'
import insta from '../img/insta.svg'
import logo from '../img/logoblue.svg';
import doc from '../img/doc.svg';
import search from '../img/search.svg';
import like from '../img/like.svg';
import down from '../img/down.svg'
import intro from '../Video/intro.mp4'

export const BetaPage = () => {
    return (
    <Container>
        <Nav className="py-6 px-4 phone:p-6 laptop:py-10 laptop:px-8">
            <LogoButton className="md:max-w-10">
            <Logo src={logo} className=""/>
            <Button className="" alt="" onClick={()=> window.open("https://docs.google.com/forms/d/e/1FAIpQLSel-AdWg2DzFfRBt8gUhpaBlgZ1h-sPWIvmOMMle2wLN6_ljQ/viewform", "_blank")}>캠핑카 추천 받기</Button>
            </LogoButton>
            <Sns>
                <Sns.Blog src={blog}  alt="" onClick={()=> window.open("https://blog.naver.com/campedia_official", "_blank")}/>
                <Sns.Insta src={insta}  alt="" onClick={()=> window.open("https://www.instagram.com/campedia_official/", "_blank")}/>
            </Sns>
        </Nav>
        <ContainerPhoto className="py-6 px-4 phone:p-6 laptop:py-10 laptop:px-8">     
        <Wrapper>
        
        <Body>
           
            <Body.Left>
                {/* <Body.LeftText> */}
                    <Title className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1">캠피디아에서 맞춤 캠핑카를 대신 찾아드립니다!</Title>
                <MiniWrapper>
                    <p>STEP 1</p>
                    <MiniWrapper.Icon src={doc}/>
                    <MiniWrapper.Title>
                    원하는 캠핑카 사양 작성하기 
                    </MiniWrapper.Title>
                </MiniWrapper>
                <Icon src={down}/>
                <MiniWrapper>
                    <p>STEP 2</p>
                    <MiniWrapper.Icon src={search}/>
                    <MiniWrapper.Title>
                    전국 700여 개의 제작업체 비교
                    </MiniWrapper.Title>
                </MiniWrapper>
                <Icon src={down}/>
                <MiniWrapper>
                    <p>STEP 3</p>
                    <MiniWrapper.Icon src={like}/>
                    <MiniWrapper.Title>
                    맞춤 캠핑카 추천
                    </MiniWrapper.Title>
                    
                </MiniWrapper>
                <Button.Mobile className="" alt="" onClick={()=> window.open("https://docs.google.com/forms/d/e/1FAIpQLSel-AdWg2DzFfRBt8gUhpaBlgZ1h-sPWIvmOMMle2wLN6_ljQ/viewform", "_blank")}>캠핑카 추천 받기</Button.Mobile>
           
                {/* </Body.LeftText> */}

            </Body.Left>
            <Body.Right>
            <video src={intro}  loop muted autoPlay controls width="600" height="460" controls></video>
            </Body.Right>
            <Body.RightMob>
            <video src={intro}   loop muted autoPlay controls width="350" height="260" controls></video>
            </Body.RightMob>
        </Body>
        <FootTitle className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1">
                <FootTitle.Left>
                <p>
                캠피디아 (상호명:아워밴) 
                </p>
                <span>
                대표: 전근배
                </span>
                <p>
                campedia.official@gmail.com
                </p>
                </FootTitle.Left>
                <FootTitle.Right>
                <p>
                사업자등록번호: 489-35-01072
                </p>
                <p>
                주소: 부산 금정구 금강로 271 - 5 해산빌딩 809호
                </p>
                </FootTitle.Right>
                </FootTitle>
        </Wrapper>
        </ContainerPhoto>
        </Container>
    )
}


export default BetaPage;