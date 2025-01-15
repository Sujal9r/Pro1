import React from 'react';

const imageUrls = [
  'https://media.istockphoto.com/id/1449032425/photo/shopping-bag-full-of-healthy-food-on-blue.jpg?s=612x612&w=0&k=20&c=856XpqRgq8Bj9Mr28VzAdW-iTyHEj_dW01m6SPPHsOU=',
  'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  'https://hips.hearstapps.com/hmg-prod/images/summer-trends-1647373704.png',
  'https://media.licdn.com/dms/image/C5112AQE7nKMEG8NUDA/article-cover_image-shrink_720_1280/0/1561300973072?e=2147483647&v=beta&t=glv2S27Kx_oHB9ReKS4jBmoxdWolpT5z7AAnflIBLko',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT54MEA3KhgLf0bofI_4zcRjng2oEWCnExQHA&s',
  'https://environment-review.yale.edu/sites/default/files/vanessa-bucceri-gdirwiyama8-unsplash.jpg',
  'https://thelaunchcenter.org/wp-content/uploads/2023/09/programming-background-with-person-working-with-codes-computer-1024x683.jpg',
  'https://blog-cdn.codefinity.com/images/a4b453d2-02a5-48be-ae1a-49e8b6b8df70_ae746dc3a3b94a80b6a173c269313e29.png.png'
];

const titles = [
  'UI/UX Pages',
  'Our Branch',
  'Employees',
  'Innovation',
  'Cloud Solution',
  'Data Analytics',
  'Training',
  'Education'
];

export const Pro1 = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-3">
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:rotate-360"
        >
          <img
            src={url}
            alt={titles[index]}
            className="w-[100px] h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:	transform: rotate(180deg);"
          />
          <p className="text-center text-sm mt-2 font-medium">{titles[index]}</p>
          <button
            className="mt-3 px-4 py-2 rounded-full text-white font-bold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 hover:shadow-lg transition-all duration-300"
            onClick={() => alert(`You clicked on ${titles[index]}`)}
          >
            Explore
          </button>
        </div>
      ))}
    </div>
  );
};
