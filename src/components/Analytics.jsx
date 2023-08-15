const Analytics = () => {
  return (
    <div>
      <div className="max-w-[80%] mx-auto py-16 grid md:grid-cols-2">
        <img src="./public/images/laptop.jpg" alt="laptop" />
        <div className="flex flex-col gap-2 justify-center">
          <p className="text-medium font-bold text-[#00df9a]">
            DATA ANALYTICS DASHBOARD
          </p>
          <h3 className="text-xl font-bold">Manage Data Analytics Centrally</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non odio
            dolorem nulla delectus ut ratione?
          </p>
          <button className="rounded-md w-[120px] bg-black font-medium text-[#00df9a] py-2 px-4 mt-4">
            <a href="#">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
