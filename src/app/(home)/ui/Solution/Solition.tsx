"use client";
import Container from "@/components/Container";
import styled from "./Solition.module.scss";
import { MdComputer } from "react-icons/md";
export const Solition = () => {
  return (
    <div className={styled.wrapper}>
      <Container>
        <div>
          <h2>Solutions</h2>
          <hr />
          <div className="py-10">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
              
                Network
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
