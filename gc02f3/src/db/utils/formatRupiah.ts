const rupiah = (price: number) => {
  const formatRupiah = new Intl.NumberFormat("id-ID").format(price);
  return `Rp ${formatRupiah}`;
};

export default rupiah;
