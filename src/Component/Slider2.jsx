const images = [
  { id: 1, src: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", name: "Python" },
  { id: 2, src: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png", name: "HTML" },
  { id: 3, src: "https://cdn-icons-png.flaticon.com/512/5968/5968473.png", name: "CSS" },
  { id: 4, src: "https://cdn-icons-png.flaticon.com/512/226/226777.png", name: "JAVA" },
  { id: 5, src: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png", name: "C#" },
  { id: 6, src: "https://cdn-icons-png.flaticon.com/512/3041/3041129.png", name: "SALESFORCE" },
  { id: 7, src: "https://cdn-icons-png.flaticon.com/512/732/732190.png", name: "TAILWIND" },
  { id: 8, src: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png", name: "C++" },
  { id: 9, src: "https://cdn-icons-png.flaticon.com/512/919/919825.png", name: "NODE.JS" },
  { id: 10, src: "https://cdn-icons-png.flaticon.com/512/919/919831.png", name: "ROR" },
  { id: 11, src: "https://cdn-icons-png.flaticon.com/512/1260/1260175.png", name: "AI" },
  { id: 12, src: "https://cdn-icons-png.flaticon.com/512/2103/2103877.png", name: "ML" },
];

const Slider2 = () => {
  return (
    <section className="flex flex-col justify-center items-center p-12 bg-purple-200">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-6">
        <span className="text-purple-500">Languages</span> we work on
      </h2>
      <span
  className="bg-gradient-to-r from-sky-500 via-purple-500 to-gray-500 text-white p-4">
  S9r Technology adheres to current technological trends and ensures that our team is knowledgeable
  about them so that they can assist you in developing your solution using the most cutting-edge
  technology stack.
</span>
      <div className="relative w-full max-w-full overflow-hidden">
        <div className="flex animate-slider space-x-10">
          {images.concat(images).map((image, index) => (
            <div
              key={index}
              className="flex-none flex flex-col items-center p-4 w-32 md:w-40"
            >
              <img
                src={image.src}
                alt={image.name}
                className="object-contain w-full h-32 md:h-40"
              />
              <span className="mt-2 text-purple-600 font-semibold">
                {image.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider2;
