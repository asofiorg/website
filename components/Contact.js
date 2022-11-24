import { useForm } from "@formcarry/react";
import useTranslation from "translations";

import Button from "components/Button";

const Contact = () => {
  const {
    form: {
      title,
      subtitle,
      submitted,
      submittedSubtitle,
      inputs: { name, email, message, send }
    }
  } = useTranslation();

  const { state, submit } = useForm({
    id: "DaPWPj-Nq"
  });

  return (
    <section className="bg-navy-400 p-8" id="contact">
      <h2 className="text-center text-5xl">
        {state.submitted ? submitted : title}
      </h2>
      <p className="text-2xl -mt-4 text-center">
        {state.submitted ? submittedSubtitle : subtitle}
      </p>
      {!state.submitted && (
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={submit}
        >
          <input
            className="font-mono h-12 w-3/5 p-2 m-2 text-lg font-bold border-none rounded"
            type="text"
            name="name"
            placeholder={name}
            required
          />
          <input
            className="font-mono h-12 w-3/5 p-2 m-2 text-lg font-bold border-none rounded"
            type="email"
            name="email"
            placeholder={email}
            required
          />
          <textarea
            className="font-mono h-20 w-3/5 p-2 m-2 text-lg font-bold border-none mb-2 rounded"
            name="message"
            placeholder={message}
            required
          />
          <Button type="submit" className="mt-2">
            {send}
          </Button>
        </form>
      )}
    </section>
  );
};

export default Contact;
