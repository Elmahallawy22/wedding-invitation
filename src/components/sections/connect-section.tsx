"use client";

import { useState } from "react";
import { toast } from "sonner";
import Reveal from "../features/reveal";

export default function ConnectSection() {
  // state
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attending, setAttending] = useState(false);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    fetch("https://sendmail-api-docs.vercel.app/api/send", {
      method: "POST",
      body: JSON.stringify({
        to: "elmahallawyyoussef@gmail.com",
        subject: "I get a qoute",
        message: `I'm ${name} \n\t, I want to say: ${message},  i Will ${attending} to attend the wedding`,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    setName("");
    setMessage("");
  };

  return (
    <section className="my-15 flex flex-col items-center gap-5 text-center px-2">
      <Reveal>
        <p className="text-gold">RSVP</p>
      </Reveal>
      <Reveal delay={0.5}>
        <h2 className="font-italic text-7xl text-fg">Leave Us a Message</h2>
      </Reveal>
      <form action="" onSubmit={(e) => sendMessage(e)} className="w-full max-w-125 flex flex-col items-center gap-5 px-4">
        <Reveal>
          <h6 className="text-text text-xl font-bold font-serif mt-5">Your Name</h6>
        </Reveal>
        <Reveal className="w-full max-w-125">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-bg-alt border border-border text-center outline-none h-12 w-full rounded-lg font-sans"
            placeholder="Your Name"
          />
        </Reveal>

        <Reveal>
          <h6 className="text-text text-xl font-bold font-serif">Your Congratulations</h6>
        </Reveal>
        <Reveal className="w-full">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-bg-alt border border-border text-center outline-none w-full max-w-125 rounded-lg font-sans py-2 h-32"
            placeholder="Your Congratulations"
          />
        </Reveal>

        <Reveal>
          <h6 className="text-text text-xl font-bold font-serif">Will You Attend?</h6>
        </Reveal>
        <div className="flex gap-5">
          <Reveal>
            <button
              type="button"
              onClick={() => setAttending(true)}
              className="px-5 py-1.5 text-fg-light border-2 font-semibold border-fg-light hover:bg-fg hover:text-bg-alt cursor-pointer"
            >
              Yes
            </button>
          </Reveal>
          <Reveal>
            <button
              type="button"
              className="px-5 py-1.5 text-fg-light border-2 font-semibold border-fg-light cursor-pointer"
              onClick={() =>
                toast("ياعم عيب عليك ! 😥", {
                  description: "أنت كدا كدا هتنورنا يا صاحبي مفيهاش كلام 😍😊",
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                  className: "!bg-fg !text-bg-alt !border !border-gold font-serif shadow-brand-sm !text-4xl !font-semibold cursor-pointer",
                  descriptionClassName: "!text-bg-alt font-sans text-2xl",
                  actionButtonStyle: {
                    backgroundColor: "var(--color-fg)",
                    color: "var(--color-bg)",
                  },
                })
              }
            >
              No
            </button>
          </Reveal>
        </div>
        <Reveal>
          <button
            type="submit"
            className="bg-fg text-bg font-bold py-3 px-8 text-sm rounded-sm mt-5 cursor-pointer hover:opacity-90 transition-opacity"
          >
            Send With Love
          </button>
        </Reveal>
      </form>
    </section>
  );
}
