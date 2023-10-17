import React, { useState } from "react";
import { BiMapAlt } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({ objective: "Hire" });

  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleMail = (event) => {
    event.preventDefault();
    const config = {
      //SecureToken: "b82993cc-dacc-4100-8dcd-607de7a8fe6f",
      Host: "smtp.elasticemail.com",
      Username: "guggillamanohar@gmail.com",
      Password: "E4D47D186D5851F27528CAD65BF9B6CF05E1",
      To: "guggillamanohar@gmail.com",
      From: "g.v.manohar3@gmail.com",
      Subject: "Mail from Portfolio",
      Body:
        "UserName:" +
        formData.Username +
        "<br/> Email:" +
        formData.emailaddress +
        "<br/> Objective:" +
        formData.objective +
        "<br/> Message:" +
        formData.message,
    };
    if (window.Email) {
      window.Email.send(config).then((message) => {
        alert(message);
        setFormData({
          objective: "Hire",
          Username: "",
          emailaddress: "",
          message: "",
        });
      });
      console.log(formData);
      console.log("Button Clicked");
    }
    console.log("Button Clicked");
  };
  return (
    <div
      className="h-fit min-h-screen w-[100%] mx-auto flex flex justify-center items-center bg-gradient-to-b  from-[#1c1e26] relative "
      id="contact"
    >
      {/* ABSOLUTE */}

      <div className="h-[50vh] w-[25vh] flex justify-start items-center z-0 absolute overflow-hidden right-0 top-[-12%]">
        <div className="h-[50vh] w-[50vh] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#ffffff30] absolute flex justify-center items-center  opacity-[1]">
          <div className="h-[40vh] w-[40vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
          <div className="h-[30vh] w-[30vh] rounded-[50%] bg-[#00f0]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
        </div>
      </div>

      <div className="absolute text-[#f0f0f069] bottom-10 sm:right-24 right-[10px] sm:-translate-y-0 -translate-y-[100px] z-20">
        <p>Built with 🙂 Passion by</p>
        <p className="" style={{ fontFamily: "Courgette" }}>
          G.V.Manohar
        </p>
      </div>
      {/* Main Contact DIV */}
      <div className="w-[95vw] h-fit mx-auto p-[2.5vw]">
        <h3 className="text-[1.5rem] text-[#fff] font-[MainFont] font-bold py-3">
          Contact:
        </h3>
        <div>
          <div className=" w-[100%] h-fit mx-auto p-[2.5vw] flex flex-row-reverse max-[1225px]:flex-col justify-between items-center">
            <div className=" pb-[35px] h-fit w-[50%] max-[1225px]:w-[100%] relative flex justify-center items-center">
              <form
                className="form w-[100%] max-w-[590px] mx-auto py-14 flex flex-col gap-3 relative z-20 justify-center"
                onSubmit={handleMail}
              >
                <div className="flex flex-row justify-center">
                  <div className="flex flex-col w-[50%]">
                    <label className="text-[#fff] text-[0.65rem] font-semibold mb-2 translate-x-4">
                      YOUR NAME <span className="text-yellow">*</span>
                    </label>
                    <input
                      className="w-[90%] h-[35px] rounded-[18px] focus:outline-[#ffffff00] bg-[#111117] border-[1px] border-[#fff] text-[#fff] p-3 text-[0.7rem]"
                      type="text"
                      required
                      style={{ border: "1px solid #ccc", color: "white" }}
                      name="Username"
                      value={formData.Username}
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div className="flex flex-col w-[50%]">
                    <label className="text-[#fff] text-[0.65rem] font-semibold mb-2 translate-x-4 ">
                      YOUR MAIL ADDRESS <span className="text-yellow">*</span>
                    </label>
                    <input
                      className="w-[90%] h-[35px] rounded-[18px] focus:outline-yellow bg-[#111117] border-[1px] border-[#fff] text-[#fff] p-3 text-[0.7rem]"
                      type="email"
                      name="emailaddress"
                      value={formData.emailaddress}
                      onChange={changeHandler}
                      required
                    ></input>
                  </div>
                </div>
                <label className="text-[#fff] text-[0.65rem] font-semibold translate-x-4">
                  SELECT OBJECTIVE <span className="text-yellow">*</span>
                </label>
                <select
                  className="w-[95%] h-[35px] rounded-[18px] focus:outline-yellow bg-[#111117] border-[1px] border-[#fff] text-[#fff] px-3 text-[0.7rem]"
                  required
                  name="objective"
                  value={formData.objective}
                  onChange={changeHandler}
                >
                  <option value="Hire" className="hover:bg-yellow text-[#fff]">
                    Hire
                  </option>
                  <option
                    value="Freelance"
                    className="hover:bg-yellow text-[#fff]"
                  >
                    Freelance
                  </option>
                  <option
                    value="Collaboration"
                    className="hover:bg-yellow text-[#fff]"
                  >
                    Collaboration
                  </option>
                  <option value="Other" className="hover:bg-yellow text-[#fff]">
                    Other
                  </option>
                </select>
                <label className="text-[#fff] text-[0.65rem] font-semibold translate-x-4 ">
                  MESSAGE
                </label>
                <textarea
                  className="w-[95%] h-[100px] rounded-[20px] focus:outline-yellow bg-[#111117] border-[1px] border-[#fff] text-[#fff] p-3 text-[0.7rem] z-10"
                  required
                  name="message"
                  onChange={changeHandler}
                  value={formData.message}
                ></textarea>

                <div className=" w-full flex justify-end">
                  <button
                    className="w-[170px] h-[35px] rounded-[50px] mt-5  text-textcolor  text-[0.65rem] mr-8 px-5 border border-[1px] border-white  flex flex-row items-center justify-around duration-300 bg-yellow hover:bg-[#ffffff00]"
                    type="submit"
                  >
                    SEND MESSAGE
                  </button>
                </div>

                <div className="h-[20vh] w-[20vh]  flex justify-center items-center absolute scale-50 sm:scale-100 sm:top-[55%] sm:left-[-10%] top-[55%] left-[-70px] z-0">
                  <div className="h-[20vh] w-[20vh] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#ffffff6c] absolute  opacity-[1]"></div>
                  <div className="h-[16vh] w-[16vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#ffffff79] absolute opacity-[1]"></div>
                  <div className="h-[10vh] w-[10vh] rounded-[50%] bg-[#00f0]  border-[1px] border-[#ffffff70] absolute opacity-[1]"></div>
                </div>
              </form>
            </div>
            <div className=" h-fit w-fit relative flex justify-start items-center">
              <div className="h-[385px] w-[385px] flex justify-center items-center  z-10">
                <div className="h-[350px] w-[350px] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#faf8f859] absolute z-0"></div>

                <div className="h-[280px] w-[280px] rounded-[50%] bg-[#ff00]  border-[1px] border-[#faf8f859] absolute z-0"></div>

                <div className="h-[200px] w-[200px] rounded-[50%] bg-[#00f0]  border-[1px] border-[#faf8f859] absolute z-0"></div>

                {/*  */}
                <div className="flex flex-row  justify-start items-center absolute top-[10%] min-[1225px]:left-[50%] left-[40%] gap-3">
                  <button className="h-[35px] w-[35px] rounded-[50%] bg-yellow  border-[1px] border-[#ffffff75] opacity-[1]  flex justify-center items-center">
                    <BiMapAlt className="text-[#fff]"></BiMapAlt>
                  </button>
                  <div className=" text-[#fff]">
                    <p>Address</p>
                    <p className="text-[0.65rem]">Hyderabad, Talangan, India</p>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center absolute top-[25%] min-[1225px]:left-[75%] left-[15%] gap-3">
                  <button className="h-[35px] w-[35px] rounded-[50%] bg-yellow  border-[1px] border-[#ffffff75] opacity-[1]  flex justify-center items-center">
                    <IoMdContact className="text-[#fff]"></IoMdContact>
                  </button>
                  <div className="text-[#fff]">
                    <p>Contact</p>
                    <p className="text-[0.65rem]">+917780633848</p>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center absolute top-[45%] min-[1225px]:left-[82%] left-[10%] gap-3">
                  <button className="h-[35px] w-[35px] rounded-[50%] bg-yellow  border-[1px] border-[#ffffff75] opacity-[1] flex justify-center items-center">
                    <AiOutlineMail className="text-[#fff]"></AiOutlineMail>
                  </button>
                  <div className=" text-[#fff]">
                    <p>Mail</p>
                    <p className="text-[0.65rem]">
                      venkatamanoharguggilla@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
