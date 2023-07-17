import { FormEvent, useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

import { CaretRight, PaperPlaneTilt } from "@phosphor-icons/react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

import { StyledContact } from "./styles";

export function Contact() {
   const form = useRef<HTMLFormElement>(null);

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [projectDescription, setProjectDescription] = useState("");

   const sendEmail = (e: FormEvent) => {
      e.preventDefault();

      emailjs
         .sendForm(
            "service_i4lv4zc",
            "template_u15b3jc",
            // @ts-ignore: Unreachable code error
            form.current,
            "jhHr7J9gVYYXBdXrd"
         )
         .then(
            (result: EmailJSResponseStatus) => {
               setName("");
               setEmail("");
               setProjectDescription("");
            },
            (error: EmailJSResponseStatus) => {
               console.log(error.text);
            }
         );
   };

   return (
      <StyledContact className="section" id="contact">
         <h2 className="section-title">Contate-me</h2>
         <span className="section-subtitle">Entrar em contato comigo</span>

         <div className="contact-container container grid">
            <div className="contact-content">
               <h3 className="contact-title">Fale comigo</h3>

               <div className="contact-info">
                  <div className="contact-card">
                     <MdMarkEmailRead />

                     <h3>Email</h3>
                     <span>denis.moreira98@outlook.com</span>

                     <a
                        href="mailto:alisonsantoso22@gmail.com"
                        className="contact-button"
                        target="_blank"
                     >
                        Escrever para mim
                        <CaretRight weight="bold" />
                     </a>
                  </div>

                  <div className="contact-card">
                     <FaWhatsapp />

                     <h3>Whatsapp</h3>
                     <span>{"(81) 98614-0352"}</span>

                     <a
                        href="https://wa.me/5581986140352"
                        className="contact-button"
                        target="_blank"
                     >
                        Conversar no whatsapp
                        <CaretRight weight="bold" />
                     </a>
                  </div>

                  <div className="contact-card">
                     <FaLinkedin />

                     <h3>Linkedin</h3>
                     <span>Denis Moreira</span>

                     <a
                        href="https://www.linkedin.com/in/denis-moreira-6888991a2/"
                        className="contact-button"
                        target="_blank"
                     >
                        Contato no linkedin
                        <CaretRight weight="bold" />
                     </a>
                  </div>
               </div>
            </div>

            <div className="contact-content">
               <h3 className="contact-title">Fale do seu projeto</h3>

               <form ref={form} onSubmit={sendEmail} className="contact-form">
                  <div className="form-content">
                     <Input
                        label="Nome"
                        name="name"
                        placeholder="Seu nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                     />
                     <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Seu email preferido"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <Textarea
                        label="Projeto"
                        name="project"
                        placeholder="Fale sobre seu projeto"
                        cols={20}
                        rows={6}
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                     />
                  </div>

                  <div className="btn-container">
                     <Button icon={<PaperPlaneTilt />}>
                        <a href="#contact">Enviar menssagem</a>
                     </Button>
                  </div>
               </form>
            </div>
         </div>
      </StyledContact>
   );
}
