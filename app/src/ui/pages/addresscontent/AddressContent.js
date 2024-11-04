const AddressContent = () => {
  return (
    <div>
      <div>
        <p className="mb-2">Hello, Sajjad</p>
        <h5 className="text-xl font-bold mb-8">Welcome to your Profile</h5>
      </div>
      <div className="grid grid-rows-1 grid-cols-2 gap-8">
        <div className="bg-gray-100 px-12 py-10 flex flex-col gap-4">
          <h5 className="font-bold text-xl">Personal Information</h5>
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
        <div className="bg-gray-100 px-12 py-10 flex flex-col gap-4">
          <h5 className="font-bold text-xl">Personal Information</h5>
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
      <button className="bg-primary text-white px-6 py-4 rounded mt-6">Add New Address</button>
    </div>
  );
};

export default AddressContent;
