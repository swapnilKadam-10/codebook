import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { toast } from "react-toastify";
import { register } from "../services";

export const Register = () => {
  const navigate = useNavigate();
  useTitle("Register");
  async function handleRegister(event) {
    event.preventDefault();
    try {
      const authDetail = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      };
      const data = register(authDetail);
      data.accessToken ? navigate("/products") : toast.error(data);
    } catch (error) {
       toast.error(error.message);
    }
  }

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          Register
        </p>
      </section>
      <form onSubmit={handleRegister} className="max-w-md m-auto border shadow-xl p-10">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
          >
            Enter Name:
          </label>
          <input
            type="name"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
          >
            Enter Email:
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="abc@example.com"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
          >
            Enter Password:
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            minLength="7"
          />
        </div>
        <div className="flex justify-center">
        <button
          type="submit"
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
        </div>
        
      </form>
    </main>
  );
};
