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
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="w-[400px] h-[500px] bg-white rounded-xl ">
          <div className="w-full h-[20%] border-b-[1px] border-gray-500 flex items-center justify-center ">
            <h1 className="text-4xl font-medium ">Login</h1>
          </div>
          <div className="w-full h-[80%]">
            <form
              className="w-full h-full flex items-start  justify-center"
              onSubmit={handSubmit}
            >
              <div className="w-[80%] h-[80%] flex flex-col justify-evenly ">
                <div className="w-full h-[50px]">
                  <input
                    className=" w-full border-b-[1px] border-gray-500  text-gray-500 focus:outline-none px-1 py-3"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                  />
                </div>
                <div className="w-full h-[50px]">
                  <input
                    className=" w-full border-b-[1px] border-gray-500  text-gray-500 focus:outline-none px-1 py-3"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                  />
                </div>
                <div className="w-full h-[50px] flex items-center justify-center">
                  <button
                    className="w-[350px] h-[45px] bg-red-500 rounded-3xl text-white font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default FormLogin;
