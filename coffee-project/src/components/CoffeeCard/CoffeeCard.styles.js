import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: #f1e9e1;
  width: 12rem;
  height: 10rem;
  margin: 16px;
  position: relative;
  color: #bd956e;
  transition: 0.4s;

  
&:hover{
  background-color: #743c27;
  color: #cdb399;
  transition: 0.4s;
}
`;

export const FreshContainer = styled.div`
  background-color: #f1e9e1;
  width: 12rem;
  height: 10rem;
  margin: 16px;
  position: relative;
  color: #bd956e;
  transition: 0.4s;

  
&:hover{
  background-color: #555C1C;
  color: #cdb399;
  transition: 0.4s;
}
`;

export const Img = styled.img`
 width: 10rem;
 position: absolute;
 bottom: 2rem;
 right: 12%;

 `;

export const FreshImg = styled.img`
width: 10rem;
position: absolute;
bottom: 2rem;
right: 12%;

`;

export const AddBtn = styled.img`
 width: 36px;
 position: absolute;
 top: 10px;
 right: 8px;
 cursor: pointer;
 transition: 0.5s;

 &:hover{
 transform: rotate(180deg);
 transition: 0.5s;
}

 `;

export const FavBtn = styled.img`
width: 32px;
position: absolute;
top: 48px;
right: 10px;
cursor: pointer;

`;


export const Description = styled.div`
position: absolute;
bottom: 12px;
font-size: 14px;
width: 10rem;
`;

export const Price = styled.span`
position: absolute;
right: 0px;
font-size: 1.1rem;
bottom:20px ;
`;

export const Name = styled.span`
position: absolute;
font-weight: bold;
left: 9px;
bottom:20px;
font-size: 1.2rem;
`;