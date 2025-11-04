import ConnectSection from "@/Components/Connect/Connect";
import ContactForm from "@/Components/Connect/ConnectForm";
import FloatingWhatsapp from "@/Components/FloatingWhatsapp";
import React from "react";

function ConnectPage() {
  return (
    <>
    <title>Contact a Top IT Company in Perinthalmanna | Think Forge Global</title>
      <meta
        name="description"
        content="Contact Think Forge Global. As one of the leading AI companies in Kerala and a top IT company in Perinthalmanna, we're ready to start your project."
      />
      <link rel="canonical" href="https://www.thinkforgeglobal.com/connect" />

    <div className=" bg-black pt-8 pb-20">
        <ConnectSection variant="primary" />
        <ContactForm />
        <FloatingWhatsapp />
    </div>
    </>
  );
}

export default ConnectPage;