import React from 'react';
import SimpleForm from './SimpleForm';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        Name:<input type="text" value="funnel1" className="input"/>
        <SimpleForm />
      </div>
    );
  }
}
