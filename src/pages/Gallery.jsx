import React, { useState } from "react";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import pic4 from "../images/pic4.png";
import pic10 from "../images/pic10.png";
import pic12 from "../images/pic12.png";

function Gallery() {
  const [images, setimages] = useState([
    { url: pic1 },
    { url: pic2 },
    { url: pic3 },
    { url: pic4 },
    { url: pic10 },
    { url: pic12 },
    {
      url: "https://csrbox.org/company/proj_img/1513139892569758-environment.jpg",
    },
    {
      url: "https://thirdview.info/wp-content/uploads/2023/05/Improper-waste-management-not-only-harms-the-environment-but-also-poses-health-risks.-Lets-work-together-to-reduce-respiratory-ailments-disease-spread-and-water-pollution.jpg",
    },
    {
      url: "https://cdn.downtoearth.org.in/library/large/2018-10-15/0.15112900_1539588449_waste-segregation.jpg",
    },
    {
      url: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/05/23/Pictures/_01ad49d8-7ce0-11e9-9a75-14b5d08877bf.jpg",
    },
    {
      url: "https://im.whatshot.in/img/2022/Apr/saahas-zero-waste-cropped-1650619350.png",
    },
  ]);
  return (
    <div >
      <div className="flex flex-wrap justify-around gap-2 h-[75vh] lg:h-[78vh] py-6  overflow-auto">
        {images.map((img) => {
          return (
            <div className="h-72 w-80 rounded-md hover:scale-[1.1]">
              <img
                src={img.url}
                alt='img'
                className="h-full rounded-md w-full object-fill"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
