import { useEffect, useRef } from "react";

export default function Footer() {
  const currentYearRef = useRef(null);

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    if (currentYearRef.current) {
      currentYearRef.current.textContent = currentYear;
    }
  }, []);
  return (
    <>
      <section className="bg-secondary">
        <div className="grid grid-cols-3">
          <div className="p-4">
            <h4 className="text-white text-2xl">Library locale</h4>
            <p className="text-white mt-4"> Library Locale is a project that was started out of passion to
              build systems that provide a common African child a platform to
              read and share knowledge.
            </p>
          </div>
          <div className="p-4">
            <h4 className="text-white text-2xl">Library locale</h4>
            <p className="text-white mt-4"> Library Locale is a project that was started out of passion to
              build systems that provide a common African child a platform to
              read and share knowledge.
            </p>
          </div>
          <div className="p-4">
            <h4 className="text-white text-2xl">Library locale</h4>
            <p className="text-white mt-4"> Library Locale is a project that was started out of passion to
              build systems that provide a common African child a platform to
              read and share knowledge.
            </p>
          </div>
        </div>
        <hr className="bg-white w-full"></hr>
        <div className="justify-center items-center">
          <h4 className="text-white mt-2 p-2 text-center font-pmedium italic">
            &copy; <span ref={currentYearRef}></span> All rights reserved, Aaron Leonard Oluk
          </h4>
        </div>
      </section>
    </>
  );
}
