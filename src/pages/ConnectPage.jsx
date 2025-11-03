import ConnectSection from "@/Components/Connect/Connect";
import ContactForm from "@/Components/Connect/ConnectForm";
import FloatingWhatsapp from "@/Components/FloatingWhatsapp";
import React from "react";

function ConnectPage() {
  return (
    <div className=" bg-black pt-8 pb-20">
        <ConnectSection variant="primary" />
        <ContactForm />
        <FloatingWhatsapp />
    </div>
  );
}

export default ConnectPage;