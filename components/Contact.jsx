import { useState } from "react";
import { AiOutlineExclamationCircle} from "react-icons/ai"
import { IconContext } from "react-icons";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast from "react-hot-toast";

const Contact=(props)=>{

  const form=useRef()
  const initialState={
    name:"",
    contact:"",
    email:"",
    message:"",
  }
  
  const[details,setDetails]=useState(initialState)

  const handleChange=(event)=>{
      setDetails({...details, [event.target.name]:event.target.value})
  }

  const handleSubmit=(event)=>{
      event.preventDefault()
      const sendMaiL=emailjs.sendForm(props.props.service,props.props.template,form.current,props.props.user)
      toast.promise(sendMaiL,{
        loading:"Sending Message",
        success:"Message Sent",
        error:"Error"
      }).then(
        ()=>{  setDetails(initialState)}
      )
    
  }


    return (
      <section className="section has-background-light  " id="contact">
          <div className="columns">
            <div className="column box py-6 px-5 is-4  mb-2 has-background-black contact-details">
              <div className="container is-flex is-justify-content-justify is-align-content-center ">
                <article>
                <div className="mb-6">
                <p className="has-text-warning is-size-4 mb-2">Call us on</p>
                  <p className="has-text-white is-size-4-desktop is-size-5-mobile">+233 (0) 55 510 1447 </p>
                  <p className="has-text-white is-size-4-desktop is-size-5-mobile">+233 (0) 55 300 4495 </p>
                </div>
                  

                  <p className="has-text-warning is-size-4 mb-2">We are available</p>
                  <p className="has-text-white is-size-4-desktop is-size-5-mobile">Monday - Friday</p>
                  <p className="has-text-white is-size-4-desktop is-size-5-mobile">8:00am - 6:30pm</p>
                </article>
              </div>
            </div>
            <div className="column box is-7  mb-2 has-background-warning contact-form">
              <article>
                <p className="is-size-4 has-text-weight-medium has-text-black mb-4">
                  Contact us
                </p>
              </article>
              <article className="block yellow-light px-2 py-2">
                <div className="is-flex is-flex-direction-row  is-align-items-center">
                <IconContext.Provider value={{size:"1.2em"}}>
                      <AiOutlineExclamationCircle className="is-hidden-touch"/>
                  </IconContext.Provider> 
                <p className="has-text-black ml-1">
                    Please fill in your info, we will contact you soon.
                  </p>
                </div>
              </article>
              <form ref={form} onSubmit={handleSubmit}>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <input
                        className="input"
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        onChange={handleChange}
                        value={details.name}
                        required
                      />
                    </div>
                    <div className="field">
                      <input
                        className="input"
                        type="text"
                        placeholder="Your Contact"
                        name="contact"
                        onChange={handleChange}
                        value={details.contact}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="field-body">
                    <input
                      className="input"
                      type="text"
                      placeholder="Your email"
                      name="email"
                      onChange={handleChange}
                      value={details.email}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="field-body">
                    <textarea
                      className="textarea"
                      type="text"
                      placeholder="Message"
                      name="message"
                      onChange={handleChange}
                      value={details.message}
                      required
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button type="submit" className="button is-black">Send Message</button>
                </div>
              </form>
            </div>
          </div>
      </section>
    );
}

export default Contact