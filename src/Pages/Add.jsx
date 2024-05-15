const Add = ({ inputs, title }) => {
  return (
    <div class="container mx-auto my-4 px-4 lg:px-20">
      <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl  dark:bg-[#222] dark:text-white dark:shadow-lg dark:shadow-gray-400">
        <div class="flex">
          <h1 class="font-bold uppercase text-5xl">
             add a new<br /> user
          </h1>
        </div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input
            class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="First Name*"
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Last Name*"
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email*"
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Phone*"
          />
        </div>
        <div class="my-4">
          <textarea
            placeholder="Description*"
            class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div class="my-2 w-1/2 lg:w-1/4">
          <button
            class="uppercase text-sm font-bold tracking-wide bg-blue-700 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </div>
      <div class="w-full lg:-mt-96 lg:w-2/6 px-4 py-6 ml-auto bg-blue-700 rounded-2xl">
        <div class="flex flex-col text-white">
          <h1 class="font-bold uppercase text-4xl my-4">pay attention</h1>
          <p class="text-gray-400">
            Carefully read all instructions before proceeding. Provide accurate
            and up-to-date information. Write legibly if filling out a paper
            form. Stick to the specified format for dates, numbers, etc. Review
            your responses for accuracy before submitting. Include correct
            contact details for communication purposes. Submit the form before the specified
            deadline.
          </p>
          <div class="flex my-4 w-2/3 lg:w-1/2">
            <div class="flex flex-col">
              <i class="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl">Call Us</h2>
              <p class="text-gray-400">Tel: xxx-xxx-xxx</p>
              <p class="text-gray-400">Fax: xxx-xxx-xxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
