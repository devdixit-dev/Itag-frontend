import logo from '../assets/whatsapp.png'

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+917575024455'; // Replace with actual WhatsApp number
    const message = 'Hello! I would like to inquire about your financial services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 cursor-pointer hover:scale-110 transition-transform duration-300"
      onClick={handleWhatsAppClick}
    >
      <div className="text-white rounded-full shadow-lg transition-colors duration-300 ">
        <img src={logo} width={55} className='rounded-full' />
      </div>
    </div>
  );
};

export default WhatsAppFloat;