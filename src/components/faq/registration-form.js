import GoogleForm from "./images/google-forms.png";
export default function RegistrationForm() {
  return (
    <div className="rounded-2xl shadow m-3 bg-white">
      <div
        className={`cursor-pointer accordion-header p-3 flex justify-between items-center rounded-t-xl bg-gray-300`}
      >
        <p className="m-0 font-bold text-xl">Registration Form</p>
      </div>
      {/* <div
        className={`flex accordion-content rounded-b-xl items-center justify-center`}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfh4cHP3-va1MyuEhrIzpV5_Ld0smHllZ-FHxhzD7YZucfb7g/viewform"
          width="100%"
          height="500px"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div> */}
      <div className={`p-3`}>
        <a
          className="flex gap-3 items-center"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfh4cHP3-va1MyuEhrIzpV5_Ld0smHllZ-FHxhzD7YZucfb7g/viewform"
        >
          <img src={GoogleForm} className="w-8 h-8" />
          Link to Register
        </a>
      </div>
    </div>
  );
}
