import React, { Component } from 'react'
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

export default class DayPickerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            from: null,
            to: null
        };
    }

    handleFromChange = from => {
        this.setState({ from });
    };
    handleToChange = to => {
        this.setState({ to });
    };

    getInterval() {
        const { from, to } = this.state;

        if(from && to)
            return <p>from: {from.getDay()}.{from.getMonth()}.{from.getFullYear()} to: {to.getDay()}.{to.getMonth()}.{to.getFullYear()}</p>;
        else
            return null;
    }

    render() {
        return (
            <div>
                <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" onDayChange={this.handleFromChange}/>
                <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" onDayChange={this.handleToChange}/>
                {this.getInterval()}
            </div>
        );
    }
}