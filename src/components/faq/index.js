import AccordionGroup from "./accordion-group";
import Contact from "./contact";
import "./faq.css";
import RegistrationForm from "./registration-form";

const FAQ = () => {
    return (
        <div className="faq bg-gradient-to-b from-[#190F3E] to-[#7E4081]">
            <div className="navigationContainer">
                <h1 className="text-center text-white my-10">FAQ</h1>

                <div className="md:hidden w-[90%] mx-auto">
                    <div className="w-full">
                        <RegistrationForm />
                    </div>

                    <div className="w-full">
                        <AccordionGroup />
                    </div>

                    <div className="w-full">
                        <Contact />
                    </div>
                </div>

                <div className="hidden md:flex w-[90%] mx-auto">
                    <div className="w-[50%]">
                        <RegistrationForm />
                        <Contact />
                    </div>

                    <div className="w-[50%]">
                        <AccordionGroup />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
