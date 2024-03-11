export default function Page() {
  return (
    <section>
      <div className="mt-52 flex px-52 justify-center">
        <div className="w-[45%] font-thin">
          <p>Home / Women / Eearings</p>
          <p className="mt-20 mb-3 text-2xl font-normal">Title</p>
          <p>exerpt</p>
          <button className=" mt-20 border border-black flex justify-between py-2 w-[75%] px-4 hover hover:bg-black hover:text-white">
            <p>1000000</p>
            <p>ADD TO BAG</p>
          </button>
          <p className="text-xs mt-2">
            Made to order: Delivered in Jakarta by March 01
          </p>
          <div className="my-20 font-thin ">
            <p>Save The Piece</p>
            <ul className="text-sm py-4">
              <li>
                <span className="text-2xl">+ </span>Shipping and Returns
              </li>
              <li>
                <span className="text-2xl">+ </span>Sustainability &
                Responsibility
              </li>
              <li>
                <span className="text-2xl">+ </span>Contact Us
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[45%]">
          <img
            src="https://i.pinimg.com/736x/9a/25/b3/9a25b369f7bdc13a5dfc6dcb13da0802.jpg"
            className="w-[80%] items-center h-[486px]"
          />
          <div className="my-10 font-thin text-sm">Description</div>
          <img
            src="https://i.pinimg.com/564x/09/7e/0a/097e0af7adf7e465f41c71287dbf2389.jpg"
            className="w-[80%] items-center h-[486px] mt-20"
          />
          <div className="my-20 font-thin ">
            <p>Aditional Reading</p>
            <ul className="text-sm py-4">
              <li>
                <span className="text-2xl">+ </span>Materials
              </li>
              <li>
                <span className="text-2xl">+ </span>Dimention
              </li>
              <li>
                <span className="text-2xl">+ </span>Product Care
              </li>
            </ul>
          </div>
          <div className="flex w-full gap-10">
            <img
              src="https://i.pinimg.com/564x/09/7e/0a/097e0af7adf7e465f41c71287dbf2389.jpg"
              className="w-[40%] items-center h-[286px]"
            />
            <img
              src="https://i.pinimg.com/564x/09/7e/0a/097e0af7adf7e465f41c71287dbf2389.jpg"
              className="w-[30%] items-center h-[186px]"
            />

            <img
              src="https://i.pinimg.com/564x/09/7e/0a/097e0af7adf7e465f41c71287dbf2389.jpg"
              className="w-[30%] items-center h-[186px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
