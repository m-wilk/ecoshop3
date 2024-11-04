const DashboardContent = () => {
  return (
    <div>
      <div>
        <p className="mb-2">Hello, Sajjad</p>
        <h5 className="text-xl font-bold mb-8">Welcome to your Profile</h5>
      </div>
      <div className="grid grid-rows-2 grid-cols-3 gap-8">
        <div className="col-span-1 bg-black rounded p-8">
          <div className="bg-white rounded p-3 w-16 mb-4">
            <span className="icon-cart text-yellow text-3xl"></span>
          </div>
          <div className="text-white">
            <p className="text-xl">New Orders</p>
            <h3 className="text-3xl font-bold">565</h3>
          </div>
        </div>
        <div className="col-span-1 bg-black rounded p-8">
          <div className="bg-white rounded p-3 w-16 mb-4">
            <span className="icon-cart text-yellow text-3xl"></span>
          </div>
          <div className="text-white">
            <p className="text-xl">New Orders</p>
            <h3 className="text-3xl font-bold">565</h3>
          </div>
        </div>
        <div className="col-span-1 bg-black rounded p-8">
          <div className="bg-white rounded p-3 w-16 mb-4">
            <span className="icon-cart text-yellow text-3xl"></span>
          </div>
          <div className="text-white">
            <p className="text-xl">New Orders</p>
            <h3 className="text-3xl font-bold">565</h3>
          </div>
        </div>

        <div className="col-span-3 bg-gray-100 px-12 py-10 flex justify-between">
          <div>
            <h5 className="font-bold text-xl mb-4">Personal Information</h5>
            <div className="flex gap-4">
              <div className="text-gray-400 flex flex-col gap-2">
                <p>Name:</p>
                <p>Email:</p>
                <p>Phone:</p>
                <p>City:</p>
                <p>Zip:</p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Sajjad</p>
                <p>demoemail@gmail.com</p>
                <p>023 434 54354</p>
                <p>Haydarabad, Rord 34</p>
                <p>3454</p>
              </div>
            </div>
          </div>
          <div className="h-full w-px bg-gray-400"></div>
          <div>
            <h5 className="font-bold text-xl mb-4">Personal Information</h5>
            <div className="flex gap-4">
              <div className="text-gray-400 flex flex-col gap-2">
                <p>Name:</p>
                <p>Email:</p>
                <p>Phone:</p>
                <p>City:</p>
                <p>Zip:</p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Sajjad</p>
                <p>demoemail@gmail.com</p>
                <p>023 434 54354</p>
                <p>Haydarabad, Rord 34</p>
                <p>3454</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
