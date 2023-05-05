import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UserAvatar from '../user-avatar/component'
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash'
import Icon from 'react-icons-kit/Icon'

const Wrapper = styled.div`
  width: ${(props) => props.hasImage ? '100%' : '90%'};
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:auto;
  padding:20px;
  padding-top: ${(props) => props.hasStatusButNoImage ? '40px' : '20px'}
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

// const StatusTag = styled.div`
//   position: absolute;
//   top: ${(props) => props.hasImage ? '86px' : '0px'};
//   right: 0;
//   font-size: 1.1rem;
//   text-transform: uppercase;
//   background-color: #ffff66;
//   color: black;
//   padding: 5px 5px 5px 15px;
//   border-top-left-radius: 15px;
//   border-bottom-left-radius: 15px;
//   font-weight: 800;
// `

const StatusTagImage = styled.img`
  position: absolute;
  top: ${(props) => props.hasImage ? '80px' : '0px'};
  right: 0;
  height: 33px;
`

const Title = styled.div`
  margin-top:15px;
  font-size:2.7rem;
  line-height: 2.8rem;
  word-break: break-word;
  color:#000;
  text-align:left;
  font-family: var(--bold);
  padding-bottom:1rem;
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

const CardHeaderContent = ({ hasImage, authorId, tagTitle, title, userId, name, status, role, avatarUrl, party, closingDate, privateProject }) => (
  <Wrapper hasImage={hasImage} hasStatusButNoImage={status && !hasImage}>
    {/* { status && <StatusTag hasImage={hasImage}>{status}</StatusTag> } */}
    { status && <StatusTagImage src={`/static/assets/states/${status}.svg`} hasImage={hasImage} /> }
    <UserAvatar
      userId={userId}
      name={name}
      party={false}
      role={role}
      avatarUrl={avatarUrl}
      authorId={authorId} />
    <HrWrapper />
    <TextWrapper>
      { tagTitle &&
        <TagTitle>{tagTitle}</TagTitle>
      }
      <Title>{title} </Title>
      <ClosingDate>Fecha de cierre: {formatDate(closingDate)}</ClosingDate>
      {
        privateProject && <div><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', margin: '10px 0px', backgroundColor: '#222', padding: '2px 8px', width: 'fit-content', borderRadius: '5px' }}
        >
          <Icon icon={eyeSlash} size={20} style={{ color: '#FB5735', marginRight: '5px' }} />
          <p style={{fontSize: '13px', color: '#FFF', fontWeight: '600'}}>
            PROYECTO PRIVADO
          </p>
        </div></div>
      }

    </TextWrapper>
  </Wrapper>
)

CardHeaderContent.propTypes = {
  hasImage: PropTypes.bool,
  title: PropTypes.string.isRequired,
  tagTitle: PropTypes.string,
  userId: PropTypes.string,
  role: PropTypes.string,
  avatarUrl: PropTypes.string,
  status: PropTypes.string,
  name: PropTypes.string.isRequired,
  party: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired
}

export default CardHeaderContent
