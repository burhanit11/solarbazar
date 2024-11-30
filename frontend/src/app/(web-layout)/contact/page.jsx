import React from "react";

const Contact = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-10">
        <div className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
          <p className="text-center text-xs font-semibold leading-normal md:text-sm">
            Share your thoughts
          </p>
        </div>
        <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          Love to hear from you
        </p>
      </div>
      <div className="mx-auto max-w-3xl py-10 ">
        <p className="text-2xl font-bold text-gray-900 md:text-4xl">
          Get in touch
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Our friendly team would love to hear from you.
        </p>
        <form action="" className="mt-8 space-y-4">
          <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
            <div className="grid w-full items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border-2 border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                id="first_name"
                placeholder="First Name"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="last_name"
              >
                Last Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border-2 border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                id="last_name"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label
              className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border-2 border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="text"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label
              className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="phone_number"
            >
              Phone number
            </label>
            <input
              className="flex h-10 w-full rounded-md border-2 border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="tel"
              id="phone_number"
              placeholder="Phone number"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label
              className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="flex h-32 w-full rounded-md border-2 border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              id="message"
              placeholder="Leave us a message"
              cols="3"
            ></textarea>
          </div>
          <button
            type="button"
            className="w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
