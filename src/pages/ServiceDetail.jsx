import { useParams } from "react-router-dom";
import { servicesContent } from "../data/servicesContent";

const ServiceDetail = () => {
  const { slug } = useParams();

  // Find the service data from servicesContent
  const service = servicesContent[slug];

  // If service not found, show a fallback
  if (!service) {
    return (
      <>
        {/* HERO */}
        <div className="bg-[#0f2e52] py-20 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-bold">Service Not Found</h1>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-gray-700">
            The service you're looking for doesn't exist. Please check the URL or go back to services.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      {/* HERO SECTION with background image */}
      <div 
        className="relative py-32 text-white bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 46, 82, 0.85), rgba(15, 46, 82, 0.85)), url(${service.heroImage})`
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-gray-200 max-w-3xl">{service.introTagline}</p>
        </div>
      </div>

      {/* INTRODUCTION SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#1f3b63] mb-6">
            {service.introTitle}
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {service.introDescription}
            </p>
          </div>
        </div>

        {/* SERVICE SECTIONS */}
        <div className="space-y-12">
          {service.sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#0f2e52] text-white p-6">
                <h3 className="text-2xl font-semibold">{section.heading}</h3>
              </div>
              
              <div className="p-6">
                {section.content && (
                  <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                    {section.content}
                  </p>
                )}
                
                {section.points && section.points.length > 0 && (
                  <ul className="space-y-3">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-[#0f2e52] mr-3 mt-1">•</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-16 bg-gradient-to-r from-[#0f2e52] to-[#1f3b63] text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Contact us today for expert guidance on {service.title}. Our team is ready to assist you with professional services.
          </p>
          <button className="bg-white text-[#0f2e52] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300">
            Get Professional Help
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;