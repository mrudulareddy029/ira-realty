import React from 'react';

interface ProjectHeroProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ProjectHeroForAll = ({ title, description, imageSrc }: ProjectHeroProps) => {
  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
      {/* The aspect-ratio here is the key:
        - Mobile: Tall ratio
        - Desktop (xl): We use a wider ratio (1440/700) to flatten the image and prevent it from "maximizing"
      */}
      <div className="relative w-full h-[90vh] min-h-[500px] max-h-[850px]">
        <img 
          className="absolute inset-0 w-full h-full object-cover IRA-Realty-carousel1" 
          src={imageSrc} 
          alt={title} 
        />
        
        {/* Alignment Fix: 
          - Changed 'items-center' to 'items-end' and added 'pb-24' 
          - This pulls the text box down toward the info bar as seen in the goal
        */}
        <div className="absolute inset-0 flex items-start justify-start z-10 pt-20 md:pt-34 p-10">
          {/* Glassmorphism effect:
            - Added 'bg-black/40' and 'backdrop-blur-md' to match the soft dark box in Image 1
          */}
          <div className="bg-black/50 backdrop-blur-md p-4 md:p-6 rounded-lg w-full max-w-[90%] md:max-w-[440px] text-white ">
            <h1 
              className="pl-4 font-medium uppercase mb-4 text-2xl md:text-3xl xl:text-[32px] opacity-90"
              style={{ 
                fontFamily: '"MADE Coachella", serif',
                lineHeight: '1.2',
                letterSpacing: '0.05em'
              }}
            >
              {title}
            </h1>
            <div className=" pl-4 font-poppins text-xm md:text-sm xl:text-[16px] leading-relaxed xl:leading-[27px] opacity-90">
              {description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHeroForAll;