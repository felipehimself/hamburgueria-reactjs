import styled from "styled-components"

interface IProps {
  margin?: string
}

export const Container = styled.main<IProps>`

  max-width: 120rem;
  margin: ${(props)=> props.margin? props.margin : '0 auto' };
  padding: 0 2rem;

`