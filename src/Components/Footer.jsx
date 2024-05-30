import React from "react";

function Footer() {
  return (
    <>
      {/* <!--Footer container--> */}
      <footer class="">
        <div class="container p-6 flex justify-center">
          <div class="w-1/2">
            <div class="mb-6 md:mb-0 mx-auto">
              <h5 class="mb-10 font-medium uppercase text-center text-red-800 text-4xl">
                Family Wellness Massage Therapy
              </h5>

              <p class="mb-4 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div class="w-full bg-gray-500 p-4 text-center">
          © 2023 Copyright:
          <a>Aryan</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
