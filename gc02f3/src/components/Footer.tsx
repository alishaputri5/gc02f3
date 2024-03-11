const Footer = () => {
  return (
    <div className="px-5 text-sm font-light bottom-0 w-screen mb-10 border-t border-gray-600">
      <div className="flex flex-row justify-end gap-5 px-14 py-7">
        <p>Shop in</p>
        <p>Indonesia(IDR)</p>
      </div>

      <div className="flex justify-between mt-8">
        <ul>
          <li>Contact Us</li>
          <li>Delivery & Returns</li>
          <li>Payment</li>
          <li>FAQs</li>
          <li>Care & Repair</li>
          <li>Stockists</li>
          <li>Legal</li>
        </ul>

        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Pinterest</li>
        </ul>
      </div>
      <div className="flex justify-between mt-16">
        <ul>
          <li>Newsletter: Enjoy 10% off first order</li>
          <li>email</li>
          <li>
            Purpose pieces on a semi-regular basis. GDPR-friendly with healthy
            aversionto to spam.
          </li>
        </ul>
        <p className="font-bold text-xl self-end">Completedworks</p>
      </div>
    </div>
  );
};

export default Footer;
