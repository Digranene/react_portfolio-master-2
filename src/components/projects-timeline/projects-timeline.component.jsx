import React from "react";
import {Timeline, Events, UrlButton, ImageEvent} from "@merc/react-timeline";

// projects
import L_ReactToDoList from "../../assets/img/projects/todolist.jpg";
import L_Mern from "../../assets/img/projects/mernstack.jpg";
import L_Store from "../../assets/img/projects/onlinestore.jpeg";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_NEXTJS from "../../assets/img/skills/nextjs.jpeg"
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_JS from "../../assets/img/skills/javascript.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_Redux from "../../assets/img/skills/redux.svg";
import L_TS from "../../assets/img/skills/typescript.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg"


import "./projects-timeline.styles.css";

const TimeLine = () => {
    return (
        <div className="main-block">
            <div id="projects">
                <h1 className="pt-4 text-center font-details-b pb-3">PROJECTS</h1>
                <Timeline>
                    <Events>
                        {/* Project: Todo List With MUI */}
                        <ImageEvent
                            className="text-center "
                            text="React ToDo App"
                            src={L_ReactToDoList}
                            alt="React ToDo App"
                        >
                            <div className="d-flex justify-content-between flex-column mt-1">
                                <div>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle
                                                as={Card.Header}
                                                eventKey="0"
                                                className="p-2 text-center accordian-main"
                                            >
                                                PROJECT DETAILS
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey="0" className="text-left">
                                                <Card.Body>
                                                    <strong>Description:</strong> This is a Todo App created with React
                                                    and
                                                    Material UI that keeps a track of your Todos
                                                    <hr/>
                                                    <strong>Features:</strong>
                                                    <ul className="list-styles pt-1">
                                                        <li>Keeps track of your Todos</li>
                                                        <li>Powered by React and Material UI</li>
                                                        <li>Respoisive Design</li>
                                                    </ul>
                                                    <hr/>
                                                    <strong>Tech used:</strong>
                                                    <ul>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_HTML5}
                                  alt="HTML 5"
                                  rounded
                                  className="image-style m-1"
                              ></Image>{" "}
                                HTML5
                            </span>
                                                        </li>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_CSS3}
                                  alt="CSS 3"
                                  rounded
                                  className="image-style m-1"
                              ></Image>{" "}
                                CSS3
                            </span>
                                                        </li>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_TS}
                                  alt="Redux"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                Type Script
                            </span>
                                                        </li>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_REACT}
                                  alt="React"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                React
                            </span>
                                                        </li>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_Redux}
                                  alt="Redux"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                Redux
                            </span>
                                                        </li>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_MATERIALUI}
                                  alt="Material-UI"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                Material-UI
                            </span>
                                                        </li>

                                                    </ul>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                    <UrlButton
                                        href="https://github.com/Digranene/todolist"
                                        target="_blank"
                                    >
                                        SOURCE CODE
                                    </UrlButton>
                                </div>
                            </div>
                        </ImageEvent>
                        {/* Project: MERN  */}
                        <ImageEvent
                            className="text-center"
                            text="MERN"
                            src={L_Mern}
                            alt="MERN stack technologies"
                        >
                            <div className="d-flex justify-content-between flex-column mt-1">
                                <div>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle
                                                as={Card.Header}
                                                eventKey="0"
                                                className="p-2 text-center accordian-main"
                                            >
                                                PROJECT DETAILS
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey="0" className="text-left">
                                                <Card.Body>
                                                    <strong>Description:</strong> interaction between server and client
                                                    using a stack MERN
                                                    <hr/>
                                                    <strong>Features:</strong>
                                                    <ul className="list-styles pt-1">
                                                        <li>Registration</li>
                                                        <li>Authorization</li>
                                                        <li>Statistics of clicks on links</li>
                                                    </ul>
                                                    <hr/>
                                                    <strong>Tech used:</strong>
                                                    <ul>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_REACT}
                                  alt="React"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                React
                            </span>
                                                        </li>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_NODE_JS}
                                  alt="Node.js"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                Node.js
                            </span>
                                                        </li>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_EXPRESS}
                                  alt="Express"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                Express
                            </span>
                                                        </li>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_MONGODB}
                                  alt="MongoDB"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                MongoDB
                            </span>
                                                        </li>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_MATERIALUI}
                                  alt="Material-UI"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                Material-UI
                            </span>
                                                        </li>
                                                    </ul>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                    <UrlButton
                                        href="https://github.com/Digranene/MERN"
                                        target="_blank"
                                    >
                                        SOURCE CODE
                                    </UrlButton>
                                </div>
                            </div>
                        </ImageEvent>

                        {/* Project: Online-store Ikea  */}
                        <ImageEvent
                            className="text-center"
                            text="Online-store"
                            src={L_Store}
                            alt="Online-store on vanilla JS"
                        >
                            <div className="d-flex justify-content-between flex-column mt-1">
                                <div>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle
                                                as={Card.Header}
                                                eventKey="0"
                                                className="p-2 text-center accordian-main"
                                            >
                                                PROJECT DETAILS
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey="0" className="text-left">
                                                <Card.Body>
                                                    <strong>Description:</strong> Online-store IKEA on vanilla JS
                                                    <hr/>
                                                    <strong>Features:</strong>
                                                    <ul className="list-styles pt-1">
                                                        <li>Sort of items</li>
                                                        <li>Cart</li>
                                                        <li>Likes</li>
                                                        <li>Responsive</li>
                                                    </ul>
                                                    <hr/>
                                                    <strong>Tech used:</strong>
                                                    <ul>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_HTML5}
                                  alt="HTML-5"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                HTML5
                            </span>
                                                        </li>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_CSS3}
                                  alt="CSS3"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                CSS3
                            </span>
                                                        </li>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_JS}
                                  alt="JavaScript"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                Java Script
                            </span>
                                                        </li>
                                                    </ul>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                    <UrlButton
                                        href="https://github.com/Digranene/ikea"
                                        target="_blank"
                                    >
                                        SOURCE CODE
                                    </UrlButton>
                                    <UrlButton
                                        href="https://digranene.github.io/ikea/index.html"
                                        target="_blank"
                                    >
                                        VIEW LIVE PROJECT
                                    </UrlButton>
                                </div>
                            </div>
                        </ImageEvent>

                                                {/* Project: MERN  */}
                                                <ImageEvent
                            className="text-center"
                            text="MERN"
                            src={L_Mern}
                            alt="MERN stack technologies"
                        >
                            <div className="d-flex justify-content-between flex-column mt-1">
                                <div>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle
                                                as={Card.Header}
                                                eventKey="0"
                                                className="p-2 text-center accordian-main"
                                            >
                                                PROJECT DETAILS
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey="0" className="text-left">
                                                <Card.Body>
                                                    <strong>Description:</strong> interaction between server and client
                                                    using a stack MERN
                                                    <hr/>
                                                    <strong>Features:</strong>
                                                    <ul className="list-styles pt-1">
                                                        <li>Registration</li>
                                                        <li>Authorization</li>
                                                        <li>add and remove product</li>
                                                        <li>add and remove category</li>
                                                        <li>add and remove user</li>
                                                        <li>Statistics of clicks on links</li>
                                                    </ul>
                                                    <hr/>
                                                    <strong>Tech used:</strong>
                                                    <ul>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_REACT}
                                  alt="React"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                React
                            </span>
                                                        </li>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_NEXTJS}
                                  alt="NextJS"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                NextJS
                            </span>
                                                        </li>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_NODE_JS}
                                  alt="Node.js"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                Node.js
                            </span>
                                                        </li>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_EXPRESS}
                                  alt="Express"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                Express
                            </span>
                                                        </li>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_MONGODB}
                                  alt="MongoDB"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                MongoDB
                            </span>
                                                        </li>
                                                        <li>
                            <span className="p-2">
                              <Image
                                  src={L_BOOTSTRAP}
                                  alt="Bootstrap"
                                  rounded
                                  className="image-style1 m-1"
                              ></Image>{" "}
                                Bootstrap
                            </span>
                                                        </li>
                                                    </ul>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                    <UrlButton
                                        href="https://github.com/Digranene/MERN"
                                        target="_blank"
                                    >
                                        SOURCE CODE
                                    </UrlButton>
                                </div>
                            </div>
                        </ImageEvent>
                    </Events>
                </Timeline>
            </div>
        </div>
    );
};

export default TimeLine
