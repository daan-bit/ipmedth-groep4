import Navbar from "@/Components/World/NavBar";
import WorldRoute from "@/Components/World/WorldRoute";
import { Head } from "@inertiajs/inertia-react";
import { abs } from "@tensorflow/tfjs";
import React, { useState, useEffect } from "react";
import "../../../css/pages/worldoverview.css";

function drawLine() {
    const islands = document.getElementsByClassName("world__route__island");
    let dictIslands = {};
    for (let index = 0; index < islands.length; index++) {
        const island = islands[index];
        let centerX = island.offsetLeft + island.offsetWidth / 2;
        let centerY = island.offsetTop + island.offsetHeight / 2;
        dictIslands[index] = { x: centerX, y: centerY };
    }

    for (let index = 0; index < Object.keys(dictIslands).length-1; index++) {

        //Checks if the index is even
        let indexEven = false;
        if (index % 2 == 0) indexEven = true; 

        const width = Math.abs(dictIslands[index].x - dictIslands[index + 1].x);
        const height = Math.abs(dictIslands[index].y - dictIslands[index + 1].y);

        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        
        // if indexeven gets the height of the second card, the one above
        if (indexEven) svg.setAttribute( "style", `position: absolute; top: ${dictIslands[index].y}px; left: ${dictIslands[index].x}px; z-index:1;`);
        else svg.setAttribute( "style", `position: absolute; top: ${dictIslands[index+1].y}px; left: ${dictIslands[index].x}px; z-index:1;`);
        
        svg.setAttribute("width", width);
        svg.setAttribute("height", height);

        let newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        newLine.setAttribute("id", "line2");
        newLine.setAttribute("x1", 0);
        newLine.setAttribute("x2", width);

        //if indexEven start the line at the bottom
        if (indexEven) {
            newLine.setAttribute("y1", 0);
            newLine.setAttribute("y2", height);
        } else {
            newLine.setAttribute("y1", height);
            newLine.setAttribute("y2", 0);
        }
        newLine.setAttribute("stroke", "white");
        newLine.setAttribute("stroke-width", "4");
        newLine.setAttribute("stroke-dasharray", "25,10,15,10,15,10");

        svg.append(newLine);
        document.getElementById("world").append(svg);
    }
}

function World(props) {
    const world = props.world;
    const assignments = props.assignments;
    const [currentLevel, setCurrentLevel] = useState(0);
    useEffect(() => {
        //definieer laatste assignment oftewel level_id die in results table naarvoren is gekomen.
        setCurrentLevel(
            assignments.length > 0
                ? assignments[assignments.length - 1].assignment_id
                : 0
        );
        drawLine();
    }, [setCurrentLevel]);
    return (
        <article className="world">
            <Head title="🏖️ Wereld" />
            <Navbar student_id={props.student.id} />
            <section className="world__route" id="world">
                {world.map((item, key) => (
                    <WorldRoute
                        className={`world__route__island assignment_${item.id}`}
                        currentIslandLevel={
                            item.id == currentLevel + 1 ? true : false
                        }
                        assignmentStatus={
                            assignments[item.id - 1]
                                ? assignments[item.id - 1].status
                                : "0"
                        }
                        assignmentId={item.id}
                        key={key}
                    />
                ))}
            </section>
        </article>
    );
}

export default World;
