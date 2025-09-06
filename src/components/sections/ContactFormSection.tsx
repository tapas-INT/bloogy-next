import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const ContactFormSection = (): React.ReactElement => {
  return (
    <section className="w-full bg-white py-[130px]">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row gap-14 justify-center">
          {/* Contact Form */}
          <div className="flex-1 max-w-[800px]">
            <div className="bg-[#F2F0F7] rounded-[30px] p-12 h-full">
              <div className="flex flex-col gap-10">
                {/* Form Fields */}
                <div className="flex flex-col gap-8">
                  {/* Row 1: First Name & Last Name */}
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <label className="block text-[#2C2C2E] font-medium text-lg mb-3">
                        First Name
                      </label>
                      <Input
                        type="text"
                        placeholder="First Name"
                        className="w-full h-[56px] bg-[#E2DFEB] border-none rounded-[32px] px-6 text-[#8C8A91] text-base placeholder:text-[#8C8A91]"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-[#2C2C2E] font-medium text-lg mb-3">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Last Name"
                        className="w-full h-[56px] bg-[#E2DFEB] border-none rounded-[32px] px-6 text-[#8C8A91] text-base placeholder:text-[#8C8A91]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Email */}
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <label className="block text-[#2C2C2E] font-medium text-lg mb-3">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="xxx xxx xxx"
                        className="w-full h-[56px] bg-[#E2DFEB] border-none rounded-[32px] px-6 text-[#8C8A91] text-base placeholder:text-[#8C8A91]"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-[#2C2C2E] font-medium text-lg mb-3">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="Email address"
                        className="w-full h-[56px] bg-[#E2DFEB] border-none rounded-[32px] px-6 text-[#8C8A91] text-base placeholder:text-[#8C8A91]"
                      />
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div>
                    <label className="block text-[#2C2C2E] font-medium text-lg mb-3">
                      Message
                    </label>
                    <textarea
                      placeholder="Write a Message"
                      className="w-full h-[144px] bg-[#E2DFEB] border-none rounded-[16px] px-6 py-4 text-[#8C8A91] text-base placeholder:text-[#8C8A91] resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                <Button className="h-auto bg-[#C6B3FF] hover:bg-[#C6B3FF]/90 text-black px-10 py-4 rounded-[100px] font-normal text-base">
                  Send a Message
                </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Cards */}
          <div className="flex flex-col gap-6 w-full lg:w-[373px]">

            {/* Phone Card */}
            <div className="bg-[#F2F0F7] rounded-[20px] p-9">
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="text-[#000000] font-light text-3xl mb-3">
                    Phone Number
                  </h3>
                  <p className="text-[#4C4B4F] text-sm leading-relaxed">
                    Provide your primary phone number for general inquiries and customer support.
                  </p>
                </div>
                <p className="text-[#8362E8] font-medium text-sm">
                  +1 (123) 456-7890
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#F2F0F7] rounded-[20px] p-9">
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="text-[#000000] font-light text-3xl mb-3">
                    Email
                  </h3>
                  <p className="text-[#4C4B4F] text-sm leading-relaxed">
                    Provide a dedicated email address for general inquiries and customer support.
                  </p>
                </div>
                <p className="text-[#8362E8] font-medium text-sm">
                  mobop95236@abatido.com
                </p>
              </div>
            </div>
            
            {/* Location Card */}
            <div className="bg-[#F2F0F7] rounded-[20px] p-9">
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="text-[#000000] font-light text-3xl mb-3">
                    Location
                  </h3>
                  <p className="text-[#4C4B4F] text-sm leading-relaxed">
                    If you have a physical location, provide the full address, including street address.
                  </p>
                </div>
                <p className="text-[#8362E8] font-medium text-sm">
                  123 Main Street, Anytown, USA, 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
