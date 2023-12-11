import { useState } from "react";


const ChatCards = ({data, sender}) => {

  const [clicked, setClicked] = useState("")
  let handleClick = (e) => {
    setClicked(e.target.id)
    sender(e.target.id)
  }

  return (
    <div className="py-4">
      {
        data.length > 0 && 
        data.map((e, index) => (
          <div className={`col-12 chat-card mt-2 ${clicked == e._id && "active"}`} key={index} id={e._id} onClick={handleClick}>

            <div className="sender-img">
              <img src={e.img} alt="" />
            </div>

            <h6 className="ms-2 p-0 mb-0">{e.firstName} {e.lastName} {e.serviceName}</h6>

          </div>
        ))
      }
    </div>
  );
};

export default ChatCards;