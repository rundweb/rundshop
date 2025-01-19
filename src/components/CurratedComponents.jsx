const CurratedComponents = () => {
  const listImg = [
    {
      images: "bg-best",
      text: "Best Seller",
    },
    {
      images: "bg-boys",
      text: "Shop Men",
    },
    {
      images: "bg-women",
      text: "Shop Women",
    },
    {
      images: "bg-casual",
      text: "Shop Casual",
    },
  ];
  return (
    <div className="p-5 max-w-7xl m-auto w-full flex flex-col gap-8">
      <h1 className=" text-slate-800 text-3xl tracking-wider font-bold">
        Currates picks
      </h1>
      <div className="flex flex-wrap items-center gap-5 sm:justify-around w-full">
        {listImg.map((item) => (
          <div key={item.images} className="w-full sm:w-[286px]">
            <div
              className={`${item.images} bg-cover bg-no-repeat bg-center h-72 rounded-lg p-10 flex items-end justify-center`}
            >
              <a
                href=""
                className="bg-white text-slate-800 py-3 px-8 rounded-lg font-semibold shadow-xl border-2 border-white hover:bg-transparent hover:text-white ease-in-out duration-500"
              >
                {item.text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurratedComponents;
