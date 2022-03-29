import splitbee from "@splitbee/web";
import useTranslation from "translations";
import Button from "./Button";
import toasthandler, { Toaster } from "react-hot-toast";

const Contact = () => {
  const {
    form: {
      title,
      subtitle,
      inputs: { name, email, message, send },
    },
    toast,
  } = useTranslation();

  const handleSubmit = (data) => {
    toasthandler.promise(
      splitbee.track("Contact Form Filled", {
        name: data.name,
        email: data.email,
        message: data.message,
      }),
      toast
    );

    splitbee.user.set({
      name: data.name,
      email: data.email,
    });
  };

  return (
    <section className="bg-navy-400 p-8" id="contact">
      <h2 className="text-center text-5xl">{title}</h2>
      <p className="text-2xl -mt-4 text-center">{subtitle}</p>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
          });
        }}
      >
        <input
          className="font-mono h-12 w-3/5 p-2 m-2 text-lg font-bold border-none rounded"
          type="text"
          name={"name"}
          placeholder={name}
        />
        <input
          className="font-mono h-12 w-3/5 p-2 m-2 text-lg font-bold border-none rounded"
          type="email"
          name={"email"}
          placeholder={email}
        />
        <textarea
          className="font-mono h-20 w-3/5 p-2 m-2 text-lg font-bold border-none mb-2 rounded"
          name={"message"}
          placeholder={message}
        />
        <Button type="submit" className="mt-2">{send}</Button>
      </form>
      <Toaster />
    </section>
  );
};

export default Contact;
