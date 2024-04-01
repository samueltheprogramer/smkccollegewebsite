import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { CloseSharp } from "@mui/icons-material";
import Link from "next/link";

export default function Drawer() {
  return (
    <React.Fragment>
      <div className="drawer drawer-end z-30 ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}

          <label
            htmlFor="my-drawer-4"
            className="btn btn-square btn-ghost px-10 hover:ring-2 ring-black drawer-button"
          >
            <MenuIcon fontSize="large" />
          </label>
        </div>
        <div className="drawer-side z-30 ">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 lg:w-80 w-52 min-h-full bg-base-200 text-base-content z-10">
            {/* Sidebar content here */}

            <h1 className="bg-red-300 flex justify-center w-20 mb-3">Samuel</h1>
            <label
              htmlFor="my-drawer-4"
              className="btn btn-square btn-ghost px-10 hover:ring-2 ring-black drawer-button absolute right-5 top-0"
            >
              <CloseSharp fontSize="large" />
            </label>
            <li><Link href="/#">HOME</Link></li>
            <li><Link href="/#">ABOUT US</Link></li>
            <li><Link href="/#">FACILITIES </Link></li>
            <li><Link href="/#">ACTIVITIES</Link></li>
            <li><Link href="/#">COURSES OFFERED</Link></li>
            <li><Link href="/#">CONTACT US</Link></li>
            
           
           

            
            <li> <Link href="/CollegeToppers">COLLEGE TOPPERS</Link></li>
           
           
          </ul>
          
          <label
            htmlFor="my-drawer-4"
            className="btn btn-square btn-ghost px-10 hover:ring-2 ring-black drawer-button"
          >
            <MenuIcon fontSize="large" />
          </label>
          <h1>hi</h1>
        </div>
      </div>
    </React.Fragment>
  );
}
