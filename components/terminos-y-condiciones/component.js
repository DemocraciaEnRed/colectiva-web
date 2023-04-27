import React from 'react'
import styled from 'styled-components'
import jump from 'jump.js'

import StaticInfoTitle from '../../containers/static-info/components/static-info-title'
import StaticInfoBold from '../../containers/static-info/components/static-info-bold'
import StaticInfoP from '../../containers/static-info/components/static-info-p'
import StaticInfoList from '../../containers/static-info/components/static-info-list'
import StaticInfoWrapper from '../../containers/static-info/components/static-info-wrapper'
import StaticInfoNav from '../../containers/static-info/components/static-info-nav'
import StaticInfoButton from '../../containers/static-info/components/static-info-button'

const StyledStaticInfo = styled.div`
  display: flex;
  justify-content: center;
  background-image: url('/static/assets/header-background.jpg');
  background-repeat: no-repeat;
`
const buttons = [
  {
    name: 'Descripción',
    value: '#descripcion'
  },
  {
    name: 'Inscripción en la Plataforma Web',
    value: '#inscripcion-en-plataforma'
  },

  {
    name: 'Usuarios, obligaciones y condiciones',
    value: '#usuaries-obligaciones-condiciones'
  },

  {
    name: 'Actividades Prohibidas',
    value: '#actividades-prohibidas'
  },

  {
    name: 'Moderación de las iniciativas',
    value: '#moderacion-iniciativas'
  },


]

const scroll = (target) => (e) => {
  jump(target)
}

