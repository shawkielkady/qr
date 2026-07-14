import React, { useState } from "react";
import imageQr from "../assets/imageqr.jpeg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { MdFactory } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const person = {
  id: 1,
  name: "Adel Elkady",
  role: "Accountant",
  jop: "Head of Commercial Sector",
  tag: "Elkady",
  image: imageQr,
  phone: "01283007008",
  email: "Gaber.Elkady@nasrsalines.com",
  address: "Wady Elqamar - El Max - Alexandria -Egypt ",
  faceBook: "https://www.facebook.com/share/1FozzX7STo/?mibextid=wwXIfr",
  twitter: "@jthorne_creative",
  instagram:
    "https://www.instagram.com/adel.elkady.offical?igsh=MXM3dHN5Y3lmeXFuaQ==",
  company: "EL NASR SALINES CO.",
  whatsapp: "https://wa.me/201283007008",
};

function PersonnelCard({ person }) {
  return (
    <div className="relative group bg-surface-container rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-outline-variant/30 w-full max-w-md mx-auto">
      <div className="relative  overflow-hidden h-[50%]">
        <img
          alt={`${person.name} Portrait`}
          className="w-full h-[50%] object-cover transition-transform duration-1000 group-hover:scale-110 filter contrast-[1.05]"
          src={person.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 text-on-primary text-[10px] font-bold py-1.5 px-3 rounded-full uppercase tracking-widest backdrop-blur-md shadow-sm">
            {person.tag}
          </span>
        </div>
      </div>

      <div className="p-8 sm:p-10 -mt-20 relative z-10">
        <div className="mb-8 text-center sm:text-left">
          <h2 className="font-headline text-3xl sm:text-4xl font-black tracking-tighter text-on-surface mb-2 group-hover:text-primary transition-colors duration-500">
            {person.name}
          </h2>
          <p className="font-label text-sm uppercase tracking-[0.25em] text-on-surface-variant font-bold">
            {person.role}
          </p>
          <p className="font-label text-[10px] sm:text-sm uppercase tracking-[0.25em] text-on-surface-variant font-bold whitespace-nowrap overflow-hidden text-ellipsis">
            {person.jop}
          </p>
        </div>

        <div className="space-y-6 mb-10">
          <ContactItem
            icon={<MdFactory />}
            label="Company"
            value={person.company}
            copy="false"
          />
          <ContactItem
            icon={<IoIosCall />}
            label="Phone"
            value={person.phone}
          />
          <ContactItem
            icon={<MdAlternateEmail />}
            label="Email"
            value={person.email}
          />
          <ContactItem
            icon={<IoLocationSharp />}
            label="Address"
            value={person.address}
            className="whitespace-pre-line"
            copy="false"
          />

          <div className="flex justify-center sm:justify-start gap-6 pt-6 border-t border-outline-variant/20">
            <SocialLink icon={<FaFacebookF />} href={`${person.faceBook}`} />

            <SocialLink icon={<FaInstagram />} href={`${person.instagram}`} />
            <SocialLink icon={<FaWhatsapp />} href={`${person.whatsapp}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value, className = "", copy = "true" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between group/item text-left">
      <div className="flex items-start gap-4">
        <span className="text-primary text-[24px] transition-transform group-hover/item:scale-110">
          {icon}
        </span>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-outline font-black mb-0.5">
            {label}
          </span>
          <span
            className={`text-sm font-body text-on-surface-variant group-hover/item:text-on-surface transition-colors ${className}`}
          >
            {value}
          </span>
        </div>
      </div>
      {copy != "false" && (
        <button
          onClick={handleCopy}
          className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors text-on-surface-variant hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 relative"
          title="Copy to clipboard"
        >
          <span className="material-symbols-outlined text-[18px]">
            {/* {copied ? "check" : "content_copy"} */}
            <MdContentCopy />
          </span>
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-highest text-primary text-[9px] font-bold py-1 px-2 rounded-md shadow-lg animate-bounce">
              COPIED
            </span>
          )}
        </button>
      )}
    </div>
  );
}

function SocialLink({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:scale-125"
    >
      <span className="material-symbols-outlined text-[24px]">{icon}</span>
    </a>
  );
}

function PersonnelSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex items-center justify-center">
        <PersonnelCard person={person} />
      </div>
    </section>
  );
}

export default PersonnelSection;
