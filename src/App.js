import React from "react";
import Accordion from "./components/Accordion";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use REACT?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use REACT?',
        content: 'You use REACT by creating components'
    }
];

export default () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};
