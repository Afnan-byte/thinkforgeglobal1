import ConnectSection from "@/components/Connect/Connect";
import ContactForm from "@/components/Connect/ConnectForm";
import React from "react";

function ConnectPage() {
  return (
    <div className=" bg-black pt-8 pb-20">
        <ConnectSection variant="primary" />
        <ContactForm />
    </div>
  );
}

export default ConnectPage;