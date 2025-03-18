export const Contact = () => {

   const handleSubmit = (formData) => {
      const formInputData = Object.fromEntries(formData.entries());
    
   }
   return (
      <>
         <div className="contact-container">
            <h2>Contact Us</h2>
            <form action={handleSubmit} className="contact-form">
               <div>
                  <label>Name:</label>
                  <input
                     type="text"
                     name="name"
                     
                     
                     placeholder="Enter your name"
                  />
               </div>
               <div>
                  <label>Email:</label>
                  <input
                     type="email"
                     name="email"
                     
                     
                     placeholder="Enter your email"
                  />
               </div>
               <div>
                  <label>Message:</label>
                  <textarea
                     name="message"
                     
                     
                     placeholder="Enter your message"
                  />
               </div>
               <button type="submit">Send Message</button>
            </form>
         </div>
      </>
   );
}