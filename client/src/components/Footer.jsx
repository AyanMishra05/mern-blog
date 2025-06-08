import React from "react";
import {
  Footer,
  FooterTitle,
  FooterLinkGroup,
  FooterLink,
  FooterCopyright,
  FooterDivider,
  
} from "flowbite-react";
import { Link } from "react-router-dom";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white "
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                BELLA's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="About" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://www.100jsprojects.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Projects
                </FooterLink>
                <FooterLink
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BELLA's Blog
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://github.com/AyanMishra05"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </FooterLink>
                <FooterLink
                  href="https://www.linkedin.com/in/ayan-mishra-154555246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </FooterLink>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                  Terms &amp; Conditions
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div>
            <FooterCopyright 
                href="#"
                by="BELLA's Blog"
                year={new Date().getFullYear()}
            />
        </div>
      </div>
    </Footer>
  );
}
