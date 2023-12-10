import { useEffect, useState } from "react";
import SectionTitle from './../../components/SectionTitle';
import { FaPaperPlane } from "react-icons/fa6";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


const Messenger = () => {

  let data = JSON.parse(sessionStorage.getItem('user'))
  let token = Cookies.get('token')
  const navigate = useNavigate()

  if(data == null || token == null){
    navigate('/login', {replace: true})
  }

  const [sellerId, setSellerId] = useState("655887afc0e4baba0eb5b2c4")
  const [msg, setMsg] = useState({
    receiverId: sellerId,
    text: ""
  })
  const [messeges, setMesseges] = ([])
  const [ws, setWs] = useState(null)

  // useEffect(() => {
  //   connectToSocket()
  // }, [sellerId])

  let connectToSocket = () => {
    let ws = new WebSocket("ws://localhost:5000?token="+token)
    setWs(ws)

    ws.addEventListener('message', handleMessage)
  }

  let handleMessage = (ev) => {
    const messageData = JSON.parse(ev.data);

    console.log({ ev, messageData })

  }

  let sendMsg = (e) => {
    e.preventDefault()

    ws.send(JSON.stringify(msg))
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
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="chat-box">

                {/* chat form */}
                <div className="chat-form">
                  <form action="">
                    <div className="input-group">
                      <input type="text" className="form-control" value={msg.text} onChange={(e) => setMsg({...msg,['text']: e.target.value})} placeholder="Type your message" />
                      <span className="input-group-text">
                        <button className="sender-btn" onClick={sendMsg}><FaPaperPlane /></button>
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