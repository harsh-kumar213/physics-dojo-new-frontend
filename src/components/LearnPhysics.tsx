const LearnPhysics = () => {
  return (
    <div className="w-full flex justify-center items-center bg-primary">
    <div className="flex flex-col w-[900px] border-2 mx-10 py-10 rounded-lg">
      <div className="w-full justify-center items-center flex flex-col space-y-3">
        <h2 className="font-extrabold text-xl">Our Past Ventures</h2>
        <span className="bg-accent h-2 w-20"></span>
        <p className=" md:max-w-[50%] mx-auto text-center py-8">
          While haq is a beginner friendly website, and has challenges aimed at
          the introductory level, it is best that you have at least basic
          knowledge of quantum computing. However, don’t worry if you don’t, we
          have dozens of problems which can supplement your early stage journey.
          On top of that, here are three recommended resources for learning
          quantum computing from the ground up: The Qiskit Textbook, The
          Eigensolver Quantum School and Nielsen and Chuang
        </p>
      </div>
      <div className="p-2 grid md:grid-cols-3 gap-5 text-secondary max-w-screen-2xl mx-auto w-full py-10">
        <div className="col-span-1 bg-accent py-5 px-4 shadow rounded-2xl flex flex-col text-center space-y-5">
          <h2 className="text-xl">Qiskit Textbook</h2>
          <p>
            The qiskit textbook is a comprehensive guide to both Quantum
            Computing and the Qiskit platfrom.
          </p>
          <div className="w-full justify-center items-center flex">
            <a
              href="https://qiskit.org/textbook/preface.html"
              className="text-textColor capitalize flex space-x-3"
            >
              <span>qiskit textbook</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-1 bg-accent py-5 px-4 shadow rounded-2xl flex flex-col text-center space-y-5">
          <h2 className="text-xl">TEQS</h2>
          <p>
            In the summer of 2021, The Eigensolvers conducted a 1 week QC crash
            course + hackathon with some collaboration with IBMQ.
          </p>
          <div className="w-full justify-center items-center flex">
            <a
              href="https://qiskit.org/textbook/preface.html"
              className="text-textColor capitalize flex space-x-3"
            >
              <span>TEQS</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-1 bg-accent py-5 px-4 shadow rounded-2xl flex flex-col text-center space-y-5">
          <h2 className="text-xl">Nielsen and Chuang</h2>
          <p>
            Often called the “Bible of Quantum Computing”, Neilsen and Chuang is
            arguably the “go-to” textbook for any introductary QC/QI course.
           
          </p>
          <div className="w-full justify-center items-center flex">
            <a
              href="https://qiskit.org/textbook/preface.html"
              className="text-textColor capitalize flex space-x-3"
            >
              <span>TEQS</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LearnPhysics;
