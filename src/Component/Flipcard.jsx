import React from "react";

export const Flipcard = () => {
  return (
    <div className="flex flex-wrap justify-center items-center p-8 gap-6 sm:p-8 md:p-18 lg:gap-8 bg-purple-200">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-6">
        <span className="text-purple-500">Websites</span> We Make
      </h2>
      <span className="bg-gradient-to-r from-indigo-400 via-purple-800 to-gray-600 text-white p-4">
        S9r Technology We specialize in providing a wide range of
        custom-designed websites to meet the unique needs of our customers. From
        innovative designs to seamless user experiences, our solutions are
        crafted with precision and creativity. Explore the future of web
        technology
      </span>

      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="w-full h-full rounded-2xl"
                src="https://wallpaperaccess.com/full/184117.jpg"
                alt="Card 1"
              />
            </div>
            <div className="flip-card-back">
              <p className="text-white text-center p-4">
                we provide expert reviews, the latest car news, and essential
                tips for car enthusiasts. Whether you're shopping for a new car,
                exploring the latest trends, or learning about car maintenance,
                we’ve got you covered. Join us for trusted insights and all
                things automotive!
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card-short">
          <div className="flip-card-short-inner">
            <div className="flip-card-short-front">
              <img
                className="w-full h-[250px] rounded-2xl"
                src="https://i.pinimg.com/originals/15/75/d9/1575d98a2443e228d63f2909df559c02.jpg"
                alt="Card 2"
              />
            </div>
            <div className="flip-card-short-back">
              <p className="text-white text-center p-4">
                we are dedicated to making a positive impact by supporting
                communities in need.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="w-full h-full rounded-2xl"
                src="https://img.freepik.com/premium-photo/educational-setting-library-bookshelf-back-school-stack-books-vertical-mobile-wallpaper_795881-29889.jpg"
                alt="Card 3"
              />
            </div>
            <div className="flip-card-back">
              <p className="text-white text-center p-4">
                we bring together readers, authors, and book lovers. Whether
                you're searching for your next great read, exploring new genres,
                or looking for recommendations, we’ve got something for
                everyone. Join our community and discover a universe of books,
                reviews, and literary insights!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flip-card-short">
          <div className="flip-card-short-inner">
            <div className="flip-card-front">
              <img
                className="w-full h-[250px] rounded-2xl"
                src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D"
                alt="Card 4"
              />
            </div>
            <div className="flip-card-short-back">
              <p className="text-white text-center p-4">
                {" "}
                Whether you're visiting for business, relaxation, or a special
                occasion, we ensure a seamless experience with everything you
                need right at your doorstep.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="w-full h-full rounded-2xl"
                src="https://static.vecteezy.com/system/resources/previews/030/465/615/large_2x/clothing-shop-s-hangers-exhibit-modern-fashion-highlighting-the-boutique-s-stylish-ambiance-vertical-mobile-wallpaper-ai-generated-free-photo.jpg"
                alt="Card 5"
              />
            </div>
            <div className="flip-card-back">
              <p className="text-white text-center p-4">
                we bring the latest fashion trends, expert style advice, and
                curated collections to help you express your unique personality
                through clothing. From everyday wear to special occasions,
                discover the perfect outfits and accessories to elevate your
                wardrobe. Stay stylish, stay confident!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="w-full h-full rounded-2xl"
                src="https://static.vecteezy.com/system/resources/previews/030/314/150/large_2x/house-model-on-wood-table-real-estate-agent-offer-house-property-insurance-vertical-mobile-wallpaper-ai-generated-free-photo.jpg"
                alt="Card 6"
              />
            </div>
            <div className="flip-card-back">
              <p className="text-white text-center p-4">
                we specialize in helping you find the perfect property, whether
                you're buying, selling, or renting. Our expert team offers
                valuable insights and personalized service to guide you through
                every step of the real estate process. Explore our listings
                today and find your dream home!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="w-full h-full rounded-2xl"
                src="https://thumbs.dreamstime.com/b/hands-cupped-holding-floating-medical-icons-symbolizing-healthcare-patient-centered-tech-vertical-mobile-wallpaper-hands-342780177.jpg"
                alt="Card 7"
              />
            </div>
            <div className="flip-card-back">
              <p className="text-white text-center p-4">
                we provide trusted healthcare solutions to help you live a
                healthier life. Whether you're looking for expert medical
                advice, wellness tips, or quality healthcare services, we’re
                here to support your journey to better health. Explore our
                resources and start prioritizing your well-being today!
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card-short">
          <div className="flip-card-short-inner">
            <div className="flip-card-short-front">
              <img
                className="w-full h-[250px] rounded-2xl"
                src="https://img.freepik.com/premium-photo/mobile-entertainment-wallpapers-your-device_1106493-43722.jpg"
                alt="Card 8"
              />
            </div>
            <div className="flip-card-short-back">
              <p className="text-white text-center p-4">
                {" "}
                we bring you the latest in mobile innovation. From cutting-edge
                smartphones to essential accessories, our platform offers
                detailed reviews, comparisons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipcard;
