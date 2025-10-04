import React, { useState, useEffect } from "react";
import Button from "../components/button/buttonMain";
import bhk1 from '../assets/gallery/interior1.jpg';
import bhk2 from '../assets/gallery/4.webp';

import bhk7 from '../assets/pricing/bhk6.jpg';
import bhk8 from '../assets/pricing/godrej20.jpg';
import bhk9 from '../assets/pricing/godrej21.jpg';
import bhk10 from '../assets/pricing/godrej23.jpg';
import bhk11 from '../assets/pricing/godrej24.jpg';
import { useLeadTracking, LEAD_SOURCES, PROPERTY_TYPES } from '../hooks/useLeadTracking';

const Pricing = ({ openContactModal, formSubmitted }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const { trackButtonClick } = useLeadTracking();

  // Unlock pricing when form is submitted
  useEffect(() => {
    if (formSubmitted) {
      setIsUnlocked(true);
    }
  }, [formSubmitted]);

  // Handles switching between floor plans
  const handleFloorPlan = (index) => {
    setActiveTab(index);
  };

  const propertyTypes = [
     { 
      type: "1200 sqft", 
      price: "₹ 3.25 Cr ++", 
      
      image: bhk7,
      leadSource: LEAD_SOURCES.PRICING_1200sqft, // or appropriate lead source
      propertyType: PROPERTY_TYPES.sqft1200
    },
    { 
      type: "1500 sqft", 
      price: "₹ 3.25 Cr ++", 
      
      image: bhk8,
      leadSource: LEAD_SOURCES.PRICING_1500sqft, // or appropriate lead source
      propertyType: PROPERTY_TYPES.sqft1500
    },
    { 
        type: "2000 sqft", 
      price: "₹ 3.25 Cr ++", 
      
      image: bhk9,
      leadSource: LEAD_SOURCES.PRICING_2000sqft, // or appropriate lead source
      propertyType: PROPERTY_TYPES.sqft2000
    },
    { 
        type: "2400 sqft", 
      price: "₹ 3.25 Cr ++", 
      
      image: bhk10,
      leadSource: LEAD_SOURCES.PRICING_2400sqft, // or appropriate lead source
      propertyType: PROPERTY_TYPES.sqft2400
    },
    { 
        type: "4000 sqft", 
      price: "₹ 3.25 Cr ++", 
      
      image: bhk11,
      leadSource: LEAD_SOURCES.PRICING_4000sqft, // or appropriate lead source
      propertyType: PROPERTY_TYPES.sqft4000
    },
  ];

  return (
    <section id="Pricing" className="bg-PrestigeGrey py-10 md:pt-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-black w-full text-center font-subheading font-normal text-3xl md:text-5xl uppercase">
          Available Units
        </h2>

        <div className="flex flex-wrap justify-center gap-10 items-center py-10 px-10 lg:py-12">
          {propertyTypes.map((property, index) => (
            <div
              key={index}
              className="relative p-4 w-fit bg-white cursor-pointer border-[1px] border-PrestigeDarkGrey"
              onClick={() => handleFloorPlan(index)}
            >
              <img src={property.image} alt={property.type} className="w-[400px] h-[250px] mb-8" />

              <div className="font-semibold font-subheading text-xl md:text-2xl w-64 text-black">
                {property.type}
              </div>

              <div className="max-w-md relative text-black">
                <div className="text-xl pt-4 flex items-center font-normal">
                  <span className="text-lg md:text-xl">&bull;</span>{" "}
                  <span className={`text-lg md:text-xl ${!isUnlocked ? "blur-md" : ""}`}>
                    Starting at: {property.price}
                  </span>
                </div>
                <div className="text-xl pt-4 flex items-center font-normal">
                  <span className="text-lg md:text-xl">&bull;</span>
                  <span className={`text-lg md:text-xl ${!isUnlocked ? "blur-md" : ""}`}>
                    Size: {property.size}
                  </span>
                </div>

                <Button
                  text="Get Pricing"
                  onClick={() => {
                    
                    trackButtonClick(property.leadSource, "get_pricing", property.propertyType);
                    openContactModal(property.leadSource, property.propertyType);
                  }}
                  className="absolute w-max top-1/2 right-0 transform -translate-y-1/2 px-6 py-3 text-center font-body font-semibold text-sm sm:text-base transition-all duration-300 ease-in-out"
                  showArrow={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;