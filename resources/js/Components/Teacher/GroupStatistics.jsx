import React, { useState } from "react";
import StackedBarChart from "@/Components/StackedBarChart";
import "../../../css/components/Teacher/GroupStats.css";

export default function GroupStatistics(props) {
    // console.log(props);
    const [average, setAverage] = useState();
    const [median, setMedian] = useState();
    const [mode, setMode] = useState();
    const [min, setMin] = useState();
    const [max, setMax] = useState();

    let allMadeAssignmentIds = [];

    const [rightArray, setRightArray] = useState([[0], [0], [0], [0], [0]]);
    const [wrongArray, setWrongArray] = useState([[0], [0], [0], [0], [0]]);
    const [unFinishedArray, setUnfinishedArray] = useState([
        [0],
        [0],
        [0],
        [0],
        [0],
    ]);

    function refreshData() {
        setRightArray([[0], [0], [0], [0], [0]]);
        setWrongArray([[0], [0], [0], [0], [0]]);
        setUnfinishedArray([[0], [0], [0], [0], [0]]);

        for (let i = 0; i < props.allResults.length; i++) {
            let resultPerStudent = props.allResults[i];

            for (let i = 0; i < props.assignments.length; i++) {
                let indexOfExcercise = props.assignments[i]["id"] - 1;

                if (resultPerStudent[i] == undefined) {
                    updateArrays(indexOfExcercise, 0);
                } else if (
                    props.assignments[i]["id"] ==
                    resultPerStudent[i]["assignment_id"]
                ) {
                    allMadeAssignmentIds.push(
                        resultPerStudent[i]["assignment_id"]
                    );
                    updateArrays(
                        indexOfExcercise,
                        resultPerStudent[i]["status"]
                    );
                }
            }
        }
    }

    function updateArrays(placeInArray, statusOfExcercise) {
        if (statusOfExcercise == 1) {
            rightArray[placeInArray][0] += 1;
        } else if (statusOfExcercise == -1) {
            wrongArray[placeInArray][0] += 1;
        } else if (statusOfExcercise == 0) {
            unFinishedArray[placeInArray][0] += 1;
        }
    }

    function calculateStatistics() {
        setAverage(
            Math.round(
                allMadeAssignmentIds.reduce((a, b) => a + b, 0) /
                    allMadeAssignmentIds.length
            )
        );
        setMedian(Math.round(calculateMedian(allMadeAssignmentIds)));
        setMode(calculateMode(allMadeAssignmentIds));
        setMin(Math.min.apply(Math, allMadeAssignmentIds));
        setMax(Math.max.apply(Math, allMadeAssignmentIds));
    }

    function calculateMedian(arr) {
        if (arr.length == 0) {
            return;
        }
        arr.sort((a, b) => a - b);
        const midpoint = Math.floor(arr.length / 2);
        const median =
            arr.length % 2 === 1
                ? arr[midpoint]
                : (arr[midpoint - 1] + arr[midpoint]) / 2;
        return median;
    }

    function calculateMode(arr) {
        const mode = {};
        let max = 0,
            count = 0;

        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];

            if (mode[item]) {
                mode[item]++;
            } else {
                mode[item] = 1;
            }

            if (count < mode[item]) {
                max = item;
                count = mode[item];
            }
        }
        return max;
    }

    console.log(min)

    return (
        <article className="OverviewPerGroupPage">
            <section className="OverviewPerGroupPage__statisticContainer">
                <section className="statisticContainer__statistic">
                    <section className="statistic__titleContainer">
                        <h3 className="bold">Gemiddelde</h3>
                    </section>
                    <section className="statistic__contentContainer">
                        <h3>{average ? average : "-"}</h3>
                    </section>
                </section>
                <section className="statisticContainer__statistic">
                    <section className="statistic__titleContainer">
                        <h3 className="bold">Mediaan</h3>
                    </section>
                    <section className="statistic__contentContainer">
                        <h3>{median ? median : "-"}</h3>
                    </section>
                </section>
                <section className="statisticContainer__statistic">
                    <section className="statistic__titleContainer">
                        <h3 className="bold">Modus</h3>
                    </section>
                    <section className="statistic__contentContainer">
                        <h3>{mode === 0 ? "-" : mode}</h3>
                    </section>
                </section>
                <section className="statisticContainer__statistic">
                    <section className="statistic__titleContainer">
                        <h3 className="bold">Min / Max</h3>
                    </section>
                    <section className="statistic__contentContainer">
                        <h3>
                            {min === Infinity ? "-" : min} / {max === -Infinity ? "-" : max}
                        </h3>
                    </section>
                </section>
            </section>
            <section className="OverviewPerGroupPage__chartContainer">
                <StackedBarChart
                    refreshData={refreshData}
                    calculateStatistics={calculateStatistics}
                    rightArray={rightArray}
                    wrongArray={wrongArray}
                    unFinishedArray={unFinishedArray}
                    Assignments={props.assignments}
                />
            </section>
        </article>
    );
}
