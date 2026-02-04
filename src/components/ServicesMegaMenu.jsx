import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const ServicesMegaMenu = ({ close }) => {
  return (
    <div
      className="
        absolute
        top-full
        left-1/2
        -translate-x-1/2
        bg-white
        z-[9999]
      "
      style={{ width: "1100px" }}   // 👈 CONTROLLED WIDTH
      onMouseLeave={close}
    >
      <div className="px-12 py-12 grid grid-cols-3 gap-20">

        {Object.values(servicesData).map((section) => (
          <div key={section.title}>
            <h3 className="text-[13px] font-semibold text-gray-500 mb-6 uppercase tracking-wide">
              {section.title}
            </h3>

            <ul className="space-y-4">
              {section.services.map((service) => (
                <li key={service}>
                  <Link
                    to={`/services/${slugify(service)}`}
                    onClick={close}
                    className="text-[15px] text-gray-800 hover:text-[#1f3b63]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ServicesMegaMenu;
