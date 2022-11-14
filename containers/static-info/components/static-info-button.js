import styled from 'styled-components'

const StaticInfoButton = styled.button`
  background: white;
  border: none;
  font-family: var(--alter-regular);
  font-size: 1.6rem;
  text-align: left;
  padding: 15px;
  color: #454246;
  &:hover{
    cursor: pointer;
    color: #FB5735;
  }
  &:not(:last-child)  {
    border-bottom: solid 1px #dae1e7;
  }
  &.active {
    color: #FB5735;
  }
`

export default StaticInfoButton
