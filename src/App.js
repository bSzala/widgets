import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Blue',
        value: 'blue'
    },
    {
        label: 'A shade of blue',
        value: 'shade'
    }
];

export default () => {

    const [selected, setSelected] = useState(options[0]);



    return (
        <div>
            {/*<Accordion items={items} />*/}
            {/*<Search />*/}
            <Translate />
        </div>
    );
};
