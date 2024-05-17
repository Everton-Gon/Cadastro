import styled from "styled-components";
import Background from '../../assets/bg_image.svg'


export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
/* min-width: 414px; */
height: 100%;
min-height: 100vh;
`
export const Image = styled.img`
margin-top: 30px;
`
export const ContainerItens = styled.div`
height: 100%;
border-radius: 61px 61px 0px 0px;
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
backdrop-filter: blur(45px);
padding: 50px 36px;
display: flex;
flex-direction: column;
min-height: calc(100vh - 170px);
`

export const Titulo = styled.h1`
color: #ffffff;
font-size: 34px;
font-weight: 700;
line-height: 40px;
text-align: center;
font-style: normal;
margin-bottom: 80px;
`
// export const Label = styled.p`
// color: #eeeeee;
// font-size: 18px;
// line-height: 22px;
// font-weight: 700;
// font-style: normal;
// letter-spacing: -0.408px;
// margin-left: 25px;
// `
// export const Input = styled.input`
// color: #ffffff;
// font-style: normal;
// font-size: 20px;
// font-weight: 400;
// line-height: 28px;

// border: none;
// outline: none;
// width: 342px;
// height: 58px;
// padding-left: 25px;
// margin-bottom: 34px;
// background: rgba(255,255,255,0.25);
// box-shadow: 0px 4px 4px  rgba(0,0,0,0.25);
// border-radius: 14px;

// `
export const Button = styled.button`
width: 342px;
height: 74px;
margin-top: 120px;

background: transparent;
border-radius: 14px;
border: 1px solid #ffffff;


font-style: normal;
font-size: 17px;
font-weight: 700;
line-height: 28px;
text-align: center;
color: #ffffff;

cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;


&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}

img{
    transform: rotateY(180deg);
}
`
export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;
background: rgba(255,255,255,0.25);
box-shadow: 0px 4px 4px  rgba(0,0,0,0.25);
border-radius: 14px;
border: none;
outline: none;
width: 342px;
height: 58px;
p{
    color: #ffffff;
    font-style: normal;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
}

button{
    background: none;
    border: none;
    cursor: pointer;
}
`