export default () => (
  <StyledStaticInfo>
    <StaticInfoWrapper>
      <section>
        <StaticInfoTitle>
        Términos y Condiciones
        </StaticInfoTitle>
        <div id="descripcion">
          <StaticInfoBold>
            Descripción
          </StaticInfoBold>
          <StaticInfoP>
            Estimado/a usuario/a:
          </StaticInfoP>
          <StaticInfoP>
            VAMOS EN COLECTIVO es un sitio web que promueve la democracia deliberativa y participativa, para la creación y generación de espacios de colaboración para co-diseñar y co-producir valor público. 
          </StaticInfoP>
          <StaticInfoP>
            Al acceder y brindar sus datos personales, los/as usuarios/as aceptan los Términos y Condiciones que regulan el uso de esta plataforma, de conformidad con lo establecido en la Ley Estatutaria 1581 de 2012 y su Decreto Reglamentario 1377 de 2013. 
          </StaticInfoP>
          <StaticInfoP>La finalidad es salvaguardar el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar la información que se haya recogido sobre ellas en bases de datos o archivos.</StaticInfoP>
          <StaticInfoP>El registro y uso de la plataforma por parte de los/as usuarios/as indica la aceptación absoluta de los Términos y Condiciones presentes y de la Política de Privacidad.</StaticInfoP>
          <StaticInfoP>Esta plataforma fue creada y administrada por la Fundación Artemisas, una organización feminista radicada en Bogotá, Colombia que trabaja por la construcción del poder colectivo a través de herramientas y metodologías de innovación política, y el fortalecimiento de la sociedad civil a través del posicionamiento, la visibilización, la articulación, la ampliación y la irrupción de agendas democráticas y liderazgos democráticos.</StaticInfoP>
          <StaticInfoBold>
            PRINCIPIOS RECTORES
          </StaticInfoBold>
          <StaticInfoP>
            De acuerdo con el artículo 4 de la Ley 1581 de 2012, para la aplicación de la ley se deberán aplicar los siguientes principios, sobre protección de datos:
          </StaticInfoP>
          <StaticInfoP>
            a) Principio de legalidad en materia de Tratamiento de datos: El Tratamiento a que se refiere la presente ley es una actividad reglada que debe sujetarse a lo establecido en ella y en las demás disposiciones que la desarrollen.
          </StaticInfoP>
          <StaticInfoP>
            b) Principio de finalidad: El Tratamiento debe obedecer a una finalidad legítima de acuerdo con la Constitución y la Ley, la cual debe ser informada a los/as usuarios/as.                
          </StaticInfoP>
          <StaticInfoP>
            c) Principio de libertad: El Tratamiento sólo puede ejercerse con el consentimiento, previo, expreso e informado de los/as usuarios/as. Los datos personales no podrán ser obtenidos o divulgados sin previa autorización, o en ausencia de mandato legal o judicial que releve el consentimiento.
          </StaticInfoP>
          <StaticInfoP>
            d) Principio de veracidad o calidad: La información sujeta a Tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible. Se prohíbe el Tratamiento de datos parciales, incompletos, fraccionados o que induzcan a error. 
          </StaticInfoP>
          <StaticInfoP>
            e) Principio de transparencia: En el tratamiento debe garantizarse el derecho de los/as usuarios/as obtener del Responsable del Tratamiento o del Encargado del Tratamiento, en cualquier momento y sin restricciones, información acerca de la existencia de datos que le conciernan. 
          </StaticInfoP>
          <StaticInfoP>
            f) Principio de acceso y circulación restringida: El Tratamiento se sujeta a los límites que se derivan de la naturaleza de los datos personales, de las disposiciones de la presente ley y la Constitución. En este sentido, el Tratamiento sólo podrá hacerse por personas autorizadas por el usuario y/o por las personas previstas en la presente ley;          
          </StaticInfoP>
          <StaticInfoP>
            Los datos personales, salvo la información pública, no podrán estar disponibles en Internet u otros medios de divulgación o comunicación masiva, salvo que el acceso sea técnicamente controlable para brindar un conocimiento restringido sólo a los Titulares o terceros autorizados conforme a la presente ley;
          </StaticInfoP>
          <StaticInfoP>
            g) Principio de seguridad: La información sujeta a Tratamiento por el Responsable del Tratamiento o Encargado del Tratamiento a que se refiere la presente ley, se deberá manejar con las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento;        
          </StaticInfoP>          
          <StaticInfoP>
            h) Principio de confidencialidad: Todas las personas que intervengan en el Tratamiento de datos personales que no tengan la naturaleza de públicos están obligadas a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el Tratamiento, pudiendo sólo realizar suministro o comunicación de datos personales cuando ello corresponda al desarrollo de las actividades autorizadas en la presente ley y en los términos de la misma.
          </StaticInfoP>          
          <StaticInfoBold>
            RESPONSABLE DEL TRATAMIENTO
          </StaticInfoBold>
          <StaticInfoP>
            El responsable del tratamiento de datos personales es la Fundación Artemisas, NIT. 900.973.847-0, domiciliada en la ciudad de Bogotá, en la Cll. 95 #71-11, correo electrónico organizacionartemisas@gmail.com 
          </StaticInfoP>
        </div>
        <div id="inscripcion-en-plataforma">
          <StaticInfoBold>
             Inscripción en la plataforma web
          </StaticInfoBold>
          <StaticInfoP>
            El acceso al Sitio Web es libre y gratuito. Requiere inscripción previa a través de un formulario que deberá ser validado por la administración del sitio.
          </StaticInfoP>
          <StaticInfoP>
            La información personal suministrada por el o la usuario/a,  al momento de inscribirse en el Sitio Web, estará protegida con una clave que sólo podrá ser modificada por el propio usuario. El Sitio Web se reserva el derecho de realizar validaciones en relación a la información brindada por el o la  Usuario/a al momento de la inscripción. 
          </StaticInfoP>          
          <StaticInfoP>
            En caso que la información brindada no pueda validarse, el Administrador se reserva el derecho de no dar de alta a ese usuario. El Sitio Web está destinado únicamente a usuarios mayores de 18 años, de modo que cualquier registro de uso o acceso al Sitio Web por cualquier menor de esa edad no está autorizado. El usuario deberá garantizar y declarar que cumple con la mayoría de edad. Por su parte, el Administrador deslinda su responsabilidad en el caso de no ser veraz la información suministrada al respecto.
          </StaticInfoP>          
          <StaticInfoP>
            Al momento de la inscripción el o la  usuario/a asume el compromiso y la responsabilidad de:
          </StaticInfoP>          
          <StaticInfoP>
            <ul>
              <li><StaticInfoP>No proporcionar información personal falsa ni crear cuentas a nombre de terceros sin su autorización.</StaticInfoP></li>
              <li><StaticInfoP>No crear más de una cuenta personal.</StaticInfoP></li>
              <li><StaticInfoP>No crear otra cuenta sin permiso expreso del Administrador, en caso de que este último haya inhabilitado la cuenta original.</StaticInfoP></li>
              <li><StaticInfoP>Mantener la información de contacto exacta y actualizada.</StaticInfoP></li>
              <li><StaticInfoP>No compartir la contraseña ni permitir a otra persona acceda a su cuenta.</StaticInfoP></li>
              <li><StaticInfoP>Se compromete a notificar al Administrador ante cualquier uso no autorizado de su clave.</StaticInfoP></li>
            </ul>
          </StaticInfoP>          
          <StaticInfoP>
            El Administrador se reserva el derecho de rechazar cualquier solicitud de inscripción o de cancelar un registro previamente aceptado.
          </StaticInfoP>       
        </div>
        <div id="usuaries-obligaciones-condiciones">
          <StaticInfoBold>
            Usuarios, obligaciones y condiciones
          </StaticInfoBold>
          <StaticInfoP>
            El Usuario deberá respetar estos Términos y Condiciones de Uso del Sitio Web. Las infracciones por acción u omisión de los presentes Términos y Condiciones de Uso generarán el derecho a favor del Administrador de suspender al Usuario que las haya realizado.
          </StaticInfoP>
          <StaticInfoP>
            El o la usuario/a  es el único responsable del contenido que suba, publique o muestre en el Sitio Web, garantizando que el mismo no infringe derechos de terceros ni los Términos y Condiciones de Uso ni viola ninguna ley, reglamento u otra normativa. 
          </StaticInfoP>
          <StaticInfoP>
            El o la usuario/a  entiende y acepta que el material y/o contenido que suba y/o publique podría ser utilizado por otros/as usuarios/as del Sitio Web y/o por terceras personas ajenas, y que el Administrador del Sitio Web no será responsable en ningún caso por tales utilizaciones.
          </StaticInfoP>
          <StaticInfoP>
            El o la usuario/a se obliga a usar el Sitio Web de conformidad con estos Términos y Condiciones, en forma correcta y lícita. En caso contrario, el Sitio Web podrá retirar el contenido y/o suspender la cuenta de el o la usuario/a, por considerarlo: violatorio de estos Términos y Condiciones y/o de la Política de Privacidad de este Sitio Web, ofensivo, ilegal, violatorio de derechos de terceros, contrario a la moral y buenas costumbres y amenaza la seguridad de otros/as usuarios/as. 
          </StaticInfoP>
          <StaticInfoP>
            Sin embargo, esta posibilidad no implica necesariamente que el contenido de toda la información disponible en el Sitio Web haya sido revisado.
          </StaticInfoP>
          <StaticInfoP>
            El o la usuario/a  responderá por los daños y perjuicios de toda naturaleza que el Sitio Web pueda sufrir, directa o indirectamente, como consecuencia del incumplimiento de cualquiera de las cláusulas derivadas de estos Términos y Condiciones de Uso.
          </StaticInfoP>
          <StaticInfoP>
            El Sitio Web no controla ni garantiza la ausencia de virus u otros softwares de tipo destructivo en el material descargable puesto a disposición por los Usuarios.
          </StaticInfoP>
          <StaticInfoP>
            En relación a los aportes, colaboraciones, comentarios y votaciones que los Usuarios realicen con respecto a las iniciativas propuestas en el Sitio Web, las mismas NO son de carácter vinculante, obligatorio y/o impositivo sobre el documento final.
          </StaticInfoP>
          <StaticInfoP>
            La adecuada utilización de todos los recursos de Internet es, sin excepción, de entera responsabilidad del Usuario del Sitio Web.
          </StaticInfoP>
        </div>
        <div id="actividades-prohibidas">
          <StaticInfoBold>
            Actividades Prohibidas
          </StaticInfoBold>
          <StaticInfoP>
            Las siguientes actividades, sean lícitas o ilícitas, se encuentran expresamente vedadas, sin perjuicio de las prohibiciones generales expuestas anteriormente:
          </StaticInfoP>
          <StaticInfoP>
            <ul>
              <li><StaticInfoP>Hostigar, acosar, amenazar, acechar, realizar actos de vandalismo hacia otros/as usuarios/as.</StaticInfoP></li>
              <li><StaticInfoP>Infringir los derechos a la intimidad de otros/as usuarios/as.</StaticInfoP></li>
              <li><StaticInfoP>Solicitar información personal identificable de otros/as usuarios/as con el propósito de hostigar, atacar, explotar, violar la intimidad de los mismos.</StaticInfoP></li>
              <li><StaticInfoP>Publicar de manera intencionada o con conocimiento injurias o calumnias.</StaticInfoP></li>
              <li><StaticInfoP>Publicar, con el intento de engañar, contenido que es falso o inexacto.</StaticInfoP></li>
              <li><StaticInfoP>Intentar usurpar la identidad de otros/as usuarios/as, representando de manera falsa su afiliación con cualquier individuo o entidad, o utilizar el nombre de otro Usuario con el propósito de engañar.</StaticInfoP></li>
              <li><StaticInfoP>Promover, defender o mostrar pornografía, obscenidad, vulgaridad, blasfemia, odio, fanatismo, racismo y/o violencia. En caso de sufrir alguna de estas situaciones, comunicarse con el Administrador a través de [Nombre de la plataforma]</StaticInfoP></li>
              <li><StaticInfoP>Vulnerar los derechos establecidos en la Ley N° 25.326 de Protección de Datos Personales.</StaticInfoP></li>
            </ul>
          </StaticInfoP>          
        </div>
        <div id="moderacion-iniciativas">
          <StaticInfoBold>
            Moderación de las iniciativas
          </StaticInfoBold>
          <StaticInfoP>
            Cada iniciativa/propuesta publicada en el Sitio Web tendrá un moderador responsable de hacer cumplir estos Términos y Condiciones de uso. El moderador será designado por el organismo creador de la propuesta.
          </StaticInfoP>
          <StaticInfoP>
            Fomentamos un diálogo franco y abierto, pero manteniendo el nivel de la discusión, evitando afrentas a personas o instituciones, material comercial no relacionado (SPAM) u otros desvíos de la intención original del Sitio Web.
          </StaticInfoP>
          <StaticInfoBold>
            TRATAMIENTO Y FINALIDAD        
          </StaticInfoBold>
          <StaticInfoP>
            La Organización Artemisas entiende por protección de datos todas aquellas medidas físicas, técnicas y jurídicas necesarias para garantizar que los datos personales tratados se sometan estrictamente a las finalidades determinadas para poder crear espacios de construcción legislativa entre ciudadanía y representantes populares
          </StaticInfoP>
          <StaticInfoBold>
            1. ¿Qué información personal almacena la Fundación Artemisas a través de VAMOS EN COLECTIVO?    
          </StaticInfoBold>
          <StaticInfoP>
            Para registrar un/a usuario/a y poder interactuar con la plataforma se pide: 
          </StaticInfoP>          
          <StaticInfoP>
            <ul>
              <li><StaticInfoP>Nombre y apellido</StaticInfoP></li>
              <li><StaticInfoP>Edad</StaticInfoP></li>
              <li><StaticInfoP>Departamento</StaticInfoP></li>
              <li><StaticInfoP>Correo electrónico</StaticInfoP></li>
              <li><StaticInfoP>Número de celular</StaticInfoP></li>
            </ul>
          </StaticInfoP>                  
          <StaticInfoBold>
            2. ¿Con qué fines puede utilizar Fundación Artemisas la información personal?
          </StaticInfoBold>
          <StaticInfoP>
            <ul>
              <li><StaticInfoP>La información se utiliza para validar la existencia de un/a usuario/a que desee co-construir iniciativas de ley.</StaticInfoP></li>
              <li><StaticInfoP>La información de contacto permite avisar a los y las usuarios/as cuando las iniciativas cambian de estatus de proceso legislativo</StaticInfoP></li>
              <li><StaticInfoP>La información de contacto permite convocar los y las usuarios/as cuando existan eventos en sus departamentos o relacionados con las iniciativas de ley activas</StaticInfoP></li>
              <li><StaticInfoP>La información de contacto sirve para enviarles información relativa al proyecto COLECTIVA</StaticInfoP></li>
            </ul>
          </StaticInfoP>                    
          <StaticInfoBold>
            DERECHOS DE LOS/AS USUARIOS/AS:
          </StaticInfoBold>
          <StaticInfoP>
            Según lo establecido en el artículo 8° de la Ley Estatutaria 1581 de 2012, los y las usuarios/as de datos personales tendrán derecho a:        
          </StaticInfoP>
          <StaticInfoP>
            a) Conocer, actualizar y rectificar sus datos personales frente a los Responsables del Tratamiento o Encargados del Tratamiento. Este derecho se podrá ejercer, entre otros frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo Tratamiento esté expresamente prohibido o no haya sido autorizado; 
          </StaticInfoP>
          <StaticInfoP>
            b) Solicitar prueba de la autorización otorgada al Responsable del Tratamiento salvo cuando expresamente se exceptúe como requisito para el Tratamiento, de conformidad con lo previsto en el artículo 10 de la presente ley;            
          </StaticInfoP>
          <StaticInfoP>
            c) Ser informado por el Responsable del Tratamiento o el Encargado del Tratamiento, previa solicitud, respecto del uso que le ha dado a sus datos personales;            
          </StaticInfoP>
          <StaticInfoP>
            d) Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo dispuesto en la presente ley y las demás normas que la modifiquen, adicionen o complementen;
          </StaticInfoP>
          <StaticInfoP>
            e) Revocar la autorización y/o solicitar la supresión del dato cuando en el Tratamiento no se respeten los principios, derechos y garantías constitucionales y legales. La revocatoria y/o supresión procederá cuando la Superintendencia de Industria y Comercio haya determinado que en el Tratamiento el Responsable o Encargado han incurrido en conductas contrarias a esta ley y a la Constitución.     
          </StaticInfoP>
          <StaticInfoP>
            f) Acceder en forma gratuita a sus datos personales que hayan sido objeto de Tratamiento. (secretariasenado.gov.co, 2012).
          </StaticInfoP>
          <StaticInfoBold>
            DERECHOS DE LOS/AS USUARIOS/AS:
          </StaticInfoBold>
          <StaticInfoP>
            Según lo establecido en el artículo 8° de la Ley Estatutaria 1581 de 2012, los y las usuarios/as de datos personales tendrán derecho a:        
          </StaticInfoP>
          <StaticInfoP>
            a) Conocer, actualizar y rectificar sus datos personales frente a los Responsables del Tratamiento o Encargados del Tratamiento. Este derecho se podrá ejercer, entre otros frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo Tratamiento esté expresamente prohibido o no haya sido autorizado; 
          </StaticInfoP>
          <StaticInfoP>
            b) Solicitar prueba de la autorización otorgada al Responsable del Tratamiento salvo cuando expresamente se exceptúe como requisito para el Tratamiento, de conformidad con lo previsto en el artículo 10 de la presente ley;            
          </StaticInfoP>
          <StaticInfoP>
            c) Ser informado por el Responsable del Tratamiento o el Encargado del Tratamiento, previa solicitud, respecto del uso que le ha dado a sus datos personales;            
          </StaticInfoP>
          <StaticInfoP>
            d) Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo dispuesto en la presente ley y las demás normas que la modifiquen, adicionen o complementen;
          </StaticInfoP>
          <StaticInfoP>
            e) Revocar la autorización y/o solicitar la supresión del dato cuando en el Tratamiento no se respeten los principios, derechos y garantías constitucionales y legales. La revocatoria y/o supresión procederá cuando la Superintendencia de Industria y Comercio haya determinado que en el Tratamiento el Responsable o Encargado han incurrido en conductas contrarias a esta ley y a la Constitución.     
          </StaticInfoP>
          <StaticInfoP>
            f) Acceder en forma gratuita a sus datos personales que hayan sido objeto de Tratamiento. (secretariasenado.gov.co, 2012).
          </StaticInfoP>
          <StaticInfoBold>
            AUTORIZACIÓN DE LOS/AS USUARIOS/AS
          </StaticInfoBold>
          <StaticInfoP>
            La recolección, almacenamiento, uso, circulación o supresión de datos personales requieren el consentimiento previo y expreso de el o la  USUARIO/A, obtenido desde el momento mismo de la recolección de sus datos. Por consiguiente, la Fundación Artemisas, como responsable del tratamiento de la información personal contenida en sus bases de datos, ha dispuesto los mecanismos necesarios para que los titulares puedan acceder a los datos personales que estén bajo tratamiento y, así mismo, ejerzan a satisfacción sus derechos.
          </StaticInfoP>
          <StaticInfoBold>
            MECANISMOS PARA OTORGAR LA AUTORIZACIÓN            
          </StaticInfoBold>
          <StaticInfoP>
            La autorización para el tratamiento de datos personales la otorga el o la usuario/a  por medio escrito, de forma oral o a través de cualquier mecanismo idóneo que permita concluir inequívocamente con que se otorgó la autorización. Fundación Artemisas garantiza la protección de los principios de finalidad y libertad de los/as usuarios/as, pues la recolección de los datos sólo se limitará a aquellos de carácter personal que son adecuados para la finalidad para la cual han sido recolectados y utilizados.
          </StaticInfoP>
          <StaticInfoBold>
            PRUEBA DE LA AUTORIZACIÓN            
          </StaticInfoBold>
          <StaticInfoP>
            Fundación Artemisas adoptará e implementará las medidas o mecanismos necesarios para conservar prueba de cómo y cuándo obtuvo la autorización por parte del titular para el tratamiento de sus datos personales.
          </StaticInfoP>
          <StaticInfoBold>
            ACEPTACIÓN DE LA POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES                            
          </StaticInfoBold>
          <StaticInfoP>
            Se entiende que el o la usuario/a acepta el tratamiento de su información personal, según los términos dispuestos en esta Política de Tratamiento de Información, cuando proporciona sus datos a través de cualquiera de los canales dispuestos en las redes sociales del Instituto, a sus funcionarios y/o en las instalaciones de la organización.
          </StaticInfoP>
          <StaticInfoBold>
            ATENCIÓN DE PETICIONES, CONSULTAS Y RECLAMO
          </StaticInfoBold>
          <StaticInfoP>
            Fundación Artemisas dispone de un área responsable para la atención de las consultas, peticiones y reclamos (PQR), en donde el o la usuario/a de la información puede de igual forma ejercer sus derechos a conocer, actualizar, rectificar y suprimir información que se encuentre en nuestras bases de datos o archivos, como uno de los procedimientos para el adecuado tratamiento de los datos personales.
          </StaticInfoP>
          <StaticInfoBold>
            PERSONAS A QUIENES SE LES SUMINISTRA INFORMACIÓN        
          </StaticInfoBold>
          <StaticInfoP>
            La información que reúna las condiciones establecidas en la ley podrá ser suministrada solamente a los/as usuarios/as, sus causahabientes o sus representantes legales, los cuales deberán acreditar su identidad, su representación o apoderamiento respectivamente. A las entidades públicas o administrativas en ejercicio de sus funciones o a los terceros autorizados por el titular o la ley.
          </StaticInfoP>
          <StaticInfoBold>
            TRANSFERENCIA Y TRANSMISIÓN INTERNACIONAL DE DATOS PERSONALES          
          </StaticInfoBold>
          <StaticInfoP>
            La Fundación Artemisas realiza convenios con diferentes entidades, organizaciones y sociedades, a nivel mundial, facilitando el intercambio de procesos de formación política, cultural y social, articulación de procesos desde la sociedad civil y liderazgos individuales, en donde se proporciona información personal propendiendo ante todo por salvaguardar la seguridad de las bases de datos en las que se contengan datos personales, así como guardar confidencialidad respecto de su tratamiento. De este modo, otorga una protección adecuada a los datos personales de los titulares de la información, promoviendo y fomentando los lazos de cooperación con la comunidad política y científica nacional e internacional.                    
          </StaticInfoP>
          <StaticInfoBold>
            PROCEDIMIENTOS PARA EL EJERCICIO DE LOS DERECHOS DE LOS USUARIOS
          </StaticInfoBold>
          <StaticInfoP>
            La información personal que reposa en las bases de datos o archivos del Instituto podrá ser consultada o reclamada por el o la usuario/a de la información o sus causahabientes a través de los siguientes mecanismos estipulados en el artículo 14 de la Ley 1581 de 2012:
          </StaticInfoP>           
          <StaticInfoP>
            1. Consulta    
          </StaticInfoP>                     
          <StaticInfoP>
            Es el mecanismo mediante el cual se puede consultar la información personal de el o la usuario/a , por el medio habilitado por la Fundación Artemisas. La consulta será atendida en un término máximo de diez (10) días hábiles a partir de la fecha de recibo de la solicitud; si no fuera posible atenderla, se informarán los motivos de la demora y se señalará la fecha en la cual se atenderá la consulta, la cual no superará los cinco (5) días hábiles siguientes al vencimiento del primer término en la cual fue recibida.                    
          </StaticInfoP>                     
          <StaticInfoP>
            2. Reclamos                
          </StaticInfoP>                     
          <StaticInfoP>
            Es el mecanismo por medio del cual se puede solicitar la corrección, actualización o supresión de la información personal contenida en una base de datos o cuando se señale el presunto incumplimiento de los deberes consagrados en la ley. El reclamo se deberá presentar ante la Organización Artemisas, describiendo los hechos que dan lugar a la reclamación, la identificación de el o la usuario/a  de la información, su dirección y los documentos que se quieran hacer valer.
          </StaticInfoP>                     
          <StaticInfoP>
            Hecha la petición, la evaluaremos, y si es el caso, requeriremos a el o la interesado/a  para que en un término de cinco (5) días subsane las fallas presentes en su reclamo. Si no se presenta la información dentro de los dos (2) meses siguientes a la petición se entenderá que se desistió del reclamo.        
          </StaticInfoP>                     
          <StaticInfoP>
            Si la petición está completa, incluiremos su reclamo dentro de nuestra base de datos. Este será atendido en un término máximo de quince (15) días hábiles a partir de la fecha en la que se recibió. Si no fuera posible atender en ese lapso de tiempo el reclamo, se darán a conocer los motivos de la demora y se señalará la fecha en la cual se atenderá, la cual no superará los ocho (8) días hábiles siguientes al vencimiento del primer término en la cual fue recibida.
          </StaticInfoP>             
          <StaticInfoBold>
            VIGENCIA
          </StaticInfoBold>
          <StaticInfoP>
            La presente política de tratamiento de información entra en vigencia a partir del día de su publicación. Los datos almacenados, utilizados o transmitidos permanecerán depositados en las bases de datos, físicas o digitales, con base en el criterio de temporalidad y necesidad, durante el tiempo que sea necesario, en cumplimiento de las obligaciones legales y/o contables o en todo evento previsto en la ley.            
          </StaticInfoP>  
          <StaticInfoBold>
            NOTIFICACIÓN POR CAMBIOS EN EL AVISO O EN LA POLÍTICA
          </StaticInfoBold>
          <StaticInfoP>
            Cualquier cambio en el Aviso de Privacidad o en la Política de Tratamiento de la Información, se notificará al correo electrónico que el titular ingresó en el formulario de registro físico o virtual; y será publicado en los canales informativos del Instituto; con acceso directo a los textos completos. 
          </StaticInfoP>  
                                                        
        </div>


      </section>
      <StaticInfoNav>
        {buttons.map((button, i) => (
          <StaticInfoButton
            onClick={scroll(button.value)}
            key={i}>
            {button.name}
          </StaticInfoButton>
        ))}
      </StaticInfoNav>
    </StaticInfoWrapper>
  </StyledStaticInfo>
)
