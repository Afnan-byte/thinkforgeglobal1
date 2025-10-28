import ConnectSection from "@/components/connect/Connect";
import ContactForm from "@/components/connect/ConnectForm";
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