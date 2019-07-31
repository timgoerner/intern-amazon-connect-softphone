import React from 'react';
import './App.css';

export default class App extends React.Component {

  componentWillMount() {
    var script = document.createElement('script')
    script.src = `amazon-connect.min.js`
    script.async = false
    document.body.appendChild(script)
  }

  componentDidMount() {
    try {
      this.runConnect()
    } catch(e) {
      console.log(e)
    }
  }

  runConnect() {
    // eslint-disable-next-line
    if (typeof(connect) !== 'undefined' ){
      // eslint-disable-next-line
        connect.core.initCCP(containerDiv, {
                  ccpUrl:"https://amaysim-payshield-demo.awsapps.com/connect/ccp#/",
                  loginPopup: true,
                  softphone: {
                      allowFramedSoftphone: true
                   }
        });
        // eslint-disable-next-line
        connect.contact(function(contact) {
            var connection = contact.getActiveInitialConnection().getEndpoint()
            var attributes = contact.getAttributes()
            console.log({attributes})
            console.log(connection.phoneNumber)
            console.log(connection)

            var tableRef = document.getElementById('attributesTable').getElementsByTagName('tbody')[0];      
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                            var row = tableRef.insertRow(tableRef.rows.length);
                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell1.innerHTML = key;
                            cell2.innerHTML = attributes[key]['value'];
                }
            }
            contact.onEnded(() => {
              var old_tbody= document.getElementById('attributesTable').getElementsByTagName('tbody')[0];
              var new_tbody = document.createElement('tbody');    
              old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
            });
        });
        
      } else 
        setTimeout(this.runConnect, 1000);
      
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div id="containerDiv">
        </div>
        <fieldset className ="contactAttributes border">
                    <legend className="border">IVR Outputs</legend>            
                    <table id="attributesTable" className="attributesTable">
                        <thead>
                            <tr>
                                <th>Attribute Name </th>
                                <th>Attribute Value </th>
                            </tr>
                        </thead>
                      <tbody>
                            <tr><td></td><td></td></tr>
                      </tbody>
                    </table>
                </fieldset>     
        </header>
        <div className="angularContainer.ng-scope">
        </div>
      </div>
   
   )
      
  }

}