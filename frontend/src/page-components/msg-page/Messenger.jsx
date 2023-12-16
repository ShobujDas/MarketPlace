import { useEffect, useState } from "react";
import SectionTitle from './../../components/SectionTitle';
import { FaPaperPlane } from "react-icons/fa6";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { getChat, getMsg } from "../../helpers/api";
import ChatCards from "../../components/cards/ChatCards";
import io from 'socket.io-client'

const Messenger = () => {
  
  const socket = io.connect('http://localhost:5000')
  let data = JSON.parse(sessionStorage.getItem('user'))
  let token = Cookies.get('token')

  const navigate = useNavigate()

  if (data == null || token == null){
    navigate('/login', {replace: true})
  }


  const [receiever, setReceiever] = useState("")
  const [senders, setSenders] = useState([])
  const [msg, setMsg] = useState({
    senderId: data._id,
    receiverId: "",
    text: ""
  })
  const [msgTo, setMsgTo] = useState({})
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null)

  // get chats
  useEffect(() => {
    (async () => {
      let result = await getChat()
      if (result) {
        setSenders(result)
      }
    })()
  }, [receiever])


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

  // receive msg
  useEffect(() => {

    socket.on('receive-message', (data) => {
      setMessages(prevMessages => [...prevMessages, data]);
    })

  }, [socket])

  // setting receiver
  let settingReceiever = (receieverID) => {
    setReceiever(receieverID)
    setMsg({ ...msg, ['receiverId']: receieverID })
    socket.emit('join-room', data._id)
  }
  
  // send message
  let sendMsg = async (e) => {
    e.preventDefault()

    socket.emit('send-message', {msg, receiever})

    setMessages(prevMessages => [...prevMessages, msg]);
    setMsg({ ...msg, ['text']: "" })
  }


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

                {senders.length > 0 && <ChatCards data={senders} sender={settingReceiever}/>}
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="chat-box">

                <div className="chat-box-header border-bottom border-1 py-2 px-3">
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

                <div className="show-chat px-3" id="show-chat">
                  {
                    messages.length == 0 && <p className="text-center fw-bold text-black-50 fs-3">Chat will be shown here</p>
                  }
                  {
                    messages.length > 0 && messages.map((e, index) => {
                      return (e.receiverId == data._id ? <p className="received" key={index}>{e.text}</p> : <p className="sent" key={index}>{e.text}</p>)
                    })
                  }
                </div>

                {/* chat form */}
                <div className="chat-form border-top border-1">
                  <form action="" onSubmit={sendMsg}>
                    <div className="input-group">
                      <input type="text" className="form-control" value={msg.text} onChange={(e) => setMsg({...msg,['text']: e.target.value})} placeholder="Type your message" required minLength={2} />
                      <span className="input-group-text">
                        <button type="submit" className="sender-btn"><FaPaperPlane /></button>
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