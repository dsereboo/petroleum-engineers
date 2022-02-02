const Contact=()=>{
    return (
      <section className="section ">
        <div className="container pl-4">
          <div className="columns">
            <div className="column box py-6 px-5 is-4 mb-2 has-background-black">
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
            <div className="column box is-7 ml-5 mr-0  mb-2 has-background-warning px-6 py-6 contact-form">
              <article>
                <p className="is-size-4 has-text-weight-medium has-text-black mb-4">
                  Contact us
                </p>
              </article>
              <article className="block yellow-light px-2 py-2">
                  <p className="has-text-black">
                    Please fill in your info, we will contact you soon.
                  </p>
              </article>
              <form>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <input
                        className="input"
                        type="text"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="field">
                      <input
                        className="input"
                        type="text"
                        placeholder="Your Contact"
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
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="field-body">
                    <textarea
                      className="textarea"
                      type="text"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button className="button is-black">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contact