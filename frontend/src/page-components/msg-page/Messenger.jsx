import { useEffect, useState } from "react";
import { flushSync } from 'react-dom';
import SectionTitle from './../../components/SectionTitle';
import { FaPaperPlane } from "react-icons/fa6";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { getChat, getMsg } from "../../helpers/api";
import ChatCards from "../../components/cards/ChatCards";


const Messenger = () => {

  let data = JSON.parse(sessionStorage.getItem('user'))
  let token = Cookies.get('token')
  const navigate = useNavigate()

  if(data == null || token == null){
    navigate('/login', {replace: true})
  }

  const [receiever, setReceiever] = useState("")
  const [senders, setSenders] = useState([])
  const [msg, setMsg] = useState({
    receiverId: receiever,
    text: ""
  })
  const [msgTo, setMsgTo] = useState({})
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null)

  useEffect(() => {
    (async () => {
      let result = await getChat()
      if (result) {
        setSenders(result)
      }
    })()
    connectToSocket()
  }, [receiever])
  
  
  // connnect to webSocket
  let connectToSocket = async () => {
    let ws = new WebSocket("ws://localhost:5000?token="+token)
    setWs(ws)
    ws.addEventListener('message', handleMessage)
    ws.addEventListener('close', () => {
      setTimeout(() => {connectToSocket()}, 1000)
    })
  }

  let handleMessage = (ev) => {
    const messageData = JSON.parse(ev.data);

    console.log({ ev, messageData })

  }

  // sending msg
  let sendMsg = (e) => {
    e.preventDefault()
    msg['receiverId'] = receiever
    ws.send(JSON.stringify(msg))
  }

  // handle receiever
  let handleReceieve = () => {

  }

  // get msgs by user
  useEffect(() => {
    if (receiever != "") {
      (async () => {
        let result = await getMsg(receiever)
        if(result){
          setMessages(result)
          setMsgTo(senders.filter(e => e._id == receiever)[0])
        }
        
      })()
    }
  }, [receiever])
  console.log(messages)
  


  return (
    <section className="my-section ">
      <div className="container">
        
        <SectionTitle title={"Chat with"} titleHighlight={"provider"} text={"Speak with our provider in our own messenger"} />

        {/* chat wrapper */}
        <div className="chat-wrapper">
          <div className="row">

            <div className="col-lg-4 col-md-4">
              <div className="chat-online">
                <h5 className="border-bottom border-1 border-danger pb-3">Your chats</h5>

                {senders.length > 0 && <ChatCards data={senders} sender={setReceiever}/>}
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="chat-box">

                <div className="chat-box-header border-bottom border-1 pb-2">
                  {
                    Object.keys(msgTo).length > 0 ? 
                    <>
                      <div className="sender-img">
                        <img src={msgTo['img']} alt="" />
                      </div>
                      <h6 className="mb-0 ms-2">{msgTo['firstName']} {msgTo['lastName']} {msgTo['serviceName']}</h6>
                    </> : <h6 className="mb-0">Select a chat</h6>
                  }
                  
                </div>

                {/* chat form */}
                <div className="chat-form">
                  <form action="">
                    <div className="input-group">
                      <input type="text" className="form-control" value={msg.text} onChange={(e) => setMsg({...msg,['text']: e.target.value})} placeholder="Type your message" required />
                      <span className="input-group-text">
                        <button type="button" className="sender-btn" onClick={sendMsg}><FaPaperPlane /></button>
                      </span>
                    </div>
                  </form>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Messenger;