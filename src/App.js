import { Component } from 'react';
import Header from './components/header';
import CreateForm from './components/create-form';
import ReportTable from './components/report-table';
import Footer from './components/footer';
import { hours } from './data';
import './App.css';
import Cursor from './Cursor';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      standReports: []
    };
  }

  handleCreate = (standData) => {
    const standReports = [...this.state.standReports, standData];
    this.setState({ standReports });
  };

  render() {
    return (
      <div id="body" >
        <Header />
        <main>
          <CreateForm onCreate={this.handleCreate} />
          <ReportTable hours={hours} reports={this.state.standReports} />
        </main>
        <Footer reports={this.state.standReports} />
        <Cursor />
      </div >
    );
  }
}

export default App;
