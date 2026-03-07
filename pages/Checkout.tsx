
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Lock, CreditCard, Truck, ArrowLeft } from 'lucide-react';

export const Checkout: React.FC = () => {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Get form data
    const formData = new FormData(e.currentTarget);
    const customerName = formData.get('fullName') as string;
    const customerEmail = formData.get('email') as string;
    const customerAddress = formData.get('street') as string;
    const customerCity = formData.get('city') as string;
    const customerPostal = formData.get('postal') as string;

    // Generate reference links for each product with selected image
    const referenceLinks = cart.map((item, index) => {
      // Find the image index in the gallery
      const imageIndex = item.selectedImage ? item.gallery.findIndex(img => img === item.selectedImage) : 0;
      const imageParam = imageIndex > 0 ? `?img=${imageIndex}` : '';
      // Get production URL dynamically with fallback
      const baseUrl = `${window.location.origin}/#/product/${item.id}${imageParam}`;
      return `${index + 1}. ${item.name} - ₦${item.price.toLocaleString()} - ${baseUrl}`;
    }).join('\n');

    // Create WhatsApp message
    const whatsappMessage = `🛍️ *NEW ORDER - 5 STAR LUXURY WATCHES* 🛍️

👤 *Customer Information:*
• Name: ${customerName}
• Email: ${customerEmail}
• Address: ${customerAddress}, ${customerCity}, ${customerPostal}

📦 *Order Details:*
${cart.map((item, index) => `
${index + 1}. ${item.name}
   • Price: ₦${item.price.toLocaleString()}
   • Quantity: ${item.quantity}
   • Subtotal: ₦${(item.price * item.quantity).toLocaleString()}`).join('\n')}

💰 *Order Summary:*
• Subtotal: ₦${subtotal.toLocaleString()}
• Tax (7.5%): ₦${(subtotal * 0.075).toLocaleString()}
• Delivery Fee: ₦${deliveryFee.toLocaleString()}
• Grand Total: ₦${grandTotal.toLocaleString()}

💳 *Payment Information:*
• Payment Method: Payment on Delivery
• Delivery Fee: ₦4,000 (included in total)
• Payment Plan: Customer pays upon delivery

🔗 *Product Reference Links:*
${referenceLinks}

📱 *Order ID:* #LX-${Math.floor(Math.random() * 90000) + 10000}
📅 *Date:* ${new Date().toLocaleDateString()}

---
*This order was placed via the website checkout system.*`;

    // Send to Google Sheets
    const sendToGoogleSheets = async (orderData: any) => {
      try {
        // Google Apps Script Web App URL (replace with your actual URL)
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbwUHrN5w9H30pwJJ8T2RzrouNYbNHdG76Wxkod9dRrHvQelYIV3xC9oEn9ievehC5F58w/exec';

        const response = await fetch(scriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(orderData),
          mode: 'no-cors'
        });

        console.log('Order sent to Google Sheets');
      } catch (error) {
        console.error('Error saving to Google Sheets:', error);
        // Continue with WhatsApp even if Google Sheets fails
      }
    };

    // Prepare order data for Google Sheets
    const orderData = {
      orderId: `LX-${Math.floor(Math.random() * 90000) + 10000}`,
      date: new Date().toISOString(),
      customerName,
      customerEmail,
      customerAddress: `${customerAddress}, ${customerCity}, ${customerPostal}`,
      orderItems: cart.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        subtotal: item.price * item.quantity,
        selectedImage: item.selectedImage || item.image
      })),
      subtotal,
      tax: subtotal * 0.075,
      deliveryFee,
      grandTotal,
      paymentMethod: 'Payment on Delivery',
      referenceLinks
    };

    // Send to Google Sheets
    sendToGoogleSheets(orderData);

    // Send to WhatsApp
    const whatsappUrl = `https://wa.me/2348103796277?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2500);
  };

  const totalWithTax = subtotal * 1.075;
  const deliveryFee = 4000; // ₦4,000 delivery fee
  const grandTotal = totalWithTax + deliveryFee;

  if (isSuccess) {
    return (
      <div className="pt-60 pb-40 text-center luxury-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto"
        >
          <div className="w-24 h-24 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-10">
            <CheckCircle2 className="w-12 h-12 text-gold-400" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl serif-title mb-8 text-stone-900">Order Confirmed</h1>
          <p className="text-stone-500 mb-12 font-light text-lg leading-relaxed">
            Thank you for your acquisition. Your order <span className="text-stone-900 font-bold">#LX-{Math.floor(Math.random() * 90000) + 10000}</span> is being meticulously prepared for shipment. Order details have been sent to our WhatsApp business line for immediate processing. A confirmation email has been sent to your inbox.
          </p>
          <Button onClick={() => navigate('/')}>Return to Atelier</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-40 bg-gold-100 min-h-screen">
      <div className="luxury-container">
        <button
          onClick={() => navigate('/cart')}
          className="flex items-center gap-2 micro-label text-stone-400 hover:text-gold-400 transition-colors mb-12"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Bag
        </button>

        <div className="mb-16">
          <p className="micro-label text-gold-400 mb-4">Secure Checkout</p>
          <h1 className="text-5xl md:text-6xl serif-title text-stone-900">Finalize Purchase</h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7 space-y-16">
            {/* Customer Info */}
            <section className="bg-white p-10 border border-gold-200 shadow-sm">
              <h2 className="micro-label text-stone-900 mb-10 flex items-center gap-4">
                <span className="w-8 h-8 bg-stone-950 text-white flex items-center justify-center text-[10px] font-bold">01</span>
                Customer Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="micro-label text-stone-400 text-[9px]">Full Name</label>
                  <input required type="text" name="fullName" className="w-full bg-gold-50 border border-gold-200 p-4 outline-none focus:border-gold-400 transition-colors font-light" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="micro-label text-stone-400 text-[9px]">Email Address</label>
                  <input required type="email" name="email" className="w-full bg-gold-50 border border-gold-200 p-4 outline-none focus:border-gold-400 transition-colors font-light" placeholder="john@example.com" />
                </div>
              </div>
            </section>

            {/* Shipping */}
            <section className="bg-white p-10 border border-gold-200 shadow-sm">
              <h2 className="micro-label text-stone-900 mb-10 flex items-center gap-4">
                <span className="w-8 h-8 bg-stone-950 text-white flex items-center justify-center text-[10px] font-bold">02</span>
                Shipping Destination
              </h2>
              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="micro-label text-stone-400 text-[9px]">Street Address</label>
                  <input required type="text" name="street" className="w-full bg-gold-50 border border-gold-200 p-4 outline-none focus:border-gold-400 transition-colors font-light" placeholder="123 Luxury Way" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="micro-label text-stone-400 text-[9px]">City</label>
                    <input required type="text" name="city" className="w-full bg-gold-50 border border-gold-200 p-4 outline-none focus:border-gold-400 transition-colors font-light" placeholder="Lagos" />
                  </div>
                  <div className="space-y-3">
                    <label className="micro-label text-stone-400 text-[9px]">Postal Code</label>
                    <input required type="text" name="postal" className="w-full bg-gold-50 border border-gold-200 p-4 outline-none focus:border-gold-400 transition-colors font-light" placeholder="100001" />
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Notice */}
            <section className="bg-white p-10 border border-gold-200 shadow-sm">
              <h2 className="micro-label text-stone-900 mb-10 flex items-center gap-4">
                <span className="w-8 h-8 bg-stone-950 text-white flex items-center justify-center text-[10px] font-bold">03</span>
                Payment Information
              </h2>
              <div className="space-y-6">
                <div className="bg-gold-50 border border-gold-200 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <ShieldCheck className="w-6 h-6 text-gold-400" />
                    <span className="text-lg font-bold text-stone-900">Payment on Delivery</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    Payment details will be coordinated directly with our business representative via WhatsApp message after order confirmation. This ensures secure, personalized payment processing and allows for any special requests or customization discussions.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gold-200">
                    <h4 className="font-bold text-stone-900 mb-3">Payment Details:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                        <span className="text-sm text-stone-700"><strong>Delivery Fee:</strong> ₦4,000 (applied to all orders)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                        <span className="text-sm text-stone-700"><strong>Payment Method:</strong> Cash on Delivery</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                        <span className="text-sm text-stone-700"><strong>Payment Plan:</strong> Pay upon receipt of items</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-40">
              <div className="bg-stone-950 p-10 shadow-2xl">
                <h3 className="micro-label text-white mb-10">Order Total</h3>
                <div className="space-y-8 mb-10 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-20 bg-white/10 overflow-hidden flex-shrink-0">
                          <img src={item.image} className="w-full h-full object-cover opacity-80" />
                        </div>
                        <div>
                          <p className="text-white serif-title text-lg leading-tight mb-1">{item.name}</p>
                          <p className="micro-label text-stone-500 text-[8px]">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="text-stone-300 font-light">₦{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-8 space-y-4">
                  <div className="flex justify-between text-stone-400 text-sm font-light">
                    <span>Subtotal</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-stone-400 text-sm font-light">
                    <span>Tax (7.5%)</span>
                    <span>₦{(subtotal * 0.075).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-stone-400 text-sm font-light">
                    <span>Delivery Fee</span>
                    <span>₦{deliveryFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="serif-title text-2xl text-white">Grand Total</span>
                    <span className="serif-title text-4xl text-gold-400">₦{grandTotal.toLocaleString()}</span>
                  </div>
                </div>

                <Button type="submit" fullWidth className="mt-12" variant="white" disabled={isProcessing}>
                  {isProcessing ? 'Sending Order...' : 'Send Order to WhatsApp'}
                </Button>

                <div className="mt-10 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2 text-stone-500">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[9px] tracking-widest uppercase font-bold">Tier-1 Security</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-6 border border-gold-200 flex flex-col items-center text-center gap-3">
                  <Truck className="w-5 h-5 text-gold-400" />
                  <span className="text-[8px] tracking-widest uppercase font-bold text-stone-600">Insured Delivery</span>
                </div>
                <div className="bg-white p-6 border border-gold-200 flex flex-col items-center text-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold-400" />
                  <span className="text-[8px] tracking-widest uppercase font-bold text-stone-600">Authenticity</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
