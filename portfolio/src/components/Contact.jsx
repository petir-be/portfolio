import {useState} from 'react';

import emailIcon from "../assets/public/email.png";
import phoneIcon from "../assets/public/telephone.svg";
import facebookIcon from "../assets/public/facebook.svg";


function Contact() {

    const [result, setResult] = useState("");
    const [firstname, setFirstname] = useState("");
    const [surname, setSurname] = useState("");
    const subject = "New message from " + firstname + " " + surname;

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dd55bc39-def3-45da-8f37-687d2c2a4dc0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      window.location.reload(true);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

  };


    return (
        <>
            <div id = "contact" class="flex flex-col md:flex-row justify-center gap-15 w-full  mx-auto px-11 md:px-4 py-24 bg-gradient-to-br from-slate-100 to-neutral-300">
                {/* <h1 class="text-5xl font-bold text-center mb-8">Contact Me</h1> */}
                <div class = "text-left flex flex-col">
                    <h1 class="text-5xl font-bold">Get in Touch!</h1>
                    <p class = "my-3 text-xl">Feel free to reach out for collaborations or just a friendly hello!</p>
                    <div class = "flex flex-row items-center gap-3 my-1">
                        <img src={emailIcon} alt="" class = "iconImages" />
                        <p class = "text-lg">kurtie.ereno12@gmail.com</p>
                    </div>
                    <div class = "flex flex-row items-center gap-3 my-1">
                        <img src={phoneIcon} alt="" class = "iconImages" />
                        <p class = "text-lg">+63 9055601605</p>
                    </div>
                    <div class = "flex flex-row items-center gap-3 my-1">
                        <img src={facebookIcon} alt="" class = "iconImages" />
                        <p class = "text-lg">Kurt Ereño</p>
                    </div>
                </div>

                <div class="flex flex-row justify-center w-full max-w-2xl justify-self-center">
                    <form class="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit = {onSubmit}>
                        <div class="flex flex-col sm:flex-row flex-wrap gap-4 mb-4">
                            <input type="hidden" name="from_name" value={`${firstname} ${surname}`.trim()}></input>
                            <input type="hidden" name="subject" value={`${subject}`}></input>
                            <div class="inputField flex-1">
                                <label htmlFor="Name">
                                    First Name
                                </label>
                                <input name="Name" type="text" required placeholder="First name" value = {firstname} onChange ={e => setFirstname(e.target.value)}/>
                            </div>
                            <div class="inputField flex-1">
                                <label htmlFor="Surname" class="text-gray-700 text-sm font-bold mb-2">
                                    Last Name
                                </label>
                                <input name="Surname" type="text" required placeholder="Last name" value = {surname} onChange ={e => setSurname(e.target.value)}/>
                            </div>
                        </div>
                        <div class="inputField mb-4">
                            <label htmlFor="Email">
                                Email Address
                            </label>
                            <input name="Email" type="email" required placeholder="you@example.com"/>
                        </div>
                        <div class="inputField mb-6">
                            <label htmlFor="Message">
                                How can I help?
                            </label>
                            <textarea name="Message" required placeholder="Type your message here..." rows={5} />
                        </div>
                        <div class="flex items-center justify-center">
                            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white cursor-pointer font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Contact;