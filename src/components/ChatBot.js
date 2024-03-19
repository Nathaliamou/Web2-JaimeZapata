import React, { useState } from 'react';
import Message from './Message';
import './ChatBot.css'; // Importa el archivo de estilos CSS para el ChatBot




const ChatBot = () => {
  const [messages, setMessages] = useState([]);

  const handleUserMessage = (text) => {
    if (!text) {
        setMessages(prevMessages => [...prevMessages, { text: "Disculpa, Ingresa de nuevo la información", isUser: false }]);
        return;
    }
    setMessages(prevMessages => [...prevMessages, { text, isUser: true }]);

    let botResponse;
    switch (text.toLowerCase()) {
        case 'hola':
        botResponse = 'Bienvenido(a) a Cesde, para nosotros es un gusto atenderte, indica tu número de documento, por favor...';
        break;
      case '53146069':
        botResponse = ' Hola Nathalia! un placer saludarte, ingresa tu correo personal para enviarte nuestra conversación, al final de la llamada';
        break;
      case 'orozco.nathalia@gmail.com':
        botResponse = 'Elija un servicio marcando el número: 1.-Cartera, 2.-Horarios, 3.-Matriculas, 4.-Fecha de Inicio, 5.- Becas, 6.-Grupos Cerrados';
        break;
        case '6':
        botResponse = 'Si eres de grupo cerrado, te invitamos a actualizar tus datos, correo y contraseña';
        break;
        case '5':
        botResponse = 'Si eres beneficiario de becas y/o auxilios Comfama, puedes estudiar todas las técnicas laborales ofertadas por Cesde, que son un total de 33 programas. Puedes familiarizarte con la oferta académica y las sedes donde se pueden estudiar en www.cesde.edu.co';
        break;
        case '3':
        botResponse = 'Los datos de tu matricula recuerda fecha de pago 12032024, asiento e matricula 20032024, estado activo';
        break;
        case '4':
        botResponse = 'Claro!, recuerda que la fecha de inicio del periodo es el 06 de febrero del 2024';
        break;
      case '2':
        botResponse = 'te corresponde jornada "Noche", los horarios son  de 6 a 9 pm';
        break;
        case '1':
        botResponse = 'En cartera estamos contentos de atenderte, ingresa las opcion "credito" para que veas el estado de tu crédito';
        break;
        case 'credito':
        botResponse = 'No Aprobado, nosotros te llamamos, sigue intentando,muchas gracias! te esperamos pronto...';
        break;
        case 'Notas':
        botResponse = 'Puedes consultar tus notas en el siguiente enlace: https://diamante.cesde.edu.co/registro/estudiante/wfNotasCompetencias.aspx';
        break;
        case 'Escuelas':
        botResponse = 'Puedes conocer las escuelas en el siguiente enlace: https://www.cesde.edu.co/escuelas/';
        break;
        case 'contenido':
        botResponse = 'Puedes acceder al contenido de tus materias en el siguiente enlace: https://edigital.cesde.edu.co/login/index.php';
        break;
        case 'matricula':
        botResponse = 'Puedes ver tu matrícula en el siguiente enlace: https://diamante.cesde.edu.co/Matriculas/';
        break;
        default:
        botResponse = 'Lo siento, no entendí eso. ¿En qué puedo ayudarte?';
        break;
    }
    
    setMessages(prevMessages => [...prevMessages, { text: botResponse, isUser: false }]);
  };

  return (
    <div className="chatbot-container">
       <h1>Hola, Soy Cesdy! tu Chatbot...</h1>
      <div className="header">
       
        <img src="../assets/1.jpg"  className="Chatbot-Icon" />
      </div>
      <div className="messages-container">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} isUser={message.isUser} />
        ))}
      </div>
      <input
        type="text"
        placeholder="Escribe aquí..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleUserMessage(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
  
  
};

export default ChatBot;


