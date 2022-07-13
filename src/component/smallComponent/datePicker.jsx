import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }
  

  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        {selectedDay && <p className="text-sm">Make schedule on: {selectedDay.toLocaleDateString()}</p>}
        {!selectedDay && <p>Choose a day</p>}
        {/* <style>{birthdayStyle}</style> */}
        <DayPickerInput  selectedDays={[
        new Date(2022, 1, 12),
        new Date(2022, 1, 23),
        {
          after: new Date(2022, 1, 20),
          before: new Date(2022, 1, 25),
        },
      ]} onDayChange={this.handleDayChange} />
      </div>
    );
  }
}
