function Contact () {
  return (
    <>
      <div className="w-full h-[4px] bg-gradient-to-r from-transparent via-green-600 to-transparent my-4"></div>

      <h3 className="text-3xl font-bold p-4 text-center">Contact
        <span className="text-green-800 italic"> Us</span> On
      </h3>

      <div className="w-full h-[4px] bg-gradient-to-r from-transparent via-yellow-600 to-transparent mb-4"></div>

      <section className="flex items-center bg-green-900 min-h-[200px] inset-shadow-md m-6 overflow-hidden" id="contact">
        <div className="text-yellow-500 font-semibold p-4 text-lg">
          <p>Email: 
            <a href="mailto:simplysouthcafe@gmail.com"> simplysouthcafe@gmail.com</a>
          </p>
          <p>Contact No. 91+ 8699009596</p>
          <p>Address:  41, UGF, Citi Plaza, Peer Muchalla Rd, near sector 20, Sector 20, Panchkula, Zirakpur, Punjab 160104</p>
        </div>
      </section>
    </>
  );
}

export default Contact;