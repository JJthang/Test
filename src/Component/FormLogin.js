import React from "react";

export const FormLogin = ({ formData, setFormData }) => {
  const handleInputChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handSubmit = (event) => {
    console.log(formData);
    if (formData.username === "admin" && formData.password === "1234") {
      localStorage.setItem("user", formData);
      alert("Đăng nhập Thành công");
    } else {
      alert("Xin vui lòng nhập lại");
    }
  };
  return (
    <>
      <form className="w-full max-w-sm" onSubmit={handSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Please enter username..."
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="******************"
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Login Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default FormLogin;
