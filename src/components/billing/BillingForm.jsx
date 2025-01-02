
import { FormInput } from "./FormInput";

export function BillingForm() {
  const formFields = [
    { id: "fullName", label: "Full Name", required: true },
    { id: "country", label: "Country", required: true },
    { id: "city", label: "Town/City/Region", required: true },
    { id: "address", label: "Address", required: true },
    { id: "apartment", label: "Apartment/Floor", required: false },
    { id: "email", label: "Email address", required: true, type: "email" },
    { id: "phone", label: "Phone Number", required: false, type: "tel" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col leading-tight max-w-[570px]">
      <h1 className="text-3xl font-semibold text-green-800 max-md:max-w-full">
        Billing Information
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col mt-8 w-full max-md:max-w-full">
        <div className="flex flex-col w-full text-base text-red-600 max-md:max-w-full">
          {formFields.map((field) => (
            <div key={field.id} className="mt-8">
              <FormInput {...field} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center mt-4 w-full text-xs text-center text-neutral-400 max-md:max-w-full">
          <input
            type="checkbox"
            id="saveInfo"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <label htmlFor="saveInfo" className="self-stretch my-auto">
            Save this information for faster check-out next time
          </label>
        </div>
      </form>
    </div>
  );
}