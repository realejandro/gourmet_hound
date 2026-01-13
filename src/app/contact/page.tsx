import BasicLayout from '@/layouts/basic/BasicLayout';
import React from 'react'

const ContactFormPage = () => {

  return (
    <BasicLayout>
      <div>
        <fieldset className="fieldset grid-cols-1 lg:grid-cols-2">
          <div className="flex w-[75%] flex-col justify-content gap-5 m-auto">
            <div className="flex flex-col">
              <label className="label">Name</label>
              <input name="username" type="text" className="input w-[100%]" />
            </div>

            <div className="flex flex-col">
              <label className="label">Email</label>
              <input  name="email" type="email" className="input w-[100%]" />
            </div>
        
            <div className="flex flex-col">  
              <label className="label">Message</label>
              <input  name="message" type="text" className="input w-[100%] h-26" />
            </div>

            <div className="flex">
              <button className="btn btn-wide bg-[#91A488] w-50 text-white hover:bg-[#ffffff] hover:text-[#91A488] mt-10">
                  Submit
              </button>
            </div>
          </div>

          <div className="flex w-[100%] h-[50vh] mt-10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.0523647511504!2d-0.21709992312252785!3d51.475553113029015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f48a37c692b%3A0x7dc7584b86f35646!2sGourmet%20Hound!5e0!3m2!1ses!2sus!4v1748625213764!5m2!1ses!2sus" 
              width="100%" 
              height="100%" 
              style={{ border:0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </fieldset>
      </div>
    </BasicLayout>
  )
}

export default ContactFormPage;