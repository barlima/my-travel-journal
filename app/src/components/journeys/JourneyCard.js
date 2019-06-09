import React from 'react';
import styled from 'styled-components';
import { Card, Image, Dropdown, Reveal } from 'semantic-ui-react';

const Wrapper = styled.div`
display: flex;
justify-content: center;
margin: 10px;
width: calc(100%/3 - 20px);
`

const GreenSpan = styled.span`
color: ${p => p.theme.colors.darkGreen}
`

const Extra = styled.div`
display: flex;
justify-content: space-between;
`

const JourneyCard = ({ journey }) => {
  const options = [
    { key: 'edit', icon: 'edit', text: 'Edit', value: 'edit' },
    { key: 'delete', icon: 'delete', text: 'Delete', value: 'delete' },
  ]

  return (
    <Wrapper>
      <Card fluid>
        <Reveal animated='fade'>
          <Reveal.Content visible>
            <Image src='https://picsum.photos/1000/1000' />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src='https://picsum.photos/1002/1002' wrapped />
          </Reveal.Content>
        </Reveal>
        <Card.Content>
          <Card.Header>{journey.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{ '10 Jun 2019' }</span>
          </Card.Meta>
          <Card.Description>
            Poland, Slovakia, Chechia
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Extra>
            <GreenSpan>
              22 Likes
            </GreenSpan>
            <Dropdown
              labeled
              text={' '}
              icon='ellipsis horizontal'
              direction='left'
              options={options}  
            />
          </Extra>
        </Card.Content>
      </Card>
    </Wrapper>
  )
}

export default JourneyCard;