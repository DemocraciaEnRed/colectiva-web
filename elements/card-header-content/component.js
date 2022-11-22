import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UserAvatar from '../user-avatar/component'

const Wrapper = styled.div`
  width: ${(props) => props.hasImage ? '100%' : '90%'};
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:autos;
  padding:20px;
  box-sizing: border-box;
  @media (max-width:700px){
    width:100%;
  }
`
const TagTitle = styled.div`
margin-top:28px;
font-size:1.2rem;
text-transform:uppercase;
text-align:left;
color:#FB5735;
padding-bottom:1rem;
`

const StatusTag = styled.div`
  position: absolute;
  top: ${(props) => props.hasImage ? '86px' : '0px'};
  right: 0;
  font-size: 1.1rem;
  text-transform: uppercase;
  background-color: #ffff66;
  color: black;
  padding: 5px 5px 5px 15px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  font-weight: 800;
`

const Title = styled.div`
  margin-top:28px;
  font-size:2.7rem;
  line-height: 3.1rem;
  word-break: break-word;
  color:#4C4C4E;
  text-align:left;
  font-family: var(--bold);
  padding-bottom:2rem;
  @media (max-width:700px){
    margin-top:10px;
  }
  `

const ClosingDate = styled.div`
  font-size:12px;
  color: #7e7e7e;
  letter-spacing: .5px;

`

const TextWrapper = styled.div`
@media (max-width:700px){
  margin-left:65px;
}
`

const HrWrapper = styled.div`
width: 65px;
margin-top:1.1rem;
margin-left:65px;
border-top:1px solid #4C4C4E;

`

const croppedTitle = (title) => title.slice(0, 42).concat('...')

const formatDate = (createdAt) => {
  return (createdAt.substring(0, 10).split('-').reverse().join('/'))
}

const CardHeaderContent = ({ hasImage, authorId, tagTitle, title, userId, name, status, role, party, closingDate }) => (
  <Wrapper hasImage={hasImage}>
    { status && <StatusTag hasImage={hasImage}>{status}</StatusTag> }
    <UserAvatar
      userId={userId}
      name={name}
      party={false}
      role={role}
      authorId={authorId} />
    <HrWrapper />
    <TextWrapper>
      { tagTitle &&
        <TagTitle>{tagTitle}</TagTitle>
      }
      <Title>{title} </Title>
      <ClosingDate>Fecha de cierre: {formatDate(closingDate)}</ClosingDate>

    </TextWrapper>
  </Wrapper>
)

CardHeaderContent.propTypes = {
  hasImage: PropTypes.bool,
  title: PropTypes.string.isRequired,
  tagTitle: PropTypes.string,
  userId: PropTypes.string,
  name: PropTypes.string.isRequired,
  party: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired
}

export default CardHeaderContent
