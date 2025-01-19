import payment from '../assets/images/footer2.svg'
import payment2 from '../assets/images/footer.svg'

const FooterComponents = () => {
  const solutions = [
    {
      name: "Small Bussiness",
    },
    {
      name: "Frelancers",
    },
    {
      name: "Customers",
    },
    {
      name: "Taxes",
    },
  ];

  const company = [
    {
      name: "About Us",
    },
    {
      name: "Career",
    },
    {
      name: "Contact",
    },
  ];

  const learn = [
    {
      name: "Blog",
    },
    {
      name: "Ebooks",
    },
    {
      name: "Guides",
    },
    {
      name: "Templates",
    },
  ];
  return (
    <div className="bg-slate-900">
      <div className="p-5 max-w-7xl m-auto w-full">
        <div className="flex flex-col gap-10 py-10 items-center lg:flex-row justify-start lg:items-start lg:justify-between lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-[300px]">
            <h1 className="text-4xl font-bold text-white">
              Rund<span className="text-green-primary">Shop</span>
            </h1>
            <p className=" text-gray-500 tracking-wide font-normal mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, id.
            </p>
          </div>
          <div className="flex flex-wrap gap-7 justify-between md:justify-around lg:flex-1 w-full">
            <div className="flex flex-col gap-2">
              <h1 className="mb-2 text-xl font-semibold text-white">Shop</h1>
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="text-gray-500 text-base font-normal"
                >
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="mb-2 text-xl font-semibold text-white">
                Company
              </h1>
              {company.map((item) => (
                <div
                  key={item.name}
                  className="text-gray-500 text-base font-normal"
                >
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="mb-2 text-xl font-semibold text-white">
                Support
              </h1>
              {learn.map((item) => (
                <div
                  key={item.name}
                  className="text-gray-500 text-base font-normal"
                >
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="mb-2 text-xl font-semibold text-white">
              Payment Methods
            </h1>
            <div className="flex gap-5 items-center justify-center lg:justify-start">
              <img src={payment} alt="" className="w-20"/>
              <img src={payment2} alt="" className="w-12"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center text-gray-500 font-normal gap-2 border-t-[1px] border-gray-500 p-5 md:flex-row md:justify-between">
          <p>2024 RundMost, All rights reserved</p>
          <div className="md:flex gap-4">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponents;
