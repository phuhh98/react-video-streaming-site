import React from "react";
import { MainContent } from "./styledComponents/ContainerStyled";
export default function About() {
  return (
    <>
      <MainContent>
        <br />
        <h2>About the project</h2>
        <br />
        <h3>What is it?</h3>
        <p>R&amp;D project to learn React - Front-end JavaScript library</p>
        <br />
        <h3>Project expectations</h3>
        <p>
          <ul>
            <li>User can browse movies</li>
            <li>Using filter to look for movies with the same genre</li>
            <li>
              Can create personal account and put movie to like and favorite
              categories
            </li>
          </ul>
        </p>
        <br />
        <h3>Author</h3>
        <p>Hoai Phu Huynh, EPAM System Vietnam</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </MainContent>
    </>
  );
}
