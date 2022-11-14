import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../components/static-info-title'
import StaticInfoBold from '../components/static-info-bold'
import StaticInfoP from '../components/static-info-p'

const StyledDiv = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <section>
    <StaticInfoTitle>Acerca de</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoBold>
        ¿Qué es Colectiva?
      </StaticInfoBold>
      <StaticInfoP>
        El país pide un cambio político que nos permita hacerle frente a la crisis económica, de desigualdad, climática y de futuro.
      </StaticInfoP>
      <StaticInfoP>
        Hoy tenemos frente a nosotras la oportunidad de entrar al Congreso y que nunca sea un espacio cerrado, alejado, inalcanzable e impenetrable que tome en nuestro nombre las decisiones que afectan nuestra vida cotidiana.
      </StaticInfoP>
      <StaticInfoP>
        Desde Artemisas creemos que no hay otra forma posible de construir el país que queremos sin que sea de manera COLECTIVA.
      </StaticInfoP>
      <StaticInfoP>
        Colectiva es la primera plataforma feminista en Latinoamérica para discutir, construir y movilizarnos alrededor de las iniciativas que afectarán la vida de las  niñas, jóvenes, mujeres y personas #LGBTIQ+ de nuestro país.
      </StaticInfoP>


    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Por qué participar?
      </StaticInfoBold>
      <StaticInfoP>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        Alianzas
      </StaticInfoBold>
      <StaticInfoP>
        <strong>La cocreación de propuestas de ley rompe con la forma tradicional de legislar</strong> donde un equipo de políticos, profesionales y técnicos elaboran los proyectos de ley. <strong>Cocrear supone abrir y federalizar ese proceso y crear un espacio en el que se encuentran las y los legisladores con la ciudadanía</strong>, la academia, las organizaciones de la sociedad civil y personas especializadas en las temáticas que se están discutiendo.
      </StaticInfoP>
    </StyledDiv>
  </section>
)
