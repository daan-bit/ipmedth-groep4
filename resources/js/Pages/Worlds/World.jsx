import Navbar from "@/Components/World/NavBar";
import WorldRoute from "@/Components/World/WorldRoute";
import { Head } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";
import "../../../css/pages/worldoverview.css";

//NOTE: the lines do not disapear when the pages reloads, to change the lines refresh the page
//Make the dashed-lines between the islands/levels
function drawLine() {
    //get the islands and put the x and y center in a dict
    const islands = document.getElementsByClassName("world__route__island");
    let dictIslands = {};
    for (let index = 0; index < islands.length; index++) {
        const island = islands[index];
        let centerX = island.offsetLeft + island.offsetWidth / 2;
        let centerY = island.offsetTop + island.offsetHeight / 2;
        dictIslands[index] = { x: centerX, y: centerY };
    }

    //loop through the dict minus one beacuse the line needs to connect 2 islands
    for (let index = 0; index < Object.keys(dictIslands).length - 1; index++) {
        //Checks if the index is even (al even islands are below)
        let indexEven = false;
        if (index % 2 == 0) indexEven = true;

        //calculate the width and height between the 2 center points (x and y) of 2 islands
        const width = Math.abs(dictIslands[index].x - dictIslands[index + 1].x);
        const height = Math.abs(
            dictIslands[index].y - dictIslands[index + 1].y
        );

        //create svg and add styling
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttributeNS(
            "http://www.w3.org/2000/xmlns/",
            "xmlns:xlink",
            "http://www.w3.org/1999/xlink"
        );

        // if indexeven gets the height of the second card, the one above
        if (indexEven)
            svg.setAttribute(
                "style",
                `position: absolute; top: ${
                    dictIslands[index].y
                }px; left: ${dictIslands[index].x}px; z-index:1;`
            );
        else
            svg.setAttribute(
                "style",
                `position: absolute; top: ${
                    dictIslands[index + 1].y
                }px; left: ${dictIslands[index].x}px; z-index:1;`
            );

        svg.setAttribute("width", width);
        svg.setAttribute("height", height);
        svg.setAttribute("class", "dashed-lines");

        //create line and add styling
        let newLine = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line"
        );
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

        svg.append(newLine); //add the line to the svg
        document.getElementById("world").append(svg); //add the svg with the line to the map
    }
}

//Removes and readds the dashed lines for the new screen size
window.addEventListener("resize", function () {
    const dashed_lines = document.getElementsByClassName("dashed-lines");
    while(dashed_lines.length > 0){
        dashed_lines[0].parentNode.removeChild(dashed_lines[0]);
    }
    drawLine();
});

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
            <Head title="🌎 Wereld 1" />
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
