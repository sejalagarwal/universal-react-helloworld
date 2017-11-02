import React from 'react';
var jsdom = require('jsdom');
// var $ = require('jquery')(jsdom.jsdom().defaultView);

export default class IncorporationForm extends React.Component {
  constructor() {
    super();

    this.state = {
      events: [{
        name: '',
        row: [{ tpid: '',equal: '',value: ''}]
      }]
    };

    // bind event handler context
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddRow = this.handleAddRow.bind(this);
  }

  // ...


  handleAddRow(eventId){
    this.state.events[eventId].row = this.state.events[eventId].row.concat([{ tpid: '',equal: '',value: ''}])
    this.setState({});    
  }

  handleRemoveRow(eventId, idx){
    this.state.events[eventId].row = this.state.events[eventId].row.filter((s, sidx) => idx !== sidx);
    
    this.setState({});
  }
  handleAddEvent(){
    this.state.events.push({ name: '',row: [{ tpid: '',equal: '',value: ''}]})
    this.setState({});
  }
  handleDeleteEvent(ide){
     this.setState({
      events: this.state.events.filter((s, side) => ide !== side)
    });
  }

  getRows(eventId) {
    return this.state.events[eventId].row.map((row, idx) => (
              <div className="rows" key={idx}>
                 <select name={`tpid_${eventId}_${idx}`} placeholder="tpid">
                  <option value="tpid">tpid</option>
                  <option value="status">status</option>
                </select>
                <select name={`equal_${eventId}_${idx}`}  placeholder="equal">
                  <option value="equal">equals</option>
                </select>
                  <input type="text"
                  placeholder="Value"
                  name={`value_${eventId}_${idx}`}/>
                <button type="button" className="buttondel" onClick={this.handleRemoveRow.bind(this, eventId, idx)}>X</button>
              </div>
        ));
  }
  getEvents(){
    return this.state.events.map((eventi, ide) => (
          <div key={ide} className="eventdiv">
          <select name={`event_${ide}`} placeholder="Choose Event">
            <option value="click">_email_click</option>
            <option value="open">_email_open</option>
            <option value="reqsent">_email_req_sent</option>
            </select>
            <button type="button" onClick={this.handleAddRow.bind(this,ide)} className="small">Add Row</button>
            <button type="button" className="buttondel" onClick={this.handleDeleteEvent.bind(this,ide)} className="eventDelete">X</button><br/>

            {this.getRows(ide)}
        </div>
        ));
  }

  render() {
    return (
      <form className="form">
        {/* ... */}
        {this.getEvents()}
        <button type="button" onClick={this.handleAddEvent.bind(this)} className="eventAdd">Add funnel Step</button>
        <button type="button" id='submitButton'>Submit</button>
      </form>
    )
  }
}