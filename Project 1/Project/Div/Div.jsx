import styled from "styled-components"

let Div = styled.div`
    margin: 0.5rem 0;

  
   &label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  &input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  
  &input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  
`

export default Div