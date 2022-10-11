import Head from "next/head";
import React from "react";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Label from "../components/Label";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <>
      <Head>
        <title>Joss Laundry</title>
      </Head>
      <Navbar />
      <div className="w-full bg-white">
        <div className="container">
          <form className="grid grid-cols-2 gap-8 p-2 mx-40 my-32 bg-white">
            <div className="flex mb-6 text-4xl font-semibold text-textColor 2xl:text-5xl">
              Love to hear from you, Get in touch
            </div>
            <div className="grid grid-cols-3 col-span-2 col-start-1 gap-8 text-xs text-textColor">
              <div className="px-10 py-16 text-center bg-gray-100 rounded-lg cursor-pointer hover:bg-amber hover:text-maroon">
                <HiLocationMarker className="mx-auto mb-2 text-3xl" />
                Jl. Sukabirus No. 88B
              </div>
              <div className="px-10 py-16 text-center bg-gray-100 rounded-lg cursor-pointer hover:bg-amber hover:text-maroon">
                <AiOutlineWhatsApp className="mx-auto mb-2 text-3xl" />
                08989692449
              </div>
              <div className="px-10 py-16 text-center bg-gray-100 rounded-lg cursor-pointer hover:bg-amber hover:text-maroon">
                <MdEmail className="mx-auto mb-2 text-3xl" />
                josslaundry.stttelkom@gmail.com
              </div>
            </div>
            <div className="col-start-1">
              <Label forInput="name">Your Name</Label>
              <Input
                className="text-sm p-2.5 rounded-md w-full bg-gray-100 border-none focus:ring-0"
                name="name"
                id="name"
                placeholder="Username"
              />
            </div>
            <div className="">
              <Label forInput="email">Your email</Label>
              <Input
                className="text-sm p-2.5 rounded-md w-full bg-gray-100 border-none focus:ring-0"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="">
              <Label forInput="phone">Phone</Label>
              <Input
                className="text-sm p-2.5 rounded-md w-full bg-gray-100 border-none focus:ring-0"
                placeholder="Phone"
              />
            </div>
            <div>
              <Label forInput="email">Services</Label>
              <select
                id="services"
                placeholder="Choose our services"
                className="text-sm p-2.5 rounded-md w-full bg-gray-100 border-none focus:ring-0"
              >
                <option value="US">Reguler</option>
                <option value="CA">Express</option>
                <option value="FR">Istimewa</option>
              </select>
            </div>
            <div className="col-span-2">
              <Label forInput="message">Message</Label>
              <textarea
                id="message"
                rows="8"
                className="block p-2.5 w-full text-sm text-textColor bg-gray-100 rounded-md focus:ring-0 focus:border-none border-none "
                placeholder="Your message..."
              ></textarea>
            </div>
            <div>
              <Button
                type="submit"
                className="w-full px-6 py-3 mt-5 transition duration-300 border-none rounded-md text-semibold text-maroon bg-amber focus:ring-0"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
