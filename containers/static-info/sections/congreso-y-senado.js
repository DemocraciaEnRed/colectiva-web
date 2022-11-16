import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../components/static-info-title'
import StaticInfoBold from '../components/static-info-bold'
import StaticInfoP from '../components/static-info-p'
import StaticInfoImgs from '../components/static-info-imgs'
import StaticInfoImg from '../components/static-info-img'

const StyledDiv = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <section>
    <StaticInfoTitle>Congreso y Senado Colombia</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoBold>
        ¿QUÉ ES EL CONGRESO DE LA REPÚBLICA Y QUÉ FUNCIONES CUMPLE?
      </StaticInfoBold>
      <StaticInfoP>
      "Colombia cuenta con un sistema legislativo bicameral conformado por un Senado y la Cámara de Representantes. Los congresistas son designados por un período de cuatro años que inicia y finaliza cada 20 de junio."
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿QUÉ DIFERENCIAS EXISTEN ENTRE EL SENADO Y LA CÁMARA?
      </StaticInfoBold>
      <StaticInfoP>
        <ul>
            <li><StaticInfoP>La forma como se eligen.</StaticInfoP></li>
            <li><StaticInfoP>Los temas o proyectos que conocen. </StaticInfoP></li>
            <li><StaticInfoP>Los altos funcionarios que se designan. </StaticInfoP></li>
        </ul>
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        Senado de la República:
      </StaticInfoBold>
      <StaticInfoP>
        El Senado se elige con el voto en todo el territorio nacional y se compone por 108 senadores y senadoras, cuyas curules se distribuyen así: 100 electos por circunscripción nacional, dos por circunscripción especial indígena, cinco curules del partido resultado del Acuerdo de Paz y una curul para oposición. 
      </StaticInfoP>      
      <StaticInfoP>
        Entre sus principales funciones: 
      </StaticInfoP>      
      <StaticInfoP>
        <ul>
            <li><StaticInfoP>Admitir las renuncias del Presidente y Vicepresidente de la República.</StaticInfoP></li>
            <li><StaticInfoP>Aprobar o no los ascensos militares.</StaticInfoP></li>
            <li><StaticInfoP>Conceder licencia al presidente para separarse temporalmente del cargo.</StaticInfoP></li>
            <li><StaticInfoP>Permitir el tránsito de tropas extranjeras por territorio nacional.</StaticInfoP></li>
            <li><StaticInfoP>Autorizar declaraciones de guerra del gobierno.</StaticInfoP></li>
            <li><StaticInfoP>Elegir a los magistrados de la Corte Constitucional y al Procurador General de la Nación.</StaticInfoP></li>
        </ul>
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        Cámara de Representantes
      </StaticInfoBold>
      <StaticInfoP>
      La Cámara de Representantes se elige por departamentos y por el Distrito Capital de Bogotá. Actualmente, son 172 representantes, 161 elegidos por voto popular,  cinco del partido resultado del Acuerdo de Paz, dos por representación afrodescendiente, una por representación indígena, una por colombianos en el exterior y una para la oposición. 
      </StaticInfoP>      
      <StaticInfoP>
        Entre sus principales funciones: 
      </StaticInfoP>      
      <StaticInfoP>
        <ul>
            <li><StaticInfoP>Elegir al Defensor del Pueblo.</StaticInfoP></li>
            <li><StaticInfoP>Examinar y fenecer la cuenta general del Presupuesto y del tesoro que presente el Contralor.</StaticInfoP></li>
            <li><StaticInfoP>Acusar ante el Senado al presidente, magistrados de las altas cortes y al Fiscal General de la Nación, en caso de existir razones constitucionales y conocer denuncias y quejas que presente el Fiscal General de la Nación o particulares contra los funcionarios.</StaticInfoP></li>
            <li><StaticInfoP>Requerir el auxilio de otras autoridades para investigaciones y comisionar práctica de pruebas cuando sea necesario.</StaticInfoP></li>
        </ul>
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
      ¿CUÁL ES EL PROCEDIMIENTO PARA DISCUTIR Y APROBAR UNA LEY?
      </StaticInfoBold>  
      <StaticInfoP>
        <ol>
            <li><StaticInfoP>Se presenta una iniciativa de ley.</StaticInfoP></li>
            <li><StaticInfoP>La iniciativa se envía a una comisión para elaborar un primer informe para un primer debate.</StaticInfoP></li>
            <li><StaticInfoP>Primer debate en comisión, si se aprueba en discusión pasa a segundo debate.</StaticInfoP></li>
            <li><StaticInfoP>Ponencia en segundo debate.</StaticInfoP></li>
            <li><StaticInfoP>Debate en plenaria frente a la totalidad de senadurías o representantes dependiendo de la cámara donde sea su discusión. Aquí se puede decidir si se rechaza, si se reenvía a una comisión o si se vota a favor. </StaticInfoP></li>
            <li><StaticInfoP>Si el proyecto se aprueba en la Cámara o el Senado, se envía al otro órgano legislativo (Cámara o Senado) para su discusión y aprobación.</StaticInfoP></li>
            <li><StaticInfoP>Aprobación presidencial. Una vez aprobada la iniciativa por ambas cámaras, se envía a la presidencia de la República para su aprobación o veto.</StaticInfoP></li>            
        </ol>
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoP>
        <img src="/static/assets/images/congreso-senado.jpeg" alt="Infografía sobre el procedimiento para discutir y aprobar leyes" style={{maxWidth: '850px'}} />
      </StaticInfoP>
    </StyledDiv>    

  </section>
)
