import styled from "styled-components";
import bg from '../img/bg.png';

export const Container = styled.div`
padding-top: 1rem;

@media only screen and (max-width : 1200px) {

}

`

export const ContainerPhoto = styled.div`
display: flex;
justify-content: center;
/* margin-top: 5rem; */
background-image: url(${bg});

margin-top: 1rem;
height: 100%;
@media only screen and (max-width : 1200px) {
height: 140%;
}
@media only screen and (max-width : 700px) {

}
@media only screen and (max-width : 640px) {
width: 100%;
margin-top: 5px;
}
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;

/* margin-top: 20px; */
@media only screen and (max-width : 1200px) {
/* padding: 0 2rem 0 2rem; */
}
@media only screen and (max-width : 640px) {
width: 100%;

}



`
export const Nav = styled.div`
display: flex;
align-items: center;
justify-content: center;

@media only screen and (max-width : 700px) {
    margin: 0 2rem 0 2rem;
}
@media only screen and (max-width : 640px) {
display: flex;
margin: 0 1rem 0 1rem;

}

`
export const LogoButton = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
width: 32rem;
margin-right: 32rem;
@media only screen and (max-width : 1200px) {
margin: 0;
}
@media only screen and (max-width : 640px) {
display: flex;
margin: 0;
}

`
export const Logo = styled.img`
width: 12rem;
@media only screen and (max-width : 640px) {
display: flex;
width: 10rem;
}
`
export const Button = styled.div`
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
border-radius: 40px;
height: 45px;
color: white;
width: 220px;
font-family: Gmarket Sans Medium;
font-size: 27px;
/* margin-top: 20px; */
background-color: #0050CD;
:hover{
    background-color: #00C3D5;

}
@media only screen and (max-width : 1200px) {
display: none;
}
`
Button.Mobile = styled.div`
display: none;
@media only screen and (max-width : 1200px) {
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;
border-radius: 40px;
margin-top: 1rem;
height: 50px;
color: white;
width: 16rem;
font-family: Gmarket Sans Medium;
font-size: 27px;
/* margin-top: 20px; */
background-color: #0050CD;
:hover{
    background-color: #00C3D5;

}
}
@media only screen and (max-width : 640px) {
    width: 13rem;
    height: 42px;
    margin-right: 1rem;
    font-size: 20px;
}

`

export const Sns = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 3rem;

width: 110px;
/* margin-right: 10px; */
@media only screen and (max-width : 1200px) {
margin: 0px;

}
@media only screen and (max-width : 640px) {
display: flex;

}
`
Sns.Blog= styled.img`
cursor: pointer;
width: 40px;
@media only screen and (max-width : 640px) {
display: flex;

}
@media only screen and (max-width : 640px) {
display: flex;
width: 35px;
margin-right: 1rem;
}
`
Sns.Insta = styled.img`
cursor: pointer;
width: 40px;
@media only screen and (max-width : 640px) {
display: flex;
width: 35px;
}
`



export const Body = styled.div`
justify-content: space-between;
display: flex;

padding-top: 4rem;
@media only screen and (max-width : 1200px) {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0;
}
`
Body.Right = styled.div`
margin-left: 2rem;
@media only screen and (max-width : 1200px) {
margin-top: -2rem;
margin-left: 0;
@media only screen and (max-width : 640px) {
display: none;

}
}
`
Body.RightMob = styled.div`
display: none;
@media only screen and (max-width : 1200px) {
    display: none;
}
@media only screen and (max-width : 640px) {
display: flex;

}
`

Body.Left = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 2.6rem;
@media only screen and (max-width : 1200px) {
padding: 0 2rem 0 2rem;
margin:0;
margin-left: 2rem;
height: 30rem;
align-items: center;

}
@media only screen and (max-width : 640px) {
display: flex;

height: 26rem;
width: 21rem;
margin-top: 1rem;

}

`


Body.LeftText= styled.div`

`
export const Title = styled.div`
font-family: SFProDisplay Medium;
letter-spacing: 0.7px;
margin-right: 2rem;
color: white;
font-size: 42px;
width: 520px;
display: flex;
justify-content: center;
text-align: center;
text-shadow:1px 2.5px 5px black;


margin-top: 2rem;
@media only screen and (max-width : 640px) {
font-size: 25px;
display: flex;
width: 20rem;
margin-bottom: 1rem;
}

`

export const MiniWrapper= styled.div`
font-family: Noto Sans KR;
display: flex;
align-items: center;
padding-left: 15px;
width: 515px;
height: 50px;
margin-right: 40px;
border-radius: 10px;
background-color: rgba(255,255,255,.5);
p{
    @media only screen and (max-width : 640px) {
    font-size: 13px;
    
}
}

@media only screen and (max-width : 640px) {
display: flex;
width: 21rem;
height: 35px;
margin-left: 1rem;
}
`

MiniWrapper.Icon = styled.img`
width: 20px;
margin:0 1rem 0 2rem;
@media only screen and (max-width : 640px) {
display: flex;
width: 15px;
margin:0 1rem 0 1rem;
}
`
MiniWrapper.Title= styled.div`
font-family: Noto Sans KR;
font-size: 25px;
@media only screen and (max-width : 640px) {
font-size: 17px;
}

`
export const FootTitle = styled.div`
font-family: Noto Sans KR;

margin-top: 19rem;

display: flex;

height: 50px;
font-size: 15px;
color: white;
align-items: center;
justify-content: center;
p{
    font-family: Noto Sans KR;
    margin-right: 30px;
    
}
span{
    font-family: Noto Sans KR;
    margin-right: 30px;
}
@media only screen and (max-width : 1200px) {
height: 4rem;
color: white;
margin-top: -4rem;
font-size: 12px;
p{
    margin-right: 1rem;
}
span{
    margin-right: 1rem;
}
}
@media only screen and (max-width : 840px) {
display: grid;


}
@media only screen and (max-width : 640px) {
display: grid;
margin-top: 1rem;
font-size: 9px;
margin-left: 1rem;
}

`

FootTitle.Left=styled.div`
display: flex;
`
FootTitle.Right = styled.div`
display: flex;
`
export const Icon = styled.img`
width: 20px;
@media only screen and (max-width : 640px) {

width: 18px;

}
`