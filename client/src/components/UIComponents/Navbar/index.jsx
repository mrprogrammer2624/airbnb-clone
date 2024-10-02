import { AvatarOne, Logo } from "@/assets/images";
import { Container } from "@/components";
import { Link } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState } from "react";
import useRegisterModal from "@/hooks/useRegisterModal";

export const Navbar = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  });

  return (
    <>
      <div className="w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              {/* Logo */}
              <Link to={"/"} className="max-w-[118px]">
                <img
                  src={Logo}
                  alt="logo"
                  className="hidden md:block cursor-auto"
                />
              </Link>
              {/* Serach */}
              <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer capitalize">
                <div className="flex flex-row items-center justify-between">
                  <div className="text-sm font-semibold px-6">anywhere</div>
                  <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
                    anyweek
                  </div>
                  <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                    <div className="hidden sm:block">Add Guests</div>
                    <div className="p-2 bg-rose-500 rounded-full text-white">
                      <BiSearch size={18} />
                    </div>
                  </div>
                </div>
              </div>
              {/* UserMenu */}
              <div className="relative">
                <div className="flex flex-row items-center gap-3">
                  <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                    Airbnb your home
                  </div>
                  <div
                    onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full hover:shadow-md transition cursor-pointer"
                  >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                      {/* Avatar */}
                      <img
                        src={AvatarOne}
                        alt="AvatarOne"
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </div>
                {isOpen && (
                  <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-23 text-sm">
                    <div className="flex flex-col cursor-pointer">
                      {/* MenuItem */}
                      <div
                        onClick={() => {}}
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Login
                      </div>
                      <div
                        onClick={registerModal.onOpen}
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        SignUp
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};
