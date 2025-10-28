import ConnectSection from "@/components/connect/connect";
import ContactForm from "@/components/connect/connectForm";
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