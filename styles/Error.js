import styled from 'styled-components';

const Error = styled.div`
   display: table-cell;
   width: 200px;
   height: 30px;
   border: 2px solid #3A374C;
   border-radius: 20px;
   padding: 10px;
   background-color: black;
   position: absolute;
   top: 104%;
   left: 15%;
   margin-right: -50%;
   text-decoration: none;
   color: #766AD0;
   border: 1px solid #3A374C;
   font-size: 14px;
   font-weight: 700;
   white-space: nowrap;
   visibility: ${state => state ? "visible" : "hidden"};
`;


export {Error}
