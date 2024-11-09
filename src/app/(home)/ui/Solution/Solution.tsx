"use client";
import Container from "@/components/Container";
import styled from "./Solution.module.scss";
import { MdComputer } from "react-icons/md";
import { FaServer, FaDatabase, FaCogs } from "react-icons/fa";
import Link from "next/link";

export const Solutions = () => {
  return (
    <div className={styled.wrapper}>
      <Container>
        <section className={styled.content}>
          <h2>Solutions</h2>
          <hr />
          <p className={styled.subtitle}>
            Discover the use cases for our integrated systems
          </p>
          <div className={styled.cardContainer}>
            <div className={styled.card}>
              <FaCogs className={styled.icon} />
              <h3>Control Processing</h3>
              <p>
                Manages and executes instructions for device operations or system control tasks.
              </p>
              <Link href="" className={styled.learnMore}>
                Learn more
              </Link>
            </div>
            <div className={styled.card}>
              <MdComputer className={styled.icon} />
              <h3>Data/Image Processing</h3>
              <p>
                Analyzes and transforms raw data or images into meaningful information.
              </p>
              <Link href="" className={styled.learnMore}>
                Learn more
              </Link>
            </div>
            <div className={styled.card}>
              <FaDatabase className={styled.icon} />
              <h3>Data Storage</h3>
              <p>
                Retains and organizes data for easy access and long-term preservation.
              </p>
              <Link href="#" className={styled.learnMore}>
                Learn more
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};
