import React from "react";
import styled from 'styled-components';
import emailjs from 'emailjs-com';

// ------------------ SVG -------------------
  import qr_svg from './svg/qrcode_logo_2.svg';
  import link_svg from './svg/icon_stamp_web_link.svg';
  import insta_svg from './svg/icon_stamp_instagram.svg';
  import phone_svg from './svg/icon_stamp_telephone.svg';
  import mail_svg from './svg/icon_stamp_email.svg';
  import bullet_svg from './svg/bullet.svg';
// ----------- end of SVG -------------------
//
// ------------ Variables -------------------
  import {color_blue, color_red} from './variables/colors.js';
  import {color_gray_letter} from './variables/colors.js';
  import {color_gray_shadow} from './variables/colors.js';
  import {color_white} from './variables/colors.js';
  import {nav_width, screen_size_sm as mobile_screen} from './variables/sizes.js';
// ----- end of Variables -------------------
//
// --------------- Styles ------------------- // here - do this
  const ContactWrapper = styled.div`
    display: flex;
    @media screen and (min-width: ${mobile_screen}){
      flex-direction: row;
      justify-items: start;
    }
    @media screen and (max-width: 1075px){
      flex-direction: column-reverse;
      justify-items: start;
    }
    @media screen and (max-width: ${mobile_screen}){
      overflow-x: hidden;
      flex-direction: column-reverse;
      align-items: center;
    }
  `;
  const FormWrapper = styled.div`
    width: min-content;
    height: min-content;
    padding: 20px;
    @media screen and (max-width: 1075px){
      padding: 0px 20px 20px 20px;
    }
    @media screen and (max-width: ${mobile_screen}){
      justify-content: center;
      padding: 0px 20px 20px 20px;
      width: calc(100vw - 40px);
    }
  `;
  const NameAndLocation = styled.div`
    width: max-content;
    height: min-content;
    padding-left: 15px;
    .name {
      & > span {
        & > img {
          width: 10px;
          padding-right: 5px;
        }
      }
    }
    & > p {
      font-size: 1.2em;
      .pin {
        font-size: 0.75em;
        font-style: normal;
      }
    }
  `;
  const Form = styled.form`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid ${color_gray_shadow};
    background-color: ${color_white};
    box-shadow: 8px 5px ${color_gray_shadow};
    display:flex;
    flex-direction: column;
    @media screen and (min-width: ${mobile_screen}){
      max-width: 500px;
      @media screen and (max-width: 750px){
        max-width: calc( ( 100vw - ${nav_width} ) - 60px)
      }
    }
    @media screen and (max-width: ${mobile_screen}){
      width: calc(100vw - 60px);
    }
  `;
  const Input = styled.input`
    font-family: goudosi;
    padding: 5px;
    font-size: 1.3em;
    font-style: italic;
    width:400px;
    margin-bottom: 10px;
    border: 1px solid ${props => props.alert_color};
    @media screen and (min-width: ${mobile_screen}){
      @media screen and (max-width: 750px){
        max-width: calc( ( 100vw - ${nav_width} ) - 70px)
      }
    }
    @media screen and (max-width: ${mobile_screen}){
      width: calc(100vw - 70px);      
    }
  `;
  const TextArea = styled.textarea` 
    resize: vertical;
    font-family: goudosi;
    font-style: italic;
    padding: 5px;
    font-size: 1.3em;
    width: 400px;
    margin-bottom: 20px;
    height: 200px;
    border: 1px solid ${props => props.alert_color};
    @media screen and (min-width: ${mobile_screen}){
      @media screen and (max-width: 750px){
        max-width: calc( ( 100vw - ${nav_width} ) - 70px)
      }
    }
    @media screen and (max-width: ${mobile_screen}){
      width: calc(100vw - 70px);      
    }
  `;
  const Send = styled.input`
    cursor: pointer;
    border: 1px solid ${color_gray_shadow};
    background-color: ${color_white};
    font-family: goudosi;
    font-size: 1.3em;
    font-style: italic;
    width: 412px;
    color: ${color_gray_letter};
    :hover { 
      color: black;
    }
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 1px;
    height: 38px;
    @media screen and (min-width: ${mobile_screen}){
      @media screen and (max-width: 750px){
        max-width: calc( ( 100vw - ${nav_width} ) - 58px)
      }
    }
    @media screen and (max-width: ${mobile_screen}){
      width: calc(100vw - 58px);      
    }
  `;

  Input.defaultProps = {
    alert_color: color_gray_shadow,
  }
  TextArea.defaultProps = {
    alert_color: color_gray_shadow,
  }
  

  const Meishi = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 20px 20px 20px 0px;
    display: grid;
    grid-template-areas:
    'qrcode'
    'info ';
    grid-template-rows: min-content min-content;
    grid-template-columns: min-content;
    @media screen and (max-width: 1075px){
      padding: 20px 20px 20px 20px;
    }
    @media screen and (max-width: ${mobile_screen}){
      justify-content: center;
      padding: 20px 20px 20px 20px;
      width: 100vw;
    }
  `;
  const QRCode = styled.div`
    grid-area: qrcode;
    display: flex;
    padding-bottom: 3px;
    height: min-content;
    justify-content: center;
    border-top: 1px solid ${color_gray_shadow};
    border-left: 1px solid ${color_gray_shadow};
    border-right: 1px solid ${color_gray_shadow};
    box-shadow: 8px 8px ${color_gray_shadow};
    background-color: ${color_blue};
    @media screen and (min-width: ${mobile_screen}){
      max-width: 300px;
      & > img {
        align-self: end;
        width: 422px;
      }
    }
    @media screen and (max-width: ${mobile_screen}){
      width: calc(100vw - 40px);
      & > img {
        align-self: end;
        width: calc(100vw - 42px);
      }
    }
  `;
  const Info = styled.div`
    grid-area: info;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    border-bottom: 1px solid ${color_gray_shadow};
    border-left: 1px solid ${color_gray_shadow};
    border-right: 1px solid ${color_gray_shadow};
    box-shadow: 8px 5px ${color_gray_shadow};
    background-color: ${color_white};
    height: min-content;
    & > ul {
      & > li {
        & > div {
          align-content: center;
          position: relative;
          padding: 2% 0px 0px 10%;
          & > a {
            & > img {
              width: 11%;
              margin: 0px 6% 0px 0px;
              display: inline-block;
              vertical-align: middle;
            }
          }
          & > p {
            display: inline-block;
            color: ${color_gray_letter};
            font-family: goudosi;
            font-size: 1.5em;
            font-style: italic;
            vertical-align: middle;
            & > a {
              color: ${color_gray_letter};
              text-decoration: none;
            }
          }
        }      
      }
    }
    @media screen and (min-width: ${mobile_screen}){
      max-width: 300px;
    }
    @media screen and (max-width: ${mobile_screen}){
      width: calc(100vw - 40px);
      & > ul {
        & > li {
          & > div {
            & > p {
              font-size: min(2.15em, 7.25vw);
            }
          }
        }
      }
    }
  `;
// -------- end of Styles -------------------

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_email: '',
      message: '',
      messageSent: false,  // here - add something to show the user it is sent
      sendingMessage: false, // here - add something to show the user it is sending the message
      alertNameEmpty: false,
      alertEmailEmpty: false,
      alertMessageEmpty: false,
    };
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.messageInput = React.createRef();
  };



  sendEmail = (e) => {
    e.preventDefault();
    
    let continue_ = true;

    if (this.state.user_name === '') {
      continue_ = false; // here - add something to show the user it is empty
      this.setState({alertNameEmpty: true});
      setTimeout(() => {
        this.setState({alertNameEmpty:false});
      }, 500);
    }
    if (this.state.user_email === '') {
      continue_ = false; // here - add something to show the user it is empty
      this.setState({alertEmailEmpty: true});
      setTimeout(() => {
        this.setState({alertEmailEmpty:false});
      }, 500);
    }
    if (this.state.message === '') {
      continue_ = false; // here - add something to show the user it is empty
      this.setState({alertMessageEmpty: true});
      setTimeout(() => {
        this.setState({alertMessageEmpty:false});
      }, 500);
    } 
    if (continue_) {
      this.setState({sendingMessage: true});
    }
    if (continue_) {
      emailjs.sendForm('service_06t9psg', 'template_exk6s4t', e.target, 'user_mb2IzjsCYXLdhMsSTzCkM')
        .then((result) => {
            console.log(result.text);
            this.setState({messageSent: true, sendingMessage: false});
            this.handleClear();
            setTimeout(() => {
              this.setState({messageSent: false});
            }, 1500);
        }, (error) => {
            console.log(error.text);
        });
    }
  };

  handleClear() {
    this.setState({
      ...this.state,
      user_name: '',
      user_email: '',
      message: '',
    });
    this.nameInput.current.value=this.state.user_name;
    this.emailInput.current.value=this.state.user_email;
    this.messageInput.current.value=this.state.message;
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    return(
      <ContactWrapper>
        <FormWrapper>
          <Form className="contact-form" onSubmit={this.sendEmail}>
            <Input 
                    type="text" 
                    name="user_name" 
                    placeholder="nome" 
                    onChange={this.handleChange} 
                    value={this.state.user_name}
                    ref={this.nameInput}
                    alert_color={this.state.alertNameEmpty ? color_red : color_gray_shadow}/>
            <Input  
                    type="email" 
                    name="user_email" 
                    placeholder="email@exemplo.com"
                    onChange={this.handleChange} 
                    value={this.state.user_email}
                    ref={this.emailInput}
                    alert_color={this.state.alertEmailEmpty ? color_red : color_gray_shadow}/>
            <TextArea 
                    name="message" 
                    placeholder="mensagem..." 
                    onChange={this.handleChange}
                    value={this.state.message}
                    ref={this.messageInput}
                    alert_color={this.state.alertMessageEmpty ? color_red : color_gray_shadow}/>
            <Send type="submit" value={this.state.sendingMessage ? "enviando" : this.state.messageSent ? "enviado!!" : "enviar"} />
          </Form>
          <NameAndLocation>
            <p className ='name'>
             <span><img src={bullet_svg} alt='list bullet icon'/></span>
              Maisa Kashima
            </p>
            <p className = 'location'>
             <span className='pin'>📍</span> Curitiba, Brasil
            </p>
          </NameAndLocation>
        </FormWrapper>
        <Meishi>
          <QRCode>
            <img src={qr_svg} alt='qr code with logo' className='qrcode'/>
          </QRCode>
          <Info>
            <ul>
              <li>
                <div>
                  <a href="https://api.whatsapp.com/send?phone=5521967099963" target="_blank" rel="noopener noreferrer"><img src={phone_svg} alt='phone icon' className='phone'/></a>
                  <p><a href="https://api.whatsapp.com/send?phone=5521967099963" target="_blank" rel="noopener noreferrer">(21) 96709 9963</a></p>
                </div>
              </li>
              <li>
                <div>
                  <a href="mailto:studio@mkashima.com" target="_blank" rel="noopener noreferrer"><img src={mail_svg} alt='email icon' className='email' /></a>
                  <p><a href="mailto:studio@mkashima.com" target="_blank" rel="noopener noreferrer">studio@mkashima.com</a></p>
                </div>
              </li>
              <li>
                <div>
                  <a href="https://www.instagram.com/mkashima/" target="_blank" rel="noopener noreferrer"><img src={insta_svg} alt='instagram icon' className='insta'/></a>
                  <p><a href="https://www.instagram.com/mkashima/" target="_blank" rel="noopener noreferrer">@mkashima</a></p>
                </div>
              </li>
              <li>
                <div>
                  <a href="http://www.mkashima.com" target="_blank" rel="noopener noreferrer"><img src={link_svg} alt='weblink icon' className='weblink'/></a>
                  <p><a href="http://www.mkashima.com" target="_blank" rel="noopener noreferrer">www.mkashima.com</a></p>
                </div>
              </li>
              <li><div></div></li>
              <li><div></div></li>
              <li><div></div></li>
            </ul>
          </Info>
        </Meishi>
      </ContactWrapper>
    );
  }
}

export default Contact;