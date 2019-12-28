import React, { Component } from 'react';
import ReactSearchBox from 'react-search-box'

class Home extends Component {


    data = [
        {
          key: 'john',
          value: 'John Doe',
        },
        {
          key: 'jane',
          value: 'Jane Doe',
        },
        {
          key: 'mary',
          value: 'Mary Phillips',
        },
        {
          key: 'robert',
          value: 'Robert',
        },
        {
          key: 'karius',
          value: 'Karius',
        },
      ]



    render() {

        //TODO:
        // 1. Search job component
        // 2. Location
        // 3. Button for Search


        //Pages:
        // 1. Homepage
                // <Input button for Job>
                // <Input button for Location>
                // <Button for search>

        // 2. Search Result page


        return (
            <div>
                <ReactSearchBox
                    placeholder="Placeholder"
                    value="Doe"
                    data={this.data}
                    callback={record => console.log(record)}
                />

                <ReactSearchBox
                    placeholder="Placeholder2"
                    value="Mike"
                    data={this.data}
                    callback={record => console.log(record)}
                />       
            </div>


            
        );
    }
}

export default Home